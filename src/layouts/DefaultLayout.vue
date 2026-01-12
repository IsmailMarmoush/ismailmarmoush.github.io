<template>
  <div>
    <Header/>
    <main>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Add layout-specific styles here */
</style>