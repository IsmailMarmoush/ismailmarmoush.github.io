<template>
  <div class="contact-page">
    <article class="contact-content">
      <div class="contact-markdown">
        <h1>Get in Touch</h1>
        <p class="contact-introduction">
          Whether you have a project in mind, need help with a technical challenge,
          or would like to discuss a consulting engagement, feel free to reach out.
        </p>
        <h2>Contact</h2>
        <p>For consulting, short-term engagements, speaking opportunities, or general questions.</p>
        <p>I typically reply within a few business days.</p>
      </div>

      <div class="contact-actions" aria-label="Contact links">
        <a class="contact-action contact-action-primary" href="mailto:contact@marmoush.com">
          <svg class="contact-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/>
            <path d="m22 6-10 7L2 6"/>
          </svg>
          <span>
            <strong>Email me</strong>
            <small>contact@marmoush.com</small>
          </span>
          <svg class="contact-action-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </a>

        <a class="contact-action" href="https://www.linkedin.com/in/ismailmarmoush/" target="_blank" rel="noopener noreferrer">
          <svg class="contact-action-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
          </svg>
          <span>
            <strong>Connect on LinkedIn</strong>
            <small>Professional profile and experience</small>
          </span>
          <svg class="contact-action-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </a>

        <a class="contact-action" href="https://github.com/ismailmarmoush" target="_blank" rel="noopener noreferrer">
          <svg class="contact-action-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/>
          </svg>
          <span>
            <strong>Explore GitHub</strong>
            <small>Projects and open-source work</small>
          </span>
          <svg class="contact-action-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </a>

        <a class="contact-action" href="https://stackoverflow.com/users/263215/ismail-marmoush" target="_blank" rel="noopener noreferrer">
          <svg class="contact-action-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.21 20.08v-4.34h1.45v5.79H3.96v-5.79h1.45v4.34h11.8ZM7.1 17.53h8.88v1.45H7.1v-1.45Zm.13-3.3.3-1.42 8.72 1.83-.3 1.42-8.72-1.83Zm.94-3.62.6-1.33 8.2 3.53-.58 1.35-8.22-3.55Zm1.76-3.41.9-1.15 7.04 5.45-.9 1.16-7.04-5.46Zm2.65-2.85 1.15-.9 5.47 7.04-1.16.9-5.46-7.04Z"/>
          </svg>
          <span>
            <strong>View Stack Overflow</strong>
            <small>Technical contributions and answers</small>
          </span>
          <svg class="contact-action-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </a>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
document.title = 'Contact – Ismail Marmoush'
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  padding: 1.25rem 10rem;
}

.contact-content {
  width: 100%;
  max-width: 1200px;
  padding: 3rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
}

.contact-markdown {
  max-width: 56rem;
  margin: 0 auto;
}

.contact-actions {
  display: grid;
  max-width: 56rem;
  margin: 2.5rem auto 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.contact-action {
  display: flex;
  min-height: 5rem;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.625rem;
  color: #101418;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 4%);
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.contact-action:hover {
  border-color: rgb(63 127 191 / 45%);
  box-shadow: 0 8px 20px rgb(16 20 24 / 8%);
  transform: translateY(-2px);
}

.contact-action-primary {
  border-color: #3f7fbf;
  color: #fff;
  background: #3f7fbf;
}

.contact-action-primary:hover {
  border-color: #2d5d8f;
  background: #2d5d8f;
}

.contact-action-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.contact-action span {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 0.2rem;
}

.contact-action strong {
  font-size: 0.95rem;
  font-weight: 600;
}

.contact-action small {
  overflow: hidden;
  color: #5c738a;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-action-primary small {
  color: rgb(255 255 255 / 78%);
}

.contact-action-arrow {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.contact-markdown h1 {
  margin-bottom: 1rem;
  color: #101418;
  font-size: 2.25rem;
  line-height: 1.1;
}

.contact-markdown h1::after {
  display: block;
  width: 5rem;
  height: 0.25rem;
  margin-top: 1rem;
  content: '';
  background: #3f7fbf;
}

.contact-markdown h2 {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  color: #101418;
  font-size: 1.5rem;
}

.contact-markdown p {
  color: #5c738a;
  font-size: 1.125rem;
  line-height: 1.625;
}

.contact-markdown a {
  color: #3f7fbf;
  font-weight: 500;
}

.contact-markdown a:hover {
  color: #2d5d8f;
}

.contact-markdown strong {
  color: #101418;
}

@media (max-width: 1280px) {
  .contact-page {
    padding-right: 5rem;
    padding-left: 5rem;
  }
}

@media (max-width: 1024px) {
  .contact-page {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

@media (max-width: 640px) {
  .contact-page {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .contact-content {
    padding: 1.5rem;
  }

  .contact-actions {
    grid-template-columns: 1fr;
  }

  .contact-markdown h1 {
    font-size: 2rem;
  }
}
</style>
