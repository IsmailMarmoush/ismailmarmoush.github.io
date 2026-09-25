<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-wrapper">
        <a href="/">
          <img src="/src/assets/images/logo.png" alt="Marmoush.com Logo" class="logo">
        </a>
      </div>
      <div class="nav-wrapper">
        <button
            type="button"
            class="menu-toggle"
            :aria-expanded="menuOpen"
            aria-controls="main-navigation"
            aria-label="Toggle navigation"
            @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="main-navigation" class="nav" :class="{ 'is-open': menuOpen }" @click="menuOpen = false">
          <router-link
              to="/"
              class="nav-link"
              :class="{ 'active': $route.path === '/' }"
          >Home
          </router-link>
          <router-link
              to="/engineering"
              class="nav-link"
              :class="{ 'active': $route.path === '/engineering' }"
          >Engineering
          </router-link>
          <router-link
              to="/case-studies"
              class="nav-link"
              :class="{ 'active': $route.path === '/case-studies' }"
          >Case Studies
          </router-link>
          <router-link
              to="/about"
              class="nav-link"
              :class="{ 'active': $route.path === '/about' }"
          >About
          </router-link>
          <router-link
              to="/blog"
              class="nav-link"
              :class="{ 'active': $route.path === '/blog' }"
          >Blog
          </router-link>
          <router-link
              to="/contact"
              class="nav-link"
              :class="{ 'active': $route.path === '/contact' }"
          >Contact
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  white-space: nowrap;
}

.header-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #101418;
}

.logo {
  height: 1.5rem;
  width: auto;
}

.nav-wrapper {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 2rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 3.5rem;
}

.nav-link {
  position: relative;
  color: #101418;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 0.125rem;
  background-color: #3b82f6;
}

.menu-toggle {
  display: none;
  width: 2.75rem;
  height: 2.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #101418;
}

.menu-toggle span {
  display: block;
  width: 1.2rem;
  height: 2px;
  border-radius: 9999px;
  background: currentColor;
}

@media (max-width: 767px) {
  .header-container {
    position: relative;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  }

  .nav-wrapper {
    flex: 0 0 auto;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: calc(100% - 0.25rem);
    right: 1rem;
    left: 1rem;
    z-index: 20;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    background: #ffffff;
    box-shadow: 0 12px 28px rgb(16 20 24 / 12%);
  }

  .nav.is-open {
    display: flex;
  }

  .nav-link {
    padding: 0.75rem 0.85rem;
    font-size: 1rem;
  }

  .nav-link.active::after {
    right: 0.85rem;
    bottom: 0.35rem;
    left: 0.85rem;
    width: auto;
  }
}
</style>
<script setup lang="ts">
import {ref} from 'vue'

const menuOpen = ref(false)
</script>