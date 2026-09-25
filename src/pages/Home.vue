<template>
  <div class="home-container">
    <div class="layout-content-container">
      <!-- Hero Section -->
      <div class="hero-wrapper">
        <div class="hero-card">
          <!-- Hero Section Variant 3: Terminal Aesthetic -->
          <section class="hero-section">
            <div class="hero-content-container">
              <h1 class="hero-title">
                Simplifying Complexity
              </h1>
              <p class="hero-description">
                Architecting scalable, secure, and high-performance distributed backend systems.
              </p>
              <p class="hero-secondary-description">
                Experienced in
                delivering compliant, data-sensitive commerce platforms across Europe.
              </p>
              <div class="hero-actions">
                <router-link
                    to="/blog"
                    class="btn btn-primary"
                >
                  Read the Blog
                  <span class="material-symbols-outlined">-></span>
                </router-link>
                <button @click="scrollToSection"
                        class="btn btn-secondary">
                  View Projects
                </button>
              </div>
              <!-- Stack Indicators -->
              <div class="stack-indicators">
                <p class="stack-label">Current focus</p>
                <div class="stack-list">
                  <div class="stack-item">
                    <span class="dot "></span> Software Architecture
                  </div>
                  <div class="stack-item">
                    <span class="dot "></span> DevSecOps
                  </div>
                  <div class="stack-item">
                    <span class="dot "></span> Java & Kotlin
                  </div>
                  <div class="stack-item">
                    <span class="dot "></span> Android
                  </div>
                  <div class="stack-item">
                    <span class="dot "></span> Rust (Evaluating)
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Main Content Grid (stacked vertically) -->
      <!--      What I'm Building        -->
      <div class="content-section-grid">
        <div class="section-column">
          <section>
            <div ref="targetSection" class="highlights-heading">
              <div>
                <span class="highlights-eyebrow">Highlights</span>
              </div>
            </div>
            <div class="highlights-grid">
              <router-link to="/case-studies/glovo" class="highlight-card">
                <span class="highlight-type">Case Study</span>
                <h3>Glovo — Home page Microservice</h3>
                <p>Extraction of home page functionality into a dedicated microservice.</p>
                <span class="highlight-arrow">View case study <span aria-hidden="true">→</span></span>
              </router-link>
              <router-link to="/case-studies/zalando" class="highlight-card">
                <span class="highlight-type">Case Study</span>
                <h3>Zalando — Operating at Scale</h3>
                <p>Engineering a Tier-1 service in a large distributed environment.</p>
                <span class="highlight-arrow">View case study <span aria-hidden="true">→</span></span>
              </router-link>
              <router-link to="/blog/2019-06-27-best-keyboard-for-programming" class="highlight-card">
                <span class="highlight-type">Article</span>
                <h3>Best Keyboard for Programming</h3>
                <p>A practical look at choosing a keyboard for comfortable, focused programming work.</p>
                <span class="highlight-arrow">Read article <span aria-hidden="true">→</span></span>
              </router-link>
              <router-link to="/blog/2020-12-25-microservice-sizing-without-pizza" class="highlight-card">
                <span class="highlight-type">Article</span>
                <h3>How big a microservice should be without pizzas</h3>
                <p>A practical look at the technical and organizational signals behind service boundaries.</p>
                <span class="highlight-arrow">Read article <span aria-hidden="true">→</span></span>
              </router-link>
            </div>
            <div class="highlights-actions">
              <router-link to="/case-studies" class="highlights-action">View all Case Studies <span aria-hidden="true">→</span></router-link>
              <router-link to="/blog" class="highlights-action">Read the Blog <span aria-hidden="true">→</span></router-link>
            </div>
          </section>
          <section v-if="false">
            <h2 ref="targetSection" class="section-heading">
              What I'm Building
            </h2>
            <div class="project-card">
              <div class="project-list">
                <div class="project-item">
                  <div class="project-info">
                    <div class="project-name-wrapper">
                      <span class="project-dot ">●</span>
                      <span class="project-name">Project Helium</span>
                    </div>
                    <div class="project-description">Cloud-native Java microservice foundation with AI
                      support.
                      <a href="https://memoria.io/#/products/helium" target="_blank" rel="noopener noreferrer"
                         class="project-link">
                        <svg class="project-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="status-badge status-rc">
                    Release Candidate
                  </div>
                </div>

                <div class="project-item">
                  <div class="project-info">
                    <div class="project-name-wrapper">
                      <span class="project-dot ">●</span>
                      <span class="project-name">Project Argon</span>
                    </div>
                    <div class="project-description">Composable infrastructure stack for distributed
                      systems
                      <a href="https://memoria.io/#/products/argon" target="_blank" rel="noopener noreferrer"
                         class="project-link">
                        <svg class="project-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="status-badge status-alpha">
                    Alpha
                  </div>
                </div>

                <div class="project-item">
                  <div class="project-info">
                    <div class="project-name-wrapper">
                      <span class="project-dot ">●</span>
                      <span class="project-name">Nota.sh</span>
                    </div>
                    <div class="project-description">Knowledge management and collaboration</div>
                  </div>
                  <div class="status-badge status-pre-alpha">
                    Pre-Alpha
                  </div>
                </div>

                <div class="project-item">
                  <div class="project-info">
                    <div class="project-name-wrapper">
                      <span class="project-dot ">●</span>
                      <span class="project-name">Memoria's Opensource Utilities</span>
                    </div>
                    <div class="project-description flex-items-row">
                      Available on GitHub
                      <a href="https://github.com/memoria-io" target="_blank" rel="noopener noreferrer"
                         class="project-link">
                        <svg class="project-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="status-badge status-ga">
                    General Availability
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      <!-- Contact section -->
      <section class="home-contact-section">
        <div class="home-contact-card">
          <div class="home-contact-copy">
            <span class="home-contact-eyebrow">Have a project in mind?</span>
            <h2>Let's work together</h2>
            <p>
              Whether you need help with a technical challenge or want to discuss
              a consulting engagement, let's start a conversation.
            </p>
          </div>
          <router-link to="/contact" class="home-contact-button">
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
document.title = 'Ismail Marmoush';

