# Project Argon

### Overview

Project Argon is a layered, modular Infrastructure as Code (IaC) built for running microservices across environments—from bare metal to production Kubernetes. It automates the entire stack, including virtualization, container orchestration, platform tooling, and GitOps-based application delivery.

Inspired by real-world needs, Argon provides a composable alternative to public cloud platforms for teams looking to self-host, reduce costs, or retain infrastructure control using platforms like DigitalOcean—while staying compatible with any managed Kubernetes provider. Each layer of Argon can be used selectively, enabling infrastructure setups ranging from full control (baremetal) to hybrid models (DigitalOcean, Vultr, Hetzner) or outer-layer GitOps overlays on top of fully managed services (like AWS EKS).

### Current State

> Project Argon is currently in **alpha release**—actively tested while not yet production-hardened, it's available for early access, technical evaluation, and collaboration. Teams interested in using or shaping the roadmap are welcome to [get in touch](/#/contact).

---

**Build fully functional, production-ready environments from scratch—automatically.**

Argon provisions distributed infrastructure across multiple layers:

![Argon](/images/argon.png)

Each layer is fully modular and can be used independently—ideal for teams that want to build their own stack or integrate with existing environments.

---

### Features

- **Fully modular:** use all layers together or independently—ideal for gradual modernization  
- **Repeatable and idempotent:** Ansible-powered for consistent local, on-prem, or staging environments  
- **Production-ready security:** TLS, admin segmentation, VPN patterns, and zero-trust roadmap  
- **Kubernetes-native stack:** installs only cloud-native tools like Helm, ArgoCD, Signoz  
- **Built-in observability:** metrics, logging, and tracing via Signoz and OpenTelemetry  
- **Includes architecture docs:** ADRs, heuristics, and debug guides  
- **CI/CD and GitOps integration:** example apps with ArgoCD deployment workflows  
- **Works locally and on the cloud:** suitable for labs, testbeds, and cost-effective setups

---

### Who It's For

- Enterprises needing repeatable staging environments or self-hosted, air-gapped testbeds  
- Infrastructure teams exploring on-prem solutions before migrating to the cloud  
- Startups seeking cost-controlled alternatives like DigitalOcean instead of risky pay-as-you-go models  
- Platform engineering teams building tailored Internal Developer Platform (IDP) capabilities  

### Upcoming Milestones

Currently focused on hardening the stack for production: refining KVM provisioning, securing access (TLS, RBAC, VPN), improving observability (Signoz, Prometheus, Loki), enabling HA K3s setups, and automating GitOps pipelines. We're also enhancing documentation, smoke testing playbooks, and preparing onboarding tooling for platforms like DigitalOcean and Hetzner.

We'll notify you when it's ready—just reach out.
