<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-wrapper">
        <a href="/">
          <img src="/src/assets/images/logo.png" alt="Marmoush.com Logo" class="logo">
        </a>
      </div>
      <div class="nav-wrapper">
        <nav class="nav">
          <router-link
              to="/"
              class="nav-link"
              :class="{ 'active': $route.path === '/' }"
          >Home
          </router-link>

          <router-link
              to="/blog"
              class="nav-link"
              :class="{ 'active': $route.path === '/blog' }"
          >Blog
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
</style>
