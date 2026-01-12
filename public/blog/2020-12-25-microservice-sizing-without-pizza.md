
### Why Does Microservice Complexity Matter?

> *Note: This article explores microservices at a holistic level—not per DDD-bounded context. References to size or "big" are shorthand for complexity.*

Complexity sneaks in for many reasons: [orphaned projects](/#/blog#orphaned_projects), fear of recreating a monolith, or accidental architectural sprawl. While there are plenty of [analysis tools](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) and [techniques](https://blog.codacy.com/an-in-depth-explanation-of-code-complexity/) for reasoning about code, they rarely help you answer the real question:

> **When is a service too complex to keep as-is—and worth the cost of splitting or redesigning?**

---

### The Real Problem: Measurement

Many teams follow the Amazon "two-pizza rule" to size teams, then estimate how many microservices a team can handle—often guided by senior voices. Others look at code complexity tools or line counts. The issue?

* Code complexity is subjective. It's a signal, not a decision-maker. You can't just say "If complexity > X, split the service."
* Lines of code are deceptive. Scala or C++ can be compact but incomprehensible.
* Even team input is relative. When an author says "it's a 6/10 complex," you have no idea if that's actually a 9 in your world.

What's missing is a **consistent, meaningful unit of measurement**.

> Measurement is the **quantification** of an **attribute** of an **object or event**, which allows comparisons.
> — *Wikipedia*

To reason about complexity, we need to:

* Define the *object* → the microservice
* Identify its *attributes* → factors contributing to complexity
* Choose attributes that can be *quantified*

---

### Microservice as an Object

A microservice isn't just a deployable artifact—it's an ecosystem. Engineers interact with it through CI/CD pipelines, observability tools, programming languages, code style, documentation quality, dependencies, and operational behavior. All of this forms the **surface area of complexity**.

---

### What Can Be Measured?

Since complexity isn't a direct metric, go back to **business needs**:

> *How long does it take someone to understand and fully own the service?*

This "time to comprehension" is a meaningful proxy for complexity—especially when compared to stakeholder expectations.

---

### Ways to Measure

You can't perfectly predict time or grasp the unknown—but you can approximate. Use practical comparisons:

1. **New joiners**: What's the average time they take to confidently work with the service vs. what stakeholders expect?
2. **Cross-team handovers**: How quickly do external teams grasp and use the service vs. expectations?
3. **Bus factor coverage**: How many people should know the service based on risk—and how many actually do?
4. **Turnover rate**: Are you constantly resetting knowledge due to churn?

There's no single formula to plug these into—but they provide a foundation to create your own model based on your org's risk tolerance and operational constraints.

---

> *Next time someone asks "Is this service too big?" or "Should we refactor it?"—try reframing the question:*
> **"How long are we willing to let someone ramp up before they can safely operate it?"**

---

### With That, You Can

* Set realistic expectations for stakeholders
* Align decisions with team capacity:

  * Refactor? Improve documentation? Increase knowledge sharing?
* Choose tech and staffing investments based on **risk**, not just skill gaps

---

From experience (and failures), I've found this lens incredibly valuable—especially as services grow horizontally and take on more specialized, complex behaviors. Complexity isn't the enemy—**unmeasured** complexity is.
