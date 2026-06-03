<template>
  <footer class="footer-outer">
    <div class="footer-container">
      <footer class="footer-content">
        <div class="footer-links">
          <router-link v-for="link in footerLinks"
                       :key="link.text"
                       :to="link.route"
                       class="footer-link">
            {{ link.text }}
          </router-link>
        </div>
        <div class="social-links">
          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/ismailmarmoush"
             target="_blank"
             rel="noopener noreferrer"
             class="social-link linkedin">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/ismailmarmoush"
             target="_blank"
             rel="noopener noreferrer"
             class="social-link github">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>

        </div>
        <p class="copyright">©2025 marmoush.com, All rights reserved.</p>
      </footer>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = []
</script>

<style scoped>
.footer-outer {
  display: flex;
  justify-content: center;
}

.footer-container {
  display: flex;
  max-width: 960px;
  flex: 1 1 0%;
  flex-direction: column;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 1.25rem;
  text-align: center;
  container-type: inline-size;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

@container (min-width: 480px) {
  .footer-links {
    flex-direction: row;
    justify-content: space-around;
  }
}

.footer-link {
  color: #5c738a;
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
  min-width: 10rem;
  transition: color 0.2s;
  text-decoration: none;
}

.footer-link:hover {
  color: #3f7fbf;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  color: #5c738a;
  transition: color 0.2s;
}

.social-link.linkedin:hover {
  color: #0077B5;
}

.social-link.github:hover {
  color: #181717;
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.copyright {
  color: #5c738a;
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
}
</style>
