<template>
  <div class="engineering-page">
    <div class="engineering-content">

      <!-- Architecture & Best Practices -->
      <section class="engineering-architecture">
        <h2 class="engineering-section-title">Architecture &amp; Design</h2>
        <div class="engineering-architecture-grid">
          <div class="engineering-feature-card">
            <div class="engineering-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3>Microservices</h3>
            <p>Scalable, maintainable, and independently deployable services.</p>
          </div>

          <div class="engineering-feature-card">
            <div class="engineering-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3>Domain-Driven Design</h3>
            <p>Complex domain modeling with bounded contexts and ubiquitous language.</p>
          </div>

          <div class="engineering-feature-card">
            <div class="engineering-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3>Event-Driven</h3>
            <p>Reactive systems with event sourcing and CQRS patterns.</p>
          </div>

          <div class="engineering-feature-card">
            <div class="engineering-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3>12-Factor App</h3>
            <p>Cloud-native applications following modern development principles.</p>
          </div>

          <div class="engineering-feature-card">
            <div class="engineering-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <h3>Polyglot Persistence</h3>
            <p>Right database for the right model with pluggable storage integrations.</p>
          </div>

          <div class="engineering-feature-card">
            <div class="engineering-feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3>Serverless support</h3>
            <p>
              Designed to support serverless where it makes sense—event-driven,
              auto-scaling, and infrastructure-free.
            </p>
          </div>
        </div>
      </section>

      <!-- Security & Reliability -->
      <section class="engineering-security">
        <h2 class="engineering-section-title">Security &amp; Reliability</h2>
        <div class="engineering-security-grid">
          <div>
            <h3>Zero Trust Security Model</h3>
            <ul class="engineering-security-list">
              <li>
                <span>✓</span>
                <span>Secure-by-default infrastructure and deployments</span>
              </li>
              <li>
                <span>✓</span>
                <span>Privileged Access Management (PAM)</span>
              </li>
              <li>
                <span>✓</span>
                <span>Identity and Access Management (IAM)</span>
              </li>
              <li>
                <span>✓</span>
                <span>Role-Based Access Control (RBAC)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Enterprise Security</h3>
            <ul class="engineering-security-list">
              <li><span>✓</span><span>Multi-tenant authentication and SSO</span></li>
              <li><span>✓</span><span>Tenant isolation and scoped authorization</span></li>
              <li><span>✓</span><span>OWASP Top 10 and secure delivery practices</span></li>
            </ul>
          </div>

          <div>
            <h3>Observability</h3>
            <ul class="engineering-security-list">
              <li><span>✓</span><span>Monitoring, tracing, and logging built into every solution</span></li>
              <li><span>✓</span><span>Actionable signals for fast diagnosis and confident operations</span></li>
            </ul>
          </div>

          <div>
            <h3>System Reliability</h3>
            <ul class="engineering-security-list">
              <li><span>✓</span><span>Resilient systems designed for failure and change</span></li>
              <li><span>✓</span><span>Dependable services as usage and requirements evolve</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Technologies -->
      <section class="engineering-technology">
        <h2 class="engineering-section-title">Technologies</h2>
        <div class="engineering-technology-grid">
          <div class="engineering-technology-card">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>Kotlin</li>
              <li>Scala</li>
              <li>TypeScript</li>
              <li>Rust</li>
            </ul>
          </div>

          <div class="engineering-technology-card">
            <h3>Frameworks &amp; Build</h3>
            <ul>
              <li>Spring</li>
              <li>Helidon</li>
              <li>Maven</li>
              <li>Gradle</li>
            </ul>
          </div>

          <div class="engineering-technology-card">
            <h3>Cloud &amp; Infrastructure</h3>
            <ul>
              <li>AWS</li>
              <li>GCP</li>
              <li>Kubernetes</li>
              <li>Helm</li>
              <li>ArgoCD</li>
            </ul>
          </div>

          <div class="engineering-technology-card">
            <h3>Messaging &amp; Data</h3>
            <ul>
              <li>Kafka</li>
              <li>Pulsar</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- How I Work -->
      <section class="engineering-principles">
        <h2 class="engineering-section-title">How I Work</h2>
        <div class="engineering-principles-grid">
          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">⚡</div>
              <h3>Simplicity Over Complexity</h3>
            </div>
            <p>I prefer simple solutions that solve the actual problem without unnecessary abstractions, infrastructure, or complexity.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">◉</div>
              <h3>Transparency</h3>
            </div>
            <p>I communicate openly about technical trade-offs, risks, and constraints, and work collaboratively with the people involved.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">✓</div>
              <h3>Technical Excellence</h3>
            </div>
            <p>I care about technical quality, clean design, and systems that remain understandable and maintainable as they evolve.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">✦</div>
              <h3>Deep Expertise</h3>
            </div>
            <p>My experience spans backend engineering, distributed systems, JVM ecosystems, cloud infrastructure, and software architecture.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">▣</div>
              <h3>Security-First</h3>
            </div>
            <p>I treat security as part of the architecture, with appropriate attention to identity, authorization, isolation, and secure delivery.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">▥</div>
              <h3>Observability</h3>
            </div>
            <p>I design systems with monitoring, tracing, and logging as integral parts of the system rather than afterthoughts.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">◷</div>
              <h3>Iterative Delivery</h3>
            </div>
            <p>I prefer small, iterative steps with continuous feedback over trying to design and deliver everything upfront.</p>
          </article>

          <article class="engineering-principle-card">
            <div class="engineering-principle-heading">
              <div class="engineering-principle-icon">✓</div>
              <h3>System Reliability</h3>
            </div>
            <p>I build for failure and change, with an emphasis on resilient systems that remain dependable as usage and requirements evolve.</p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {marked} from 'marked'

