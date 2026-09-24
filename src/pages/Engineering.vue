<template>
  <div class="engineering-page">
    <div class="engineering-content">

      <!-- Hero Section -->
      <div class="engineering-hero">
        <h1>Engineering</h1>
        <p> I design and build reliable, scalable systems using modern architectures, proven engineering practices, and
          technologies suited to the problem. </p>
      </div>

      <!-- Architecture & Best Practices -->
      <section class="engineering-architecture">
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

      <!-- Security Section -->
      <section class="engineering-security">
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
            <h3>Enterprise Security Features</h3>
            <ul class="engineering-security-list">
              <li>
                <span>✓</span>
                <span>Multi-Tenant Authentication &amp; SSO</span>
              </li>
              <li>
                <span>✓</span>
                <span>Tenant Isolation and Scoped Authorization</span>
              </li>
              <li>
                <span>✓</span>
                <span>OWASP Top 10 Compliance</span>
              </li>
              <li>
                <span>✓</span>
                <span>Secure Software Development Lifecycle (SSDLC)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Technology Stack -->
      <section class="engineering-technology">
        <div class="engineering-technology-grid">
          <div class="engineering-technology-card">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>Kotlin</li>
              <li>Scala</li>
              <li>TypeScript</li>
              <li>Rust (Evaluating)</li>
            </ul>
          </div>

          <div class="engineering-technology-card">
            <h3>Frameworks</h3>
            <ul>
              <li>Oracle Helidon</li>
              <li>Spring</li>
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
            <h3>Messaging &amp; Event Streaming</h3>
            <ul>
              <li>Apache Kafka</li>
              <li>Apache Pulsar</li>
              <li>Event Streaming</li>
              <li>Message Queuing</li>
            </ul>
          </div>
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
  max-width: 42rem;
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

</style>
