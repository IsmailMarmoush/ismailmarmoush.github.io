<template>
  <div class="home-container">
    <div class="layout-content-container">
      <!-- Hero Section -->
      <div class="hero-wrapper">
        <div class="hero-card">
          <!-- Hero Section Variant 3: Terminal Aesthetic -->
          <section class="hero-section">
            <!-- Subtle Background Decorative Elements -->
            <div class="hero-bg-pattern"></div>
            <div class="hero-content-container">
              <div class="hero-grid">
                <!-- Left Content: Value Proposition -->
                <div class="hero-left">
                  <div class="experience-badge">
                    <span class="experience-text"><> const EXPERIENCE = 12; // years_of_excellence</span>
                  </div>
                  <h1 class="hero-title">
                    Simplifying <br/>
                    <span class="highlight-wrapper">
                                Complexity
                                <span class="highlight-bg"></span>
                  </span>
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
                        <span class="dot dot-red"></span> Software Architecture
                      </div>
                      <div class="stack-item">
                        <span class="dot dot-blue"></span> DevSecOps
                      </div>
                      <div class="stack-item">
                        <span class="dot dot-orange"></span> Java & Kotlin
                      </div>
                      <div class="stack-item">
                        <span class="dot dot-green"></span> Android
                      </div>
                      <div class="stack-item">
                        <span class="dot dot-red"></span> Rust (Beginner)
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Right Content: Visual Identity -->
                <div class="hero-right">
                  <!-- Main Portrait Container -->
                  <div class="portrait-container">
                    <div class="portrait-border"></div>
                    <div class="portrait-image-wrapper">
                      <img alt="Ismail Portrait" class="portrait-image"
                           data-alt="Professional headshot of a smiling male software engineer"
                           src="/images/profile02.png"/>
                      <!-- Floating Insight Tag -->
                      <div class="insight-tag">
                        <div class="insight-content">
                          <div>
                            <p class="insight-label">Latest Insight</p>
                            <p class="insight-title">Project Helium in Production</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
            <h2 ref="targetSection" class="section-heading">
              What I'm Building
            </h2>
            <div class="project-card">
              <div class="project-list">
                <div class="project-item">
                  <div class="project-info">
                    <div class="project-name-wrapper">
                      <span class="project-dot dot-green">●</span>
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
                      <span class="project-dot dot-yellow">●</span>
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
                      <span class="project-dot dot-blue">●</span>
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
                      <span class="project-dot dot-gray">●</span>
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

        <!--   Skills and Interests     -->
        <div class="section-column">
          <section>
            <h2 class="section-heading">Skills & Interests</h2>
            <div class="skills-card">
              <div class="skills-list">
                <!-- Programming Languages -->
                <div class="skill-group">
                  <div class="skill-info">
                    <div class="skill-header">
                      <span class="skill-dot dot-green">●</span>
                      <span class="skill-name">Programming Languages</span>
                    </div>
                    <div class="skill-tags">
                      <span class="skill-tag">Java</span>
                      <span class="skill-tag">Kotlin</span>
                      <span class="skill-tag">Scala</span>
                      <span class="skill-tag">JavaScript</span>
                      <span class="skill-tag">Rust</span>
                      <span class="skill-tag">Python</span>
                      <span class="skill-tag">TypeScript</span>
                    </div>
                  </div>
                </div>

                <!-- Architecture & Paradigms -->
                <div class="skill-group">
                  <div class="skill-info">
                    <div class="skill-header">
                      <span class="skill-dot dot-blue">●</span>
                      <span class="skill-name">Architecture & Paradigms</span>
                    </div>
                    <div class="skill-tags">
                      <span class="skill-tag">Hexagonal Architecture</span>
                      <span class="skill-tag">Event Sourcing</span>
                      <span class="skill-tag">CQRS</span>
                      <span class="skill-tag">DDD</span>
                      <span class="skill-tag">Object-Oriented Programming</span>
                      <span class="skill-tag">Functional Programming</span>
                      <span class="skill-tag">Reactive Programming</span>
                      <span class="skill-tag">Event Driven Architecture</span>
                      <span class="skill-tag">System Design</span>
                      <span class="skill-tag">Clean Code</span>
                      <span class="skill-tag">Refactoring</span>
                      <span class="skill-tag">Test-Driven Development</span>
                    </div>
                  </div>
                </div>

                <!-- Tech Stack & Tools -->
                <div class="skill-group">
                  <div class="skill-info">
                    <div class="skill-header">
                      <span class="skill-dot dot-yellow">●</span>
                      <span class="skill-name">Tech Stack & Tools</span>
                    </div>
                    <div class="skill-tags">
                      <span class="skill-tag">Reactive Streams</span>
                      <span class="skill-tag">Project Reactor</span>
                      <span class="skill-tag">VAVR</span>
                      <span class="skill-tag">Spring Framework</span>
                      <span class="skill-tag">Maven</span>
                      <span class="skill-tag">Gradle</span>
                      <span class="skill-tag">Oracle Helidon SE</span>
                      <span class="skill-tag">Flutter</span>
                      <span class="skill-tag">Web Development</span>
                      <span class="skill-tag">12 Factor App</span>
                      <span class="skill-tag">Kafka</span>
                      <span class="skill-tag">Redis</span>
                      <span class="skill-tag">MySQL</span>
                      <span class="skill-tag">PostgreSQL</span>
                    </div>
                  </div>
                </div>

                <!-- DevOps & Cloud -->
                <div class="skill-group">
                  <div class="skill-info">
                    <div class="skill-header">
                      <span class="skill-dot dot-pink">●</span>
                      <span class="skill-name">DevOps & Cloud</span>
                    </div>
                    <div class="skill-tags">
                      <span class="skill-tag">Linux</span>
                      <span class="skill-tag">Bash</span>
                      <span class="skill-tag">Docker</span>
                      <span class="skill-tag">Git</span>
                      <span class="skill-tag">GitHub Actions</span>
                      <span class="skill-tag">Ansible</span>
                      <span class="skill-tag">AWS</span>
                      <span class="skill-tag">Kubernetes</span>
                      <span class="skill-tag">CI/CD</span>
                      <span class="skill-tag">Security</span>
                      <span class="skill-tag">Cloud Solutions</span>
                      <span class="skill-tag">GCP</span>
                      <span class="skill-tag">Debian</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      <!--  Contact section    -->
      <div class="contact-section">
        <h2 class="section-heading">Contact & Collaboration</h2>
        <div class="contact-card">
          <div class="contact-grid">
            <!-- Left: bigger CTA / context -->
            <div class="contact-left">
              <p class="contact-text">I'm available for consulting, short-term
                engagements, and speaking at events. Use the links to the right to view projects, connect
                professionally, or reach out. I typically reply within a few business days.
              </p>
              <p class="contact-text margin-top-4">
                If you'd like to discuss a specific project, include a brief summary and your timeline when you reach
                out.</p>
            </div>

            <!-- Right: large, clear action links -->
            <div class="contact-right">
              <div class="contact-links">
                <a href="https://www.linkedin.com/in/ismailmarmoush" target="_blank" rel="noopener noreferrer"
                   class="social-btn linkedin-btn">
                  <svg class="social-btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.05c.54-1.02 1.86-2.09 3.84-2.09 4.11 0 4.87 2.71 4.87 6.24V24h-4v-7.3c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.9-2.79 3.86V24h-4V8z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a href="https://github.com/ismailmarmoush" target="_blank" rel="noopener noreferrer"
                   class="social-btn github-btn">
                  <svg class="social-btn-icon github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.15 11.15 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.81 1.2 1.84 1.2 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                          clip-rule="evenodd"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://stackoverflow.com/users/263215/ismail-marmoush" target="_blank"
                   rel="noopener noreferrer"
                   class="social-btn stack-overflow-btn">
                  <img src="https://stackoverflow.com/users/flair/263215.png?theme=clean" alt="Stack Overflow Profile"
                       class="so-flair"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  padding-bottom: 5rem;
  padding-top: 4rem;
}

