## Overview

Glovo is a leading on-demand delivery platform operating in 23 countries. It connects users with restaurants, shops, and couriers, handling millions of real-time orders through a microservices-based architecture.

## Diagnosing Performance Outliers

One of the first tasks involved an orphaned service with a staggering **p95 of 5s and p99 of 60s**. After being passed between teams during multiple reorganizations, it lacked clear ownership or SLAs. Tracing with DataDog revealed sequential DB calls fetching city data one by one—left untouched since the early startup days.

After optimization, latency dropped to **200–400ms**, significantly improving platform-wide metrics.

> *Simple fix, massive impact—praised by engineering leadership for the initiative.*

## ThreadLocal Transaction Trap

A threading workaround in the monolith used `ThreadLocal` to pass context, bypassing standard thread-per-request patterns. Combined with nested `@Transactional` annotations, this caused unexpected behavior and elevated DB load, culminating in a 50% spike.

Through deep debugging and documentation, I isolated and reproduced the issue. Another team shipped the patch, reducing **database load by 50%**.

> *The Mariana Trench of tech debt—poor design, institutionalized and hard to reverse.*

## Extracting the Microservice

The home page backend was a tightly coupled part of the monolith—no separation between DTOs, domain models, or view models. 70% of the effort went into untangling responsibilities and paths. Only 20% covered scaffolding and production readiness, and 10% focused on rollout and toggling.

Despite being moved to another team before the final cutover, the migration was smooth—thanks to upfront communication, diagrams, and modular design.

> *Proof that well-structured transitions can outlast team shifts.*