import {ref} from 'vue'

const targetSection = ref<HTMLElement | null>(null)

const scrollToSection = () => {
  targetSection.value?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.home-container {
  padding: 0 10rem;
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

@media (max-width: 1280px) {
  .home-container {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (max-width: 1024px) {
  .home-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.layout-content-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  flex: 1 1 0%;
}

.hero-wrapper {
  margin-bottom: 1rem;
}

.hero-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.hero-section {
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  padding-bottom: 2rem;
  padding-top: 1rem;
}


.hero-content-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 90rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 1024px) {
  .hero-card {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .hero-section {
    padding-bottom: 2rem;
    padding-top: 1rem;
  }

  .hero-content-container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.experience-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  background-color: #eff6ff;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.experience-text {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1d4ed8;
}

.hero-title {
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #0f172a;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.highlight-wrapper {
  position: relative;
}

.highlight-bg {
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  z-index: -10;
  height: 0.75rem;
  width: 100%;
  background-color: rgba(59, 130, 246, 0.1);
}

.hero-description {
  margin-top: 2rem;
  max-width: 100rem;
  font-size: 1.125rem;
  line-height: 1.625;
  color: #475569;
}

.hero-secondary-description {
  margin-top: 1rem;
  max-width: 100rem;
  font-size: 1.125rem;
  line-height: 1.625;
  color: #475569;
}

@media (min-width: 768px) {
  .hero-description, .hero-secondary-description {
    font-size: 1.25rem;
  }
}

.hero-actions {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  transition-property: all;
  transition-duration: 0.2s;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background-color: #3b82f6;
  color: #ffffff;
  box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  color: #0f172a;
}

.btn-secondary:hover {
  background-color: #f8fafc;
}

.stack-indicators {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stack-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.stack-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #f1f5f9;
  background-color: rgba(248, 250, 252, 0.5);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
}

.dot {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: #3f7fbf;
}

.stack-item:nth-child(2) .dot {
  background-color: #8b5cf6;
}

.stack-item:nth-child(3) .dot {
  background-color: #10b981;
}

.stack-item:nth-child(4) .dot {
  background-color: #f59e0b;
}

.stack-item:nth-child(5) .dot {
  background-color: #ef4444;
}

.content-section-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 5rem;
}

.section-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-heading {
  color: #101418;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
}

.highlights-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.highlights-eyebrow {
  display: block;
  margin-bottom: 0.5rem;
  color: #3f7fbf;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.highlights-heading .section-heading {
  margin: 0;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.highlight-card {
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.highlight-card:hover {
  border-color: rgb(63 127 191 / 35%);
  box-shadow: 0 8px 20px rgb(16 20 24 / 8%);
  transform: translateY(-2px);
}

.highlight-type {
  margin-bottom: 0.75rem;
  color: #3f7fbf;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.highlight-card h3 {
  margin: 0;
  color: #101418;
  font-size: 1.1rem;
  line-height: 1.35;
}

.highlight-card p {
  margin: 0.75rem 0 1.25rem;
  color: #5c738a;
  font-size: 0.95rem;
  line-height: 1.6;
}

.highlight-arrow {
  margin-top: auto;
  color: #2d5d8f;
  font-size: 0.9rem;
  font-weight: 600;
}

.highlights-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.highlights-action {
  color: #2d5d8f;
  font-weight: 600;
  text-decoration: none;
}

.highlights-action:hover {
  color: #3f7fbf;
}

@media (max-width: 640px) {
  .highlights-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.project-list {
  display: flex;
  flex-direction: column;
}

.project-list > * + * {
  border-top: 1px solid #e5e7eb;
}

.project-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.2s;
}

.project-item:hover {
  background-color: #f9fafb;
}

.project-info {
  flex: 1 1 0%;
}

.project-name-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-dot {
  flex-shrink: 0;
}

.project-name {
  color: #101418;
  font-weight: 500;
}

.project-description {
  margin-left: 1.5rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #5c738a;
}

.flex-items-row {
  display: flex;
  align-items: center;
}

.project-link {
  margin-left: 0.5rem;
  color: #3f7fbf;
  text-decoration: none;
}

.project-link:hover {
  color: #2d5d8f;
}

.project-link-icon {
  width: 1rem;
  height: 1rem;
  display: inline-block;
}

.status-badge {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.status-rc {
  background-color: #dcfce7;
  color: #166534;
}

.status-alpha {
  background-color: #fef9c3;
  color: #854d0e;
}

.status-pre-alpha {
  background-color: #dbeafe;
  color: #1e40af;
}

.status-ga {
  background-color: #f3f4f6;
  color: #1f2937;
}

.home-contact-section {
  margin-bottom: 2rem;
}

.home-contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2.25rem;
  border: 1px solid rgb(63 127 191 / 18%);
  border-radius: 0.75rem;
  background: linear-gradient(120deg, #fff, rgb(63 127 191 / 5%));
  box-shadow: 0 8px 24px rgb(16 20 24 / 6%);
}

.home-contact-copy {
  max-width: 42rem;
}

.home-contact-eyebrow {
  display: block;
  margin-bottom: 0.5rem;
  color: #3f7fbf;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-contact-copy h2 {
  margin-bottom: 0.5rem;
  color: #101418;
  font-size: 1.5rem;
}

.home-contact-copy p {
  color: #5c738a;
  line-height: 1.625;
}

.home-contact-button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  color: #fff;
  background: #3f7fbf;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.home-contact-button:hover {
  background: #2d5d8f;
  transform: translateY(-2px);
}

.home-contact-button svg {
  width: 1.15rem;
  height: 1.15rem;
}

@media (max-width: 640px) {
  .home-contact-card {
    align-items: flex-start;
    flex-direction: column;
    padding: 1.5rem;
  }
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
  transition: box-shadow 0.2s;
  text-decoration: none;
}

.social-btn:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.linkedin-btn {
  background-color: #0077b5;
  color: #ffffff;
}

.social-btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.github-icon {
  color: #374151;
}

.github-btn {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  color: #111827;
}

.stack-overflow-btn {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  color: #111827;
}

.so-flair {
  border-radius: 0.25rem;
  height: 66px;
  width: auto;
  display: block;
}
</style>