interface CaseStudy {
  id: string
  title: string
  technologies: string[]
  logo: string
  excerpt: string
  content?: string
}

const route = useRoute()
const router = useRouter()
const selectedCaseStudy = ref<CaseStudy | null>(null)
const caseStudies = ref<CaseStudy[]>([])
const config = ref<any>(null)

const isSvg = (filePath: string): boolean => {
  return filePath.toLowerCase().endsWith('.svg')
}

const fetchMarkdown = async (filePath: string): Promise<string> => {
  const response = await fetch(`/${filePath}`)
  return response.text()
}

const openCaseStudy = async (id: string) => {
  const study = caseStudies.value.find(study => study.id === id)

  if (study) {
    const configStudy = config.value.caseStudies.find((cs: any) => cs.id === id)

    if (configStudy) {
      const markdown = await fetchMarkdown(configStudy.filePath)
      study.content = marked(markdown) as string
      selectedCaseStudy.value = study
      await router.push(`/engineering/${id}`)
    }
  }
}

const closeCaseStudy = async () => {
  selectedCaseStudy.value = null
  await router.push('/engineering')
}

const loadCaseStudyById = async (caseStudyId: string) => {
  if (caseStudies.value.length > 0) {
    await openCaseStudy(caseStudyId)
  }
}

onMounted(async () => {
  try {
    const response = await fetch('/config.json')
    config.value = await response.json()

    caseStudies.value = config.value.caseStudies.map((study: any) => ({
      id: study.id,
      title: study.title,
      technologies: study.technologies,
      logo: study.logo,
      excerpt: study.excerpt
    }))

    const caseStudyId = route.params.caseStudyId as string

    if (caseStudyId) {
      await loadCaseStudyById(caseStudyId)
    }
  } catch (error) {
    console.error('Failed to load case studies:', error)
  }
})

watch(() => route.params.caseStudyId, async newCaseStudyId => {
  if (newCaseStudyId && caseStudies.value.length > 0) {
    await loadCaseStudyById(newCaseStudyId as string)
  } else {
    closeCaseStudy()
  }
})
</script>

<style scoped>
.engineering-page {
  display: flex;
  justify-content: center;
  padding: 1.25rem 10rem;
}

@media (max-width: 1280px) {
  .engineering-page {
    padding-right: 5rem;
    padding-left: 5rem;
  }
}

@media (max-width: 1024px) {
  .engineering-page {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

@media (max-width: 640px) {
  .engineering-page {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

.engineering-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
}

/* Hero */

.engineering-hero {
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.engineering-hero h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.1;
  color: #101418;
}

.engineering-hero p {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  color: #5c738a;
  font-size: 1.125rem;
  line-height: 1.625;
}

/* Architecture */

.engineering-architecture {
  margin-bottom: 4rem;
}

.engineering-architecture-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .engineering-architecture-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .engineering-architecture-grid {
    grid-template-columns: 1fr;
  }
}

.engineering-feature-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.engineering-feature-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.engineering-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgba(63, 127, 191, 0.1);
  border-radius: 9999px;
  color: #3f7fbf;
}

.engineering-feature-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.engineering-feature-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #101418;
  font-size: 1.125rem;
  font-weight: 600;
}

.engineering-feature-card p {
  margin: 0;
  color: #5c738a;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Security */

.engineering-section-title {
  margin: 0 0 2rem;
  color: #1f2937;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
}

.engineering-security {
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.engineering-security-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .engineering-security-grid {
    grid-template-columns: 1fr;
  }
}

.engineering-security h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #101418;
  font-size: 1.25rem;
  font-weight: 600;
}

.engineering-security-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.engineering-security-list li {
  display: flex;
  align-items: flex-start;
  color: #5c738a;
}

.engineering-security-list li > span:first-child {
  margin-right: 0.5rem;
  color: #22c55e;
}

.about-icon-small {
  width: 1.25rem;
  height: 1.25rem;
}

.about-vision {
  margin-bottom: 4rem;
  padding: 2.5rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
}

.about-section-heading,
.about-value-heading {
  display: flex;
  align-items: center;
}

.about-section-heading {
  margin-bottom: 2rem;
  gap: 1.5rem;
}

/* Technology */

.engineering-technology {
  margin-bottom: 4rem;
}

.engineering-technology-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .engineering-technology-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .engineering-technology-grid {
    grid-template-columns: 1fr;
  }
}

.engineering-technology-card {
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.engineering-technology-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #101418;
  font-size: 1.125rem;
  font-weight: 600;
}

.engineering-technology-card ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #5c738a;
  font-size: 0.875rem;
}

.engineering-principles {
  margin-bottom: 4rem;
}

.engineering-principles > h2 {
  margin-bottom: 2rem;
  color: #101418;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.engineering-principles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

.engineering-principle-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease;
}

.engineering-principle-card:hover {
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
}

.engineering-principle-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.engineering-principle-icon {
  display: flex;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #3f7fbf;
  background: rgb(63 127 191 / 10%);
  font-size: 1.25rem;
}

.engineering-principle-card h3 {
  color: #101418;
  font-size: 1.125rem;
  font-weight: 600;
}

.engineering-principle-card p {
  color: #5c738a;
}

@media (max-width: 1024px) {
  .engineering-principles-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .engineering-principles-grid {
    grid-template-columns: 1fr;
  }
}

</style>
