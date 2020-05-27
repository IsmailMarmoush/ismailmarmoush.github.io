---
layout: post
title:  "System architecture craftsmanship part I"
author: ismailmarmoush
image: /assets/posts/architect.jpeg
featured: false
hidden: false
tags: architecture
---

My purpose of series is finding, collecting and creating the best practices to design a good architecture for certain types of systems mostly web apps.

I also design my own full fetched platform back to back, on my spare time. Maybe one day you hear of it, or not.

## Topics

1.  Measuring good design
2.  Testing (TDD or else) and its influence on Dependency Injection design and mocking
3.  DDD, Clean architecture, and Explicit Architecture effect

## 1. Measurements

The world wouldn't work without measuring things, without a reference we go back to, right ?, a gut feeling can't be transmitted between humans, unless there is trust / belief.

So, most of our references are sometimes, scientific theories, hypothesis, a length of something, a religion(trust/belief), logical thinking, an ideology etc.

Now in Software Engineering what is a good measurement of good architecture design ?

One of the quality measures I depend on, is that "writing code features or tests flow becomes seamless by time, without being blocked by having to implement, redesign or, refactor much of the current code/configs in order to fill in the new code, seamlessly again."

Basically fulfilling the good design of  [Martin Fowler's Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html)

![Martin Fowler Design Stamina Hypothesis](/assets/posts/martinfowlerdesign.png)

## 2. Testing is a sign of healthy architecture design

We all know, no body writes good code documentation, you can't simply explain how a class would work with other classes in the same package.

Usually full architecture view (in the README ) along with couple of architecture images, and data flow diagrams would suffice as an overview.

But for the engineer who just joined the team and would like to add a new feature, he has to read code.

OK, but should he start reading your 1000 class? in order to understand ?, No, he only wants to learn by Example, where would that be? YES, tests indeed.

but beware of Mocking in testing, up till now, I haven't found a good reason to mock something unless it tells me:  [this is code smell](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a), read this article I have seen lots of testing code where it actually doesn't test anything.

So, applications that start without testing in mind (hence TDD is a precaution drill meant to force you to do testing, not a must if you do actually test!). anyway, those apps usually end up with Mocking, spying, stubbing etc.

You can even go more radical, where if you design your classes right, and keep those classes testable with constructor injected dependencies, you won't even have to use Spring injection annotation or Google Guice etc.

Some say, yea but constructor becomes bloated with arguments, well I consider this also another smell of bigger problem, You most probably have damn Big Ball of Mud , a Monolith, where your services contain tons of other services and you can no longer fill the constructor with that amount of dependencies.

## 3. Modules/Packages/Sub Projects convention

I consider  [DDD](https://en.wikipedia.org/wiki/Domain-driven_design),  [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), and  [Explicit Architecture](https://herbertograca.com/tag/explicit-architecture/) are big names of a very simple concept, where to put things (i.e where to put the adapter for the MongoDB repository, where to put your business logic, and services, etc).

Imagine a house, where the bed is behind the door, and the dining table in the bathroom. This is where these architecture ideas come in handy, you organize your place, so that guests don't have to wait for you to get out of the toilet in order to have their dinner.

That's exactly how it feels in a chaotic code arrangement, where you have to struggle in order to introduce a new feature in the project, where you can't find a pattern of back to back feature development, from Database to Frontend.

I can't stress enough of the importance of the previous concepts, for a good design reference.

### Finally

I tried to be as short as possible mentioning only the end result learnings of problems I have struggled with over the past years writing code.

Still feel free to reach out, with support or constructive criticism.
