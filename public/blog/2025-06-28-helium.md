# Project Helium

### Overview

**Project Helium** is a Java <sup>(JDK 24)</sup> microservice foundation designed to help teams move faster without compromising on quality. Whether you're launching a new product or modernizing legacy systems, it provides secure defaults, a scalable architecture, and a clear project structure—so your team can build on a solid foundation instead of starting from scratch.

Backed by over a decade of hands-on experience—and shaped by working alongside highly experienced engineers at leading European tech companies like Zalando, Glovo, and Jobandtalent—it reflects proven practices that simplify backend development while avoiding common pitfalls.

It comes with modular integrations built for real-world backend systems—from environment configs and multi-tenant auth to observability and deployment pipelines. Features like `TLS/mTLS`, `SSO`, `multi-OIDC` provider support, and `OpenTelemetry` are included out of the box, making it easier to get production-ready infrastructure up and running quickly.

It also supports **LLM-based use cases** through integration with [LangChain4j](https://github.com/langchain4j/langchain4j), enabling teams to build AI-assisted features natively within Helidon services.

Built on established patterns like Domain-Driven Design (DDD) and Hexagonal Architecture, it offers ready-to-use examples and a consistent layout that accelerate onboarding and promote long-term maintainability. Powered by [Oracle Helidon SE 4](https://helidon.io/)—formerly Helidon Nima—Project Helium delivers unmatched performance, efficiency, and security through its lightweight runtime and virtual threads support. <sup>[[1]][[2]][[3]][[4]]</sup>

![Helidon benchmark](images/nima.png)

*Figure 1: Helidon SE 4 (previously Nima) - benchmarks* <sup>[[4]]</sup>

### Motivation

Building microservices remains a recurring challenge. While most services today follow well established patterns, technoglogies and tooling not every medium sized company or Startup has the engineering maturity or architectural expertise to apply them correctly specifically from the start. [Case Study: Zalando's Zalon](/#/engineering/zalon)

SMEs and startups, in particular also face intense time-to-market pressure and limited resources. Without dedicated architecture or platform teams, they often prioritize delivery speed over long-term maintainability. [Case Study: Glovo](/#/engineering/glovo)

The same applies to organizations migrating from slower monolithic stacks (e.g., PHP, Ruby, Python) to more scalable, cost-efficient architectures using Java, Kotlin, or Go. Expectations are high, but these efforts are often driven by teams with deep experience in the old stack and limited familiarity with the new one. Combined with the difficulty of hiring experienced engineers, the risks quickly start to compound. [Case Study: Jobandtalent](/#/engineering/jobandtalent)

As a result, core design concerns—such as modularity, observability, and security—are postponed or inconsistently implemented, leading to architectural drift and increasing technical debt. Under pressure, foundational choices are often rushed, producing brittle systems that are difficult to evolve.

With the rise of **AI-assisted** development, teams can now generate code faster than ever—but that code still needs a secure and coherent foundation to run reliably. Without architectural guardrails, generated code can introduce inconsistencies, unsafe patterns, or unscalable designs. This project fills that gap by providing a production-grade environment where generated code can operate safely and predictably, reducing human error and avoiding the pitfalls of "vibe coding."

Project Helium foundation encapsulates proven patterns from large-scale systems. By perfecting the lower layers, it frees teams from reinventing infrastructure—allowing them to focus on what matters most: delivering product value.

As Martin Fowler notes:

> Design activities certainly do take up time and effort, but they pay off because they make it easier to evolve the software into the future. You can save short-term time by neglecting design, but this accumulates TechnicalDebt which will slow your productivity later. Putting effort into the design of your software improves the stamina of your project, allowing you to go faster for longer.

![design stamina hypothesis](images/design_stamina.png)
*Figure 2: Good design stamina hypothesis* <sup>[[5]]</sup>

### Key Benefits

- **Accelerated Delivery**  
  Scaffolded foundation and API-first tooling minimize boilerplate and speed up development.

- **Ultra Performance with Virtual Threads**
  Leveraging Helidon SE 4 VT model for high concurrency, minimal resource usage, and fast response times.

- **Production-Ready Security**  
  mTLS, role-based access control, and SSO support built-in.

- **Cloud Native & Serverless-Ready**  
  Lightweight, stateless services optimized for Kubernetes and fast startup.

- **Multitenant by Design**  
  Isolated tenant/user domains with robust admin tooling.

- **Built-in Observability**  
  End-to-end tracing, metrics, and logs via OpenTelemetry.

- **Simplicity of Blocking Code**
  Straightforward exception handling, full stack traces, and easier debugging—without the complexity of reactive scaffolding.

- **AI-Native Integration**  
  Supports LangChain4j for building conversational agents, RAG pipelines, and other LLM-driven features without leaving your service boundary.

### Strategic Value

- **Sustained Delivery Speed**  
  Prioritizes internal quality to maintain a steady delivery pace as complexity grows.  
  *E.g., DDD and hexagonal principles provide a structure that scales beyond the initial "stamina curve."*

- **Operational Resilience**  
  Ships with production-grade defaults and hardened patterns for fault tolerance.  
  *E.g., health checks, retries, and mTLS are preconfigured for Kubernetes environments.*

- **Streamlined Stack Integration**  
  Standards-based, pre-integrated tooling for build, security, and observability—no glue code.  
  *E.g., OpenTelemetry, OAuth2, and container-native builds wired into the stack.*

- **Consistent Architecture at Scale**  
  Enforces uniform service layout and boundaries using static analysis tools like ArchUnit.  
  *E.g., ensures layering, domain isolation, and prevents coupling drift across teams.*

- **Modular and Extensible by Design**  
  Core logic remains isolated—new adapters, protocols, or integrations can be added cleanly.  
  *E.g., swap a persistence adapter (JPA to JDBC) or add a GraphQL interface without touching the domain.*

- **No Runtime Magic**  
  Avoids annotation-driven abstractions and reflection-heavy frameworks, using explicit, predictable code instead.  
  *E.g., no hidden proxies or dynamic classpath hacks—making it easier to debug, and highly compatible with GraalVM native image compilation.*

- **AI-Ready by Design**  
  LangChain4j can be integrated as a first-class module, enabling services to embed LLM-powered workflows using the same structured patterns.

### Who It's For

Project Helium is built for teams that value performance, simplicity, and control. It's a strong fit for startups, cost-sensitive environments, and platform teams looking to move fast without adopting heavyweight frameworks.

Its minimal runtime footprint and stateless design make it ideal for modern workloads—from self-managed clusters and edge deployments to serverless platforms like AWS Lambda. With native GraalVM support underway, it also targets scenarios that demand fast cold starts and low resource usage.

### Why Not Spring

Spring remains a popular choice for enterprise Java due to its ecosystem and tooling. But in practice, it often introduces unnecessary complexity for modern, high-performance systems—especially in "goal-focused" microservices that need to do one job well with minimal overhead, such as ingesting events, exposing APIs, or performing background tasks.

Spring MVC relies on a thread-per-request model, requiring constant tuning of thread pools and timeouts—making scaling and infrastructure planning harder. It's predictable, but heavy on resources, especially under load.

Spring WebFlux addresses concurrency through reactive programming using types like `Flux` and `Mono` from Project Reactor. These are monads that model asynchronous, event-driven flows—but in doing so, introduce such a functional style that's difficult to reason about for many teams. Blocking leaks and anti-patterns are common, and the reactive style often leads to verbose code and complex debugging workflows.

Helium, built on Helidon SE 4 and virtual threads, sidesteps both limitations. It offers high concurrency with simple, blocking code—no reactive overhead, no thread pool micromanagement. The result: lower operational risk, predictable performance, and faster delivery.

---

### Architecture Highlights

- Built on **Helidon SE 4** with virtual thread support for high concurrency
- Follows **Hexagonal Architecture** and **DDD** principles to keep domain logic isolated and testable
- Modular project layout with working examples to accelerate onboarding
- Includes **ArchUnit** rules to enforce architectural boundaries and layering
- Optional **LangChain4j** module for building LLM-powered services (e.g., chat, RAG, agents)

![Hexagonal architecture](images/hexagonal.png) *Figure 2: Good design stamina hypothesis* <sup>[[6]]</sup>

### Core Capabilities

**Security & Multi-Tenancy**  

- TLS/mTLS with certificate chain and audience validation  
- Composite authentication and authorization  
  Combine multiple identity providers and access control strategies seamlessly  
- Native multi-OIDC support (Google, Facebook, GitHub, etc.) without relying on third-party services like Auth0  
- Role mapping with RBAC and ABAC conventions  
- Tenant-aware token validation  
- Admin-level user control (blacklist, quota, registration)

**Observability & Diagnostics**  

- Integrated OpenTelemetry for tracing and metrics  
- Health checks and structured logging (Log4j, SLF4J)  
- Built-in error handling and JSON SerDes  
- URL filtering and diagnostics-ready conventions

**Configuration & Deployment**  

- Environment profiles for dev, test, and prod  
- CI/CD and Helm-ready  
- Database migrations (Flyway, Liquibase)  
- Docker and Kubernetes-native deployments (Helm, ArgoCD)

**Developer Experience**  

- Sample app with best-practice structure  
- CI/CD templates and Helm charts  
- Clear conventions for auth, logging, and observability  
- Technical walkthroughs and pilot-ready adoption

---

### Get in Touch

Want to learn more or see Project Helium in action?  
[**Get in touch with us**](/#/contact) to schedule a demo or ask any questions.

[1]: https://technology.amis.nl/software-development/java/microservice-framework-startup-time-on-different-jvms-aot-and-jit/
[2]: https://medium.com/helidon/helidon-is-the-fastest-9c8d98d519f0
[3]: https://medium.com/helidon/helidon-and-aot-startup-optimization-benchmark-71bffe29eb3
[4]: https://medium.com/helidon/helidon-n%C3%ADma-helidon-on-virtual-threads-130bb2ea2088
[5]: https://martinfowler.com/bliki/DesignStaminaHypothesis.html
[6]: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/
