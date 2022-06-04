---
layout: post
title:  "How big a microservice should be without pizzas"
author: ismailmarmoush
image: /assets/posts/Microservices.png
featured: false
hidden: false
tags: architecture
---

> Note: This article discusses microservices as a whole, not on bounded context (DDD) level. Also note that how big/size
> are just layman terms, the real intention here is complexity.

Why care about microservice complexity ?

For multiple reasons one could
be [orphaned projects](https://marmoush.com/2019/04/01/architecture-p02-orphaned-projects.html), another being afraid of
ending up with being another monolith, or even incidental architecture complexity.

There are many tools like [analysis tools](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis)
and [techniques](https://blog.codacy.com/an-in-depth-explanation-of-code-complexity/) for tackling code
complexity, yet most of us don't know when it's worth time and money to split a service or make critical changes.

## It's a Problem of measurement

Some teams use the two-pizza rule from Amazon to estimate the team size, and then based on the team size they decide how
many and more importantly **which** microservices could that team handle and that decision is usually based on the power
players opinions ( aka seniors, architects etc), Other teams use previously mentioned code analysis tools or even line
counts. The issues here are:

* Code complexity is very relative, it's a good indicator but never a reliable one, you simply can't say if the
  complexity is x then we chop the microservice into halves
* Lines of code are never a measurement of complexity, take code written in scala or C++ for example, it's short but can
  drive you crazy
* Your team members are already experts (they're probably the ones who wrote it), their opinion is definitely valuable
  but still relative to their knowledge and if they say it's 6/10 complex you don't know if that's actually 6 or 9.

So, You need to define a good constant that is measurable, and then you have your unit of measurement.

> [Measurement according to wikipedia](https://en.wikipedia.org/wiki/Measurement) is the numerical **quantitation(
1)** of the **attributes(2)** of an **object or event(3)**, which can be used to compare with other objects or events.

> **Quantitation** is the act of quantifying

> Quantifying is discovering or expressing the quantity of something.

So we have a microservice as our object(3), we need to define its quantifiable(1) attributes(2) aka discovering
microservice attribute(s) that's measurable with a natural unit.

### 1.0 Microservice as an object, not a subject

Your microservice isn't just an executable file it's a complete ecosystem that an engineer touches daily; from CI/CD
cycles to technology stacks, not to mention your programming language choice and how well documented is your
microservice. All these are factors which contribute to the complexity of the service.

### 2.0 Microservice quantifiable attribute

Since complexity in our case isn't a measurable quantity, we go back to the basics which are "business needs".

The basic need here is how fast (in average) in reality people get to understand and be able to fully maintain and
operate the service from zero knowledge, versus our expectations. That percentage is crucial.

### 3.0 Measure it

Nobody can measure the unknown, Can you measure the unknown or come up with perfect time estimation methods, but we can
try to come as much closer as we possibly can.

Knowing the attribute from previous section (time to understand) we have a couple of angles:

1. Stakeholders expectation of new joiners understanding time Vs the actual average time on a random selected set
1. Stakeholders expectation of other team members understanding time Vs the actual average time on a random selected set
1. What's the expected [quorum](https://en.wikipedia.org/wiki/Quorum) of people maintaining such service according to
   its risk or impact, taking into
   consideration the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of course Vs how many are actually there.
1. What's your turnover rate?

There's no secret magical function to put the previous numbers in, in order to get a number or yes/no answer, but
the good news is that you can come up with your own according to the team/org risk analysis or simply toleration.

> So next time someone asks you how big should this microservice be or should we refactor this microservice, the answer
> would be **How long are we willing to give time for someone to understand it ?**

With the previous you'd also be able to:

* transparently communicate and manage the stakeholders expectations
* make wise decisions regarding your team capabilities and services as in:
    * What you need next, (e.g Service y is higher risk, should we refactor or increase knowledge)
    * What technologies should I increase in the team based on risk factors not based on lack of knowledge.

From my humble experience that consisted of lots of failure, I found the previous approach to be very helpful when a
service is constantly growing and specially horizontally (new unique and complex features added), which means added
complexity.