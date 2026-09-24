<template>
  <div class="app-container">
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
