![xkcd](/images/orphaned_projects.png)

As mentioned in previous post, a good software is, a software that evolves easily, one that new comer engineers would
understand it in a small amount of time instead of struggling with it for more than a month.

I've come to notice that in some big companies many projects become orphaned.

The ugly truth is that most of the time; these projects are actually of high impact to the organisation and their
failure might cause a disaster. Many of them of course are stigmatized as **Legacy code**.

An orphaned project is a pain for the whole organisation, either it's being rewritten or replaced by two or three
others.

Since the measures of ensuring such thing wouldn't happen for that legacy project, it's very possible it will happen
again and again to the new ones.

And it did happen!! and I've seen 3 month old projects just become legacy, then orphaned, and never die, only live to
haunt people and burn money.

**This phenomena is a result of many problems, I list some of them:**

1. High turn over rate
2. Low software quality
3. Distributed ownership ( The dumpster effect )
4. Teams structures drastic changes, (merging teams, changing formations etc)

## 1. High Turn over rates

This is an HR topic I will talk about separately in another article.

## 2. Low Software Quality

Since the project wouldn't be orphaned if it was easy to comprehend and operate, instead many engineers are actually
avoiding it because they're afraid to touch it.

So, What makes an engineer afraid to touch or change a project ?

1. High impact of failure
    * The project is a Tier 1 application and any failure would directly cost money, so the changes become minimal in
      order to avoid problems, which in turn makes it very hard for any one to wear
      the [refactoring hat](https://www.youtube.com/watch?v=gcSh-yXaXVs).
2. Operational complexity
    * The project is a [snowflake](https://martinfowler.com/bliki/SnowflakeServer.html) server and unfortunately not
      a [phoenix](https://martinfowler.com/bliki/PhoenixServer.html)
    * Project development environment is not consistent between engineers (not dockerized for example)
    * Development environment / staging environment can't be identical to live environment (we're not talking about
      capabilities here, but identical simulation, for example using docker compose to setup a complete cluster that
      mimics the live one)
3. Long feedback loops
    * It takes very long time to go through the CI and CD, aka from code to live feedback.
4. Ugly code and bad architecture design.
    * Making any improvement hard and long, which would piss off business people since they focus want their business
      features delivered the soonest.
5. A big ball of mud application (google this).
6. Low test coverage etc.

## 3. Distributed ownership (Dumpster effect)

With great sorrow, I see and saw many departments and companies think that once they have a running app, that it's OK to
have distributed ownership, in favor of delivery, everybody starts to dump their PRs.

What helps spreading such act, that Product is by nature pushing for delivery, and unfortunately spineless engineers,
fail to raise their tech debt, and either they do it on their own and pressurize themselves, or they just no longer
care.

"What happens to the streets and trains if they were owned and run by everyone ?"

"Do you have sense of ownership when it's 'our' not yours only ?"

When things need to be done, they're assigned to people as their own responsibility, so I fail to understand the idea
that a project would keep running autonomously without one holding the wheel, and fixing the tires.

The excuses that come with distributed ownership are unfortunate and I fail to accept them:

1. We have 4 eyes principle
    * Well, but actually the other person might not even care that much or he might even miss the big picture.
    * That is equal to two blinds agreeing that a jigsaw puzzle fits in a big image.
2. We have 4 eyes principle + that person is a main maintainer
    * Well now you just created a fake ownership (defies the original distributed ownership already)
    * You made him/her a bottleneck for all the PRs
    * He will have to fulfill other work roles too.
3. [The boy scout principle](https://medium.com/@biratkirat/step-8-the-boy-scout-rule-robert-c-martin-uncle-bob-9ac839778385)
    * > “Leave Things BETTER than you found them.” ~ Robert Baden Powell
    * The problem here is that there is no failsafe for such principle because of the previous points.

It's unfortunate that many, think it's all about the code that is contained in one PR, and look underneath their feet,
while it's about tens of PRs that would lack any adjustments/refactoring done in between that follows one solid vision
and unified road map.

Once ownership is gone, and distributed among a department, suddenly any change or improvement is "Why do you have to do
it ? and not somebody else takes care of that", refactoring becomes a rare habit, and only disasters require attention.

## Teams and structures changes

> "organizations which design systems ... are constrained to produce designs which are copies of the
> communication  [structures](https://en.wikipedia.org/wiki/Organizational_structure "Organizational structure")  of these
> organizations." — M. Conway[[2]](https://en.wikipedia.org/wiki/Conway%27s_law#cite_note-Conway-2)

Teams structure change is definitely acceptable if there was a problem with the original one, or the business structure
changed, but that change shouldn't be incidental.

One manager/lead or even a ceo, can't just come tomorrow and change the teams structure, the software (either a monolith
or a group of microservices) should be first matched and rightfully assigned to groups of people.

I saw lots of times, teams or big departments changes without even counting how many running projects they have or
knowing which sub team owns them.

## Takeaways

* To managers and leads:
  * Bob who bragged about his new based on pseudoscience approach was lying, those numbers might be fake, don't be
      like Bob or mimic him because you want to be cool.
  * Don't invent your own wheel, where there's a Michelin on the corner
  * Distributed ownership will bite you in the end, when no body no longer know the details of any project, when code
      becomes a mess, and hard to maintain.
  * Numbers show at the end, and you might not notice the downfall of wrong decisions.
* To Engineers:
  * Have a spine, integrity and honesty !, care about your code and take pride of what you write.
  * Don't be an ass kisser or a teacher's pet who pleases his bosses, and agrees to every crazy idea they get.
  * Tech debt is a debt !
  * When shit hits the fan, you'd be the one to blame if your application is not performing, and saying they told me
      so won't work.
  * [Good design would actually increase delivery speed](https://martinfowler.com/bliki/DesignStaminaHypothesis.html),
      it's just that many managers unfortunately fail to understand or don't want to understand that, so fight for it
      and help people understand it.
