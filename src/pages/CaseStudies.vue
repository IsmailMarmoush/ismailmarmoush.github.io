<template>
  <div class="case-studies-page">
    <div class="case-studies-content">

      <!-- Case Studies Transition -->
      <section class="case-studies-intro">
        <div>
          <h1>Case Studies</h1>
          <p>
            Selected projects where I designed, built, and modernized production systems
            across different industries and technical environments.
          </p>
        </div>
      </section>

      <!-- Case Studies -->
      <section class="case-studies-list" id="case-studies">
        <div class="case-studies-grid">
          <div
              v-for="study in caseStudies"
              :key="study.id"
              class="case-studies-card"
              @click="openCaseStudy(study.id)"
          >
            <div class="case-studies-card-content">
              <div class="case-studies-card-header">
                <div class="case-studies-card-logo">
                  <object
                      v-if="isSvg(study.logo)"
                      :data="study.logo"
                      type="image/svg+xml"
                      class="case-studies-logo"
                  >
                    <img
                        :src="study.logo"
                        :alt="study.title + ' logo'"
                        class="case-studies-logo"
                    />
                  </object>

                  <img
                      v-else
                      :src="study.logo"
                      :alt="study.title + ' logo'"
                      class="case-studies-logo"
                  />
                </div>

                <h3>{{ study.title }}</h3>
              </div>

              <p class="case-studies-excerpt">
                {{ study.excerpt }}
                <span class="case-studies-learn-more">Learn More →</span>
              </p>

              <div class="case-studies-technologies">
            <span
                v-for="tech in study.technologies"
                :key="tech"
                class="case-studies-technology"
            >
              {{ tech }}
            </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Study Modal -->
      <div
          v-if="selectedCaseStudy"
          class="case-studies-modal"
          @click="closeCaseStudy"
      >
        <div
            class="case-studies-modal-content"
            @click.stop
        >
          <div class="case-studies-modal-body">
            <div class="case-studies-modal-header">
              <h2>{{ selectedCaseStudy.title }}</h2>

              <button
                  type="button"
                  class="case-studies-modal-close"
                  @click="closeCaseStudy"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
                class="case-studies-markdown prose"
                v-html="selectedCaseStudy.content"
            ></div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <section class="case-studies-cta">
        <h2>Ready to Build Something Great?</h2>
        <p>
          Let's discuss how our technical expertise can help you achieve your
          business goals.
        </p>

        <router-link
            to="/contact"
            class="case-studies-cta-button"
        >
          Get Started
        </router-link>
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
      await router.push(`/case-studies/${id}`)
    }
  }
}

const closeCaseStudy = async () => {
  selectedCaseStudy.value = null
  await router.push('/case-studies')
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
.case-studies-page {
  display: flex;
  justify-content: center;
  padding: 1.25rem 10rem;
}

@media (max-width: 1280px) {
  .case-studies-page {
    padding-right: 5rem;
    padding-left: 5rem;
  }
}

@media (max-width: 1024px) {
  .case-studies-page {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

@media (max-width: 640px) {
  .case-studies-page {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

.case-studies-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
}

/* Case Studies */

.case-studies-intro {
  margin-bottom: 3rem;
  text-align: center;
}

.case-studies-intro > div {
  padding: 2rem;
  color: #ffffff;
  background: linear-gradient(to right, #3f7fbf, #2d5d8f);
  border-radius: 0.5rem;
}

.case-studies-intro h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.case-studies-intro p {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  font-size: 1.125rem;
  line-height: 1.625;
}

.case-studies-list {
  margin-bottom: 4rem;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
}

.case-studies-card {
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.case-studies-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.case-studies-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.case-studies-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.case-studies-card-logo {
  padding: 0.75rem;
  background-color: rgba(63, 127, 191, 0.1);
  border-radius: 0.5rem;
}

.case-studies-logo {
  display: block;
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}

.case-studies-card-header h3 {
  margin: 0;
  color: #101418;
  font-size: 1.25rem;
  font-weight: 600;
}

.case-studies-excerpt {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #5c738a;
}

.case-studies-learn-more {
  color: #3f7fbf;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-studies-learn-more:hover {
  color: #2d5d8f;
}

.case-studies-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.case-studies-technology {
  padding: 0.25rem 0.75rem;
  background-color: rgba(63, 127, 191, 0.1);
  border-radius: 9999px;
  color: #3f7fbf;
  font-size: 0.875rem;
}

/* Modal */

.case-studies-modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.case-studies-modal-content {
  width: 100%;
  max-width: 48rem;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #ffffff;
  border-radius: 0.5rem;
}

.case-studies-modal-body {
  padding: 2rem;
}

.case-studies-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.case-studies-modal-header h2 {
  margin: 0;
  color: #101418;
  font-size: 1.5rem;
  font-weight: 700;
}

.case-studies-modal-close {
  padding: 0;
  border: 0;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
}

.case-studies-modal-close:hover {
  color: #374151;
}

.case-studies-modal-close svg {
  width: 1.5rem;
  height: 1.5rem;
}

/* Markdown */

.case-studies-markdown {
  max-width: none;
}

/* CTA */

.case-studies-cta {
  margin-bottom: 3rem;
  padding: 2rem;
  text-align: center;
  background-color: rgba(63, 127, 191, 0.05);
  border-radius: 0.5rem;
}

.case-studies-cta h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #101418;
  font-size: 1.5rem;
  font-weight: 700;
}

.case-studies-cta p {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  color: #5c738a;
}

.case-studies-cta-button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #3f7fbf;
  border-radius: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s;
}

.case-studies-cta-button:hover {
  background-color: #2d5d8f;
}
</style>