.hero-bg-pattern {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  opacity: 0.03;
  background-image: radial-gradient(#195de6 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-content-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.hero-grid {
  display: grid;
  align-items: center;
  gap: 4rem;
}

@media (min-width: 1024px) {
  .hero-card {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .hero-section {
    padding-bottom: 8rem;
    padding-top: 6rem;
  }

  .hero-content-container {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .hero-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.hero-left {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  max-width: 32rem;
  font-size: 1.125rem;
  line-height: 1.625;
  color: #475569;
}

.hero-secondary-description {
  margin-top: 1rem;
  max-width: 32rem;
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
}

.dot-red {
  background-color: #ef4444;
}

.dot-blue {
  background-color: #3b82f6;
}

.dot-orange {
  background-color: #f97316;
}

.dot-green {
  background-color: #22c55e;
}

.dot-yellow {
  background-color: #eab308;
}

.dot-gray {
  background-color: #6b7280;
}

.dot-pink {
  background-color: #ec4899;
}

.hero-right {
  position: relative;
}

.portrait-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 28rem;
}

.portrait-border {
  position: absolute;
  top: -1rem;
  right: -1rem;
  bottom: -1rem;
  left: -1rem;
  border-radius: 2rem;
  border: 2px dashed #e2e8f0;
}

.portrait-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background-color: #f1f5f9;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.portrait-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.insight-tag {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
}

.insight-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.insight-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
}

.insight-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
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

.project-card, .skills-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.project-list, .skills-list {
  display: flex;
  flex-direction: column;
}

.project-list > * + *, .skills-list > * + * {
  border-top: 1px solid #e5e7eb;
}

.project-item, .skill-group {
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.2s;
}

.project-item:hover, .skill-group:hover {
  background-color: #f9fafb;
}

.project-info, .skill-info {
  flex: 1 1 0%;
}

.project-name-wrapper, .skill-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-dot, .skill-dot {
  flex-shrink: 0;
}

.project-name, .skill-name {
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

.skill-tags {
  margin-left: 1.5rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #5c738a;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  margin-right: 1rem;
}

.contact-section {
  margin-bottom: 0;
}

.contact-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: flex-start;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .contact-left {
    grid-column: span 2 / span 2;
  }
}

.contact-text {
  color: #5c738a;
  margin-top: 1rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .contact-text {
    margin-left: 0;
    margin-right: 0;
  }
}

.margin-top-4 {
  margin-top: 1rem;
}

.contact-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .contact-right {
    align-items: flex-end;
  }
}

.contact-links {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  gap: 0.75rem;
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
  color: #374151; /* text-gray-700 */
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
