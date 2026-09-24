## Overview

**Zalando** is Europe’s leading online fashion and lifestyle platform, serving over 45 million customers in 20+ markets. Renowned for its engineering culture and scale, Zalando operates thousands of microservices supported by an advanced internal developer platform and modern cloud-native infrastructure.

## Taking Over a Tier-1 Service

As part of a broader organizational restructure, **our team inherited** **Bankroll**—a Tier-1 service responsible for over 10,000 requests per second. It provided critical item-level data such as price, availability, and sizing across both internal APIs and public-facing endpoints. Despite its importance, the service had become an orphaned system with minimal recent activity and growing risk.

One immediate issue: a manual change in AWS had bypassed infrastructure-as-code (IaC), meaning any new deployment would reset to an outdated configuration and cause failure.

* Identified and communicated the risk
* Codified the missing infrastructure into the IaC repository
* Executed a safe deployment with traffic shadowing and a live switch-over

This restored confidence and stability in Bankroll operations.

## Rethinking the Architecture

The service relied heavily on **Elasticsearch** as its primary data store—a costly decision for a mostly key/value access pattern. After profiling usage, **I proposed replacing it** with a more cost-efficient store, estimating **up to 10× reduction** in AWS costs.

> *Bankroll underscored the weight of inherited services at scale. While the system appeared stable, the real challenges lay in **hidden risks**, misaligned infrastructure, and long-standing assumptions. In large organizations, even small services can become mission-critical—and easy to overlook until it’s too late.*
