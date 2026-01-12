<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="prose prose-lg" v-html="renderedContent"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { parseMarkdown } from '../services/markdown'

const props = defineProps<{
  pageName: string
}>()

const renderedContent = ref('')

const loadContent = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}pages/${props.pageName}.md`)
    const markdown = await response.text()
    renderedContent.value = await parseMarkdown(markdown)
  } catch (error) {
    console.error(`Failed to load ${props.pageName} content:`, error)
    renderedContent.value = '<p>Failed to load content. Please try again later.</p>'
  }
}

onMounted(() => {
  loadContent()
})

// Reload content if pageName changes
watch(() => props.pageName, () => {
  loadContent()
})
</script>

<style>
.prose {
  max-width: 100%;
}
</style> 