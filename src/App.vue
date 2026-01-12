<template>
  <div class="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style='font-family: Inter, "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <Header />

      <!-- Main Content -->
      <main class="flex-1">
        <router-view></router-view>
      </main>

      <!-- Scroll to Top Button -->
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#3f7fbf] text-white shadow-lg transition-all hover:bg-[#2d5d8f] focus:outline-none"
        aria-label="Scroll to top"
      >
        <svg
          class="h-6 w-6"
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

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import './assets/styles/tailwind.css'
import { ref, onMounted, onUnmounted } from 'vue'
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap');
</style>
