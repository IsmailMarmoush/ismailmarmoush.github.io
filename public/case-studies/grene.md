## Overview

Grene, a leading e-commerce platform in Denmark, is one of the largest technical wholesalers in the agricultural sector. Built with Java, Spring, Hibernate, and JSF, it managed a vast catalog—ranging from nails to tractors—each product linked to SKUs, images, specifications, and real-time store availability.

## Addressing a Hidden Performance Bottleneck

The internal administration interface suffered from severe latency, often taking over five minutes to load. With most engineering focus directed at customer-facing features, and sales and ops teams adapting to the slowness, the issue remained unreported and unprioritized.

The cause was buried deep in complex JSF-generated code: UI interactions triggered repeated n+1 queries when expanding list items. After backend refactoring and frontend cleanup, load time dropped by **75%**.

> *A simple but overlooked fix that immediately improved daily workflows—highlighting the impact of proactive maintenance on internal tools.*
