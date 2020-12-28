---
layout: post 
title:  "How big a microservice should be without pizzas"
author: ismailmarmoush 
image: /assets/posts/Microservices.png 
featured: false 
hidden: false 
tags: architecture
---
> This post is part of architecture/software engineering & craftsmanship series

First, why would anyone care about a microservice size/complexity? reasons could
be [orphaned projects](https://marmoush.com/2019/04/01/architecture-p02-orphaned-projects.html), ending up with being
another monolith, or even incidental architecture complexity.

How far can we allow a microservice to become more complex, knowing that it's a very subjective and relative topic to measure
despite using [analysis tools](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis)
and [creative methods](https://blog.codacy.com/an-in-depth-explanation-of-code-complexity/).

## It's a Problem of measurement

> Some teams use the two-pizza rule from Amazon to estimate the team size, and then based on the team size they decide how
many and more importantly **which** microservices could that team handle and that decision is usually based on the power
players opinions ( aka
seniors, architects, or even popular),
> Other teams use previously mentioned code analysis tools or even line counts.

To be honest, I don't like the approach at all because of the following:

The fact that anyone would rely on team size or sole opinions of some people to measure something is a disaster by
itself, this is like a group of people opening their arms wide and saying this how long a meter is.

* Code complexity is very relative, it's a good indicator but never a reliable one, you simply can't say if the complexity
  is x then we chop the microservice into halves
* Lines of code are never a measurement of complexity, take code written in scala or C++ for example, it's
  short but can drive you crazy
* Your team members are already experts (they're probably the ones who wrote it for crying out loud), how would you rely
  on that in comparison to the microservice moved to another team's possession, or a new member trying to understand
  what the heck those guys wrote.

So, You need to define a good constant that is measurable, and then you have your unit of measurement.

> [Measurement according to wikipedia](https://en.wikipedia.org/wiki/Measurement) is the numerical **quantitation(
1)** of the **attributes(2)** of an **object or event(3)**, which can be used to compare with other objects or events.

> **Quantitation** is the act of quantifying

> Quantifying is discovering or expressing the quantity of something.

So we have a microservice as our object(3), we need to define its quantifiable(1) attributes(2) aka discovering
microservice attribute(s) that's measurable with a natural unit.

### 1.0 Microservice as an object, not a subject

For a better definition of what constitutes your microservice complexity, look at your microservice and answer:

What does your microservice consist of?

* To help with that, you need to collect all the technologies an engineer touches when he's about to implement a new
  feature in such a microservice or fix a bug
* Do you have your crazy implementation of a CI/CD pipeline, or it's a simple SAAS?
* How popular is your tech stack? are you using a de-facto standard framework for example, or your own
* Your programming language, "Are you hiring Java engineers who are willing to learn Scala ? " maybe it's Kotlin
* How well documented your service
    * aka How long it takes to read and understand the documents, and how much the document cover of such service.

### 2.0 Microservice quantifiable attribute

Since our microservice complexity isn't a measurable quantity, we go back to the basics "business needs" and
start from there. Why did we end up with complexity in the first place, because we want our services not to grow out of hand
and lose control, so what if we lost control? we might have a big ball of mud that no one understands or wants to
touch, high turnover would render such service orphaned, and it would take a while, or a big amount of money to find
a talent who could handle it.

So the basic primitive need is? right, **"Understanding"** well, that's already obvious, isn't it? complexity vs
understanding kind of thing. We finally reached a concrete yes or no element, hooray!

Of course, people are not light pulps, they don't look at a microservice, and say "ah, Ok I understand" or "No, I don't"
It takes time, it's a process, it's people interacting and asking questions and all of that.

The good news is we reached a basic attribute **"The time it takes to understand x microservice"** now we should measure
it which might be hard but hopefully doable.

### 3.0 Measure it

Can you measure the unknown ? of course not, have anybody ever came up with the perfect time estimation method of delivering
features or fixing bugs? again never.

So, you need to first be with a peace that you can't find an actual number to rely on, but you can find a good estimation
that gets you far enough to know which services are worth refactoring and which are not.

Going back to business again you ask your stakeholders couple of simple questions:

1. How many are your current service x heroes? (people who can maintain/deploy/manage service x alone if they had to)
1. How long do you think such service should take to be understood(being able to deliver a feature or fix a bug) by
   the new joiner who just been onboarded
    * Versus the average time x new joiner engineers took.
1. How long do you think such a service should take to be understood by another team member who never touched the service
   ?
    * Versus the average time x engineers from team y took for similar issues
1. What's the [quorum](https://en.wikipedia.org/wiki/Quorum) of people maintaining such service, taking into
   consideration the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of course.
1. What's your turnover rate?

> Note: As to why it's good to consider the number of experts as a unit while it might seem extreme, your software/business is
> already getting complex daily with God knows what factor, if you relied on your count on half/half knowledgeable people,
> then 6 months later the overall knowledge of such service in your team would have decreased to half or something.
>
>It's also better to count on absolute yes (this is your ninja) than on (eh, yeah I could manage) kind of choice


The bad news is there's no secret magical function to put the previous numbers in, in order to get a yes/no answer, but
the good news is that you can come up with your own according to you and your stakeholder's toleration.

As a plus, with the previous data:

* You'd have transparently communicated your teams status to stakeholders
* You have managed your expectations and everyone else
* You can make a wise decision regarding your team collective knowledge
* What you need next, (e.g Service y is higher risk, should we refactor or increase knowledge)
* What technologies should I increase in the team based on risk factors not based on lack of knowledge.

> What I presented was only a hypothesis and deduction based on my humble experience of watching failure more than success,
> If I was right, then it's good for both of us, if I was wrong, I'm a sure collection of such numbers is a good insight by itself. 
