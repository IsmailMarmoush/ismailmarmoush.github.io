---
layout: post
title:  "Why I stopped using Getters and Setters in Java"
author: ismailmarmoush
image: /assets/posts/java.jpg
featured: false
hidden: false
tags: development
---

This decision was pragmatic, many were skeptical and others said it’s a bold proposal, in my defense it came as a series
of logical deductions (or so it seemed to me).

And I’m only posting this because I still have some doubts and I want it to be challenged.

## Background

I don’t like annotations, to me they’re magic and I don’t like magic in programming, and same goes for Scala Implicits.

In short, I like to see my application flow from a simple main function to the end, with everything clear,
nothing happening underneath.

I still have some doubts though, and I want the approach to be challenged, and result to either a sound counter argument
or it prevails.

## Story

With that background in mind, I never liked using Lombok or other tools to shorten my code, but then I was left with
nonsense functions.

With the functional programming era, reactive systems too, and Scala influence, as soon as I started
using [pure functions]([https://en.wikipedia.org/wiki/Pure_function](https://en.wikipedia.org/wiki/Pure_function))
and [immutable classes]([https://stackoverflow.com/questions/3162665/immutable-class](https://stackoverflow.com/questions/3162665/immutable-class))

1. Setters became useless
2. Later I started dropping the “get” prefix since setters are no longer there.
3. Now the only difference is having a function reference or having direct public access to immutable object,
   so I thought why not just make it public and of course final e.g `public final String name` kind of thing?

```java
public class User {
  public final String firstName;
  public final String lastName;
  public final Option<Int> age;

  public User(String firstname, String lastName, Option<Int> age) {
    //...  
  }
}
```

The class is now super short, easy to read and use.

## Counter Arguments

1. **Encapsulation**

Well, as the previous train of thoughts might have made it clear the variables are immutable already.

“What if you wanted for example to return a copy of it ?”

Well, first doesn’t this make an overhead calculation, and why not use an immutable collection already?

Plus returning a mutable copy is by itself not the best thing, since it will be used outside over and over, and its
reference by itself is dangerous.

Another sub-argument is “When using the getter methods you can refactor what is returned without changing the method
signature.”

Well, actually if you wanted to do so, you can do it while initializing the variable in the constructor.

Not to mention that breaking your expected values contract isn’t the best thing to do accompanied by hiding such change
in your code commits, maybe it’s a good idea if you changed it that code would break in many other places and you’d see
where it’s used, plus code reviewers will do so too.

**2. Polymorphism**

Now this one might seem like a bump at first look but actually, it isn’t.

Because when you inherit a class you’d have to define the super constructor and therefore all the previous instance
variables are going to be initialized in your child class. And of course, when you override a method you can do whatever
you want.

**3. Interface methods**

I hit this when I was writing code when I wanted to define an interface that returns a data field e.g getName()

But then I thought why the hell would I need to define a getName() in an interface? it’s a design smell, this doesn’t
say anything about my class semantic if it implements such an interface. Have a look at the
following [Stackoverflow answer]([https://stackoverflow.com/a/9380825/263215](https://stackoverflow.com/a/9380825/263215))

**4. Long constructor signature**

While I doubt a class would have that amount of needed values, it’s still definitely a valid argument.

But we can use builders then, right?

You can use the normal pattern or you can use short builder pattern
from [here]([https://medium.com/beingprofessional/think-functional-advanced-builder-pattern-using-lambda-284714b85ed5](https://medium.com/beingprofessional/think-functional-advanced-builder-pattern-using-lambda-284714b85ed5))

Or you could even use my upgrade on top of it which allows you to have default values and null checking using Vavr
Option, here’s how it looks like:

```java
package com.marmoush.test;

import io.vavr.control.Option;

import java.util.function.Consumer;

import static io.vavr.API.Some;

public class Person {
  public static void main(String[] args) {
    Person person = new PersonBuilder().with($ -> {
      $.firstName = "John";
      $.lastName = "Doe";
      $.isFemale = false;
      $.address = new Address();
    }).with($ -> $.isHomewOwner = true).createPerson();
  }

  public final String firstName;
  public final Option<String> middleName;
  public final String lastName;
  public final Option<String> suffix;
  public final Address address;
  public final boolean isFemale;
  public final boolean isEmployed;
  public final boolean isHomewOwner;

  private Person(String firstName,
                 Option<String> middleName,
                 String lastName,
                 Option<String> suffix,
                 Address address,
                 boolean isFemale,
                 boolean isEmployed,
                 boolean isHomewOwner) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.suffix = suffix;
    this.address = address;
    this.isFemale = isFemale;
    this.isEmployed = isEmployed;
    this.isHomewOwner = isHomewOwner;
  }

  public static class Address {}

  public static class PersonBuilder {
    public String firstName;
    public String middleName;
    public String lastName;
    public String suffix;
    public Address address;
    public boolean isFemale;
    public boolean isEmployed;
    public boolean isHomewOwner;

    public PersonBuilder with(Consumer<PersonBuilder> builderFunction) {
      builderFunction.accept(this);
      return this;
    }

    public Person createPerson() {
      return new Person(Option.of(firstName).get(),
                        Some(middleName),
                        Option.of(lastName).get(),
                        Some(suffix),
                        Option.of(address).get(),
                        Option.of(isFemale).get(),
                        Option.of(isEmployed).getOrElse(false),
                        // Default value  
                        Option.of(isHomewOwner).getOrElse(false));
    }

    public Try<Person> createPersonSafely() {
      return Try.of(() -> new Person(Option.of(firstName).get(),
                                     Some(middleName),
                                     Option.of(lastName).get(),
                                     Some(suffix),
                                     Option.of(address).get(),
                                     Option.of(isFemale).get(),
                                     Option.of(isEmployed).getOrElse(false),
                                     // Default value  
                                     Option.of(isHomewOwner).getOrElse(false)));
    }
  }
}
```

If you liked the approach please let me know, if not, constructive feedback is always welcome.
