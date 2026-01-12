## Measurement

The world doesn’t work without measurement. Without reference points, we’re left with gut feelings—which are hard to transmit, unless there's trust or belief.

In **Software Engineering**, what do we use to measure *good* architecture?

One of my personal metrics is this:

> Writing new features or tests should become increasingly seamless over time—without repeatedly needing to redesign, refactor, or fight the existing codebase.

This aligns with [Martin Fowler’s Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html):

![Martin Fowler Design Stamina Hypothesis](/images/design_stamina.png)

---

## Testing Is a Sign of Healthy Architecture

Nobody writes perfect documentation.
No README can explain how all your classes interact.

A few architecture diagrams and data flow charts help, sure.
But for a new engineer trying to build a feature, **reading code is inevitable**.

So where do they learn by example?
**Tests.**

But here's the catch: mocking is often a **code smell**.
I rarely see value in mocks unless they point to deeper architectural issues.
See: [Mocking is a Code Smell](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)

Too often, I’ve seen test code that doesn't really test anything—because the app was never designed for testability.

This is why **TDD isn’t mandatory**, but its intention is valuable—it enforces testability *by design*.

If your classes are well-designed, with constructor-injected dependencies, you often don’t even need frameworks like Spring or Guice.

Worried about bloated constructors?
That’s another smell. Likely, you're dealing with a **Big Ball of Mud**—a monolith with tangled dependencies.

---

## On Modules, Packages, and Project Structure

Patterns like [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design), [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), and [Explicit Architecture](https://herbertograca.com/tag/explicit-architecture/) are ultimately about one thing:

> **Where to put what.**

Think of your codebase as a house.
If the bed is behind the door and the dining table is in the bathroom, guests are going to have a bad time.

That’s what happens in a messy codebase—where even a simple feature requires painful exploration because the structure is unintuitive.

Good architecture is about placing things logically—so you can trace a feature from database to frontend with minimal friction.

---

## Final Thoughts

I’ve tried to keep this post focused on distilled learnings from years of battling complexity in codebases.

If it resonates, or you disagree, feel free to reach out with feedback or critique—I always appreciate constructive conversation.
