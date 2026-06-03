<template>
  <div class="app-container"
       style='font-family: Inter, "Noto Sans", sans-serif;'>
    <div class="layout-wrapper">
      <Header/>

      <!-- Main Content -->
      <main class="main-content">
        <router-view></router-view>
      </main>

      <!-- Scroll to Top Button -->
      <button
          v-show="showScrollTop"
          @click="scrollToTop"
          class="scroll-top-btn"
          aria-label="Scroll to top"
      >
        <svg
            class="icon-scroll-top"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>

      <Footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Scroll to top functionality
const showScrollTop = ref(false)

const checkScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap');

.app-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f9fafb; /* bg-gray-50 */
  overflow-x: hidden;
}

.layout-wrapper {
  display: flex;
  height: 100%;
  flex-grow: 1;
  flex-direction: column;
}

.main-content {
  flex: 1 1 0%;
}

.scroll-top-btn {
  position: fixed;
  bottom: 2rem; /* bottom-8 */
  right: 2rem; /* right-8 */
  z-index: 50;
  display: flex;
  height: 3rem; /* h-12 */
  width: 3rem; /* w-12 */
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  background-color: #3f7fbf;
  color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border: none;
  cursor: pointer;
}

.scroll-top-btn:hover {
  background-color: #2d5d8f;
}

.scroll-top-btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.icon-scroll-top {
  height: 1.5rem; /* h-6 */
  width: 1.5rem; /* w-6 */
}
</style>
