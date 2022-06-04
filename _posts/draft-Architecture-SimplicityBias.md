
layout: post
title:  "Simplicity Bias"
author: ismailmarmoush
image: /assets/posts/pringles.jpg
featured: false
hidden: false
tags: sac

# Rules

* Move away from deprecated tools
* If the tool has low support/maintenance should be already mature  
* Always upgrade Java, spot tools that aren't upgradable
* Technical decisions as close as much to affected code
* Where features docs are placed:
  * Technical: in same repo
  * Product: either in a different repo for decoupling or a jira, or github issues etc
* 

## CI/CD

One template to rule them all `.github/workflows/...`

### IAAS, PAAS, SAAS

##

## Scalability

## Application Configuration

```
application.yaml
application-staging.yaml
application-live.yaml
```

## Runtime environment

Docker swarm vs kubernetes vs nomad

## Projects Artifacts