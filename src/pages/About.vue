<template>
  <div class="about-page">
    <div class="about-content">
      <!-- About the Founder Section -->
      <section class="about-founder">
        <div class="about-founder-content">
          <h2 class="about-section-title">About Me</h2>

          <!-- About Info -->

          <div class="about-founder-copy">
            <p class="about-large-copy">
              I'm <strong>Ismail Marmoush</strong>, a Software Engineer and Consultant
              with over a decade of experience across leading European tech companies.
            </p>
            <p class="about-large-copy">
              I specialize in building resilient distributed systems, developer platforms,
              and scalable cloud-native solutions, working closely with engineering teams
              to reduce complexity and improve delivery.
            </p>

          </div>


          <!-- Testimonials -->
          <div>
            <h3 class="about-testimonials-title">What Clients & Colleagues Say</h3>

            <div class="about-testimonials">
              <!-- Testimonial 1 -->
              <div class="about-testimonial">
                <div class="about-testimonial-body">
                  <svg class="about-icon about-icon-quote" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p class="about-quote">
                      "We managed to more than double our revenue while improving significantly along all parts of our
                      service. We built the by far best service in curated shopping and the biggest fashion freelance
                      employer in Europe within 3 years only.
                      I am especially thankful that you joined our team, as I can see how much you make a positive
                      impact. The team loves to discuss all technical complexities with you and really acknowledges your
                      skills and appreciates your opinion. You are having great ideas on how to best set-up our data
                      initiatives "
                    </p>
                    <p class="about-attribution">
                      — CEO, <a href="https://zalando.de" target="_blank" rel="noopener noreferrer"
                        class="about-link">Zalon By Zalando</a>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Testimonial 2 -->
              <div class="about-testimonial">
                <div class="about-testimonial-body">
                  <svg class="about-icon about-icon-quote" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p class="about-quote">
                      "Ismail, a highly technical and hands-on Software Architect whose expertise in AWS, Java,
                      Microservices, Kubernetes, and Domain-Driven Design is truly impressive. His disciplined approach
                      to writing software according to best practices consistently results in robust, scalable solutions
                      that meet both current and future needs."
                    </p>
                    <p class="about-attribution">
                      — VP Engineering, <a href="https://tamias.com" target="_blank" rel="noopener noreferrer"
                        class="about-link">Tamias</a>
                    </p>
                  </div>
                </div>
              </div>


              <!-- Testimonial 3 -->
              <div class="about-testimonial">
                <div class="about-testimonial-body">
                  <svg class="about-icon about-icon-quote" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p class="about-quote">
                      "Ismail is one of the best colleagues I've met, I've seen none of his genuine dedication
                      and effort in any other, perfectionist in a good way, ambitious and very talented and possesses
                      many skills which he's acquired in a short time span compared to the others, I sincerely hope I
                      get the chance to work with him again."
                    </p>
                    <p class="about-attribution">
                      — Software Architect, Nets Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
document.title = 'About – Ismail Marmoush'
</script>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  padding: 1.25rem 10rem;
}

.about-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
}

.about-hero {
  margin: 2.5rem 0 5rem;
  text-align: center;
}

.about-hero-heading {
  margin-bottom: 3rem;
}

.about-hero-heading h1 {
  margin-bottom: 1rem;
  color: #101418;
  font-size: 3rem;
  font-weight: 700;
}

.about-hero-rule {
  width: 5rem;
  height: 0.25rem;
  margin: 0 auto 1rem;
  background: #3f7fbf;
}

.about-hero-heading p {
  color: #3f7fbf;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.about-hero-summary {
  max-width: 48rem;
  margin: 0 auto;
}

.about-lead,
.about-large-copy {
  color: #5c738a;
  font-size: 1.125rem;
  line-height: 1.625;
}

.about-lead {
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.about-accent,
.about-link {
  color: #3f7fbf;
  font-weight: 500;
}

.about-link {
  text-decoration: none;
}

.about-link:hover {
  color: #2d5d8f;
  text-decoration: underline;
}

.about-availability {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #5c738a;
}

.about-availability p {
  font-size: 1rem;
}

.about-separator {
  margin: 0 0.5rem;
}

.about-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  color: #3f7fbf;
}

.about-icon-small {
  width: 1.25rem;
  height: 1.25rem;
}

.about-icon-large,
.about-feature-icon-large {
  width: 2rem;
  height: 2rem;
}

.about-vision,
.about-founder {
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

.about-feature-icon {
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border-radius: 50%;
  background: rgb(63 127 191 / 10%);
}

.about-feature-icon-large {
  margin-right: 0;
  width: 4rem;
  height: 4rem;
}

.about-vision h2,
.about-section-title,
.about-founder h2,
.about-open-source h2 {
  color: #101418;
  font-size: 1.5rem;
  font-weight: 700;
}

.about-section-copy {
  padding-left: 5rem;
  color: #5c738a;
  font-size: 1.125rem;
  line-height: 1.625;
}

.about-section-title,
.about-testimonials-title {
  margin-bottom: 2rem;
  text-align: center;
}

.about-values {
  margin-bottom: 4rem;
}

.about-values-grid,
.about-testimonials {
  display: grid;
  gap: 2rem;
}

.about-values-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-value-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease;
}

.about-value-card:hover {
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
}

.about-value-heading {
  margin-bottom: 1rem;
}

.about-value-card h3 {
  color: #101418;
  font-size: 1.125rem;
  font-weight: 600;
}

.about-value-card p,
.about-quote {
  color: #5c738a;
}

.about-founder-content {
  max-width: 64rem;
  margin: 0 auto;
}

.about-founder-copy {
  margin-bottom: 2rem;
}

.about-large-copy {
  margin-bottom: 1.5rem;
}

.about-founder-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: 0.25rem;
}

.about-icon-external {
  width: 1rem;
  height: 1rem;
}

.about-testimonials-title {
  color: #101418;
  font-size: 1.125rem;
  font-weight: 600;
}

.about-testimonials {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-testimonial {
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgb(63 127 191 / 5%);
}

.about-testimonial-body {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.about-icon-quote {
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.25rem;
}

.about-quote {
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.625;
}

.about-attribution {
  margin-top: 0.5rem;
  color: #101418;
  font-size: 0.875rem;
  font-weight: 500;
}

.about-open-source h2 {
  margin-bottom: 1rem;
}

.about-open-source p {
  margin-bottom: 1.5rem;
  color: #5c738a;
  font-size: 1.125rem;
}


@media (max-width: 1280px) {
  .about-page {
    padding-right: 5rem;
    padding-left: 5rem;
  }
}

@media (max-width: 1024px) {
  .about-page {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .about-values-grid,
  .about-testimonials {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .about-page {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .about-hero-heading h1 {
    font-size: 2.25rem;
  }

  .about-hero-heading p {
    font-size: 1rem;
  }

  .about-vision,
  .about-founder {
    padding: 1.5rem;
  }

  .about-section-heading {
    align-items: flex-start;
  }

  .about-section-copy {
    padding-left: 0;
  }

  .about-values-grid,
  .about-testimonials {
    grid-template-columns: 1fr;
  }
}
</style>
