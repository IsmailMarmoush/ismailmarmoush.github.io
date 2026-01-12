<template>
  <nav class="overflow-y-auto" style="max-height: calc(100vh - 200px);">
    <div v-if="items.length > 0">
      <h3 class="text-sm font-medium text-[#5c738a] uppercase tracking-wider mb-3">{{ title }}</h3>
      <div class="space-y-1">
        <template v-for="item in items" :key="item.id">
          <div>
            <!-- Main header with expansion -->
            <div class="flex items-center group">
              <button 
                v-if="item.children?.length"
                @click.stop="toggleSection(item.id)"
                class="w-4 h-4 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <span class="transform transition-transform" :class="expandedSections.has(item.id) ? 'rotate-90' : ''">
                  ›
                </span>
              </button>
              <span v-else class="w-4 mr-2"></span>
              <a 
                :href="'#' + item.id"
                @click.prevent="() => { scrollToSection(item.id); if (item.children?.length) toggleSection(item.id); }"
                class="block py-1 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                :class="{ 'toc-active': activeSection === item.id }"
              >
                {{ item.text }}
              </a>
            </div>
            
            <!-- Sub-headers -->
            <div v-if="item.children?.length && expandedSections.has(item.id)" class="ml-4 mt-1">
              <template v-for="child in item.children" :key="child.id">
                <div class="flex items-center group">
                  <button 
                    v-if="child.children?.length"
                    @click.stop="toggleSection(child.id)"
                    class="w-4 h-4 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600"
                  >
                    <span class="transform transition-transform" :class="expandedSections.has(child.id) ? 'rotate-90' : ''">
                      ›
                    </span>
                  </button>
                  <span v-else class="w-4 mr-2"></span>
                  <a 
                    :href="'#' + child.id"
                    @click.prevent="() => { scrollToSection(child.id); if (child.children?.length) toggleSection(child.id); }"
                    class="py-1 pr-4 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                    :class="{ 'toc-active': activeSection === child.id }"
                  >
                    {{ child.text }}
                  </a>
                </div>
                
                <!-- Third level -->
                <div v-if="child.children?.length && expandedSections.has(child.id)" class="ml-10 mt-1">
                  <template v-for="grandchild in child.children" :key="grandchild.id">
                    <a 
                      :href="'#' + grandchild.id"
                      @click.prevent="() => { scrollToSection(grandchild.id); if (grandchild.children?.length) toggleSection(grandchild.id); }"
                      class="block py-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
                      :class="{ 'toc-active': activeSection === grandchild.id }"
                    >
                      {{ grandchild.text }}
                    </a>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface TocItem {
  id: string
  text: string
  level: number
  children: TocItem[]
}

const props = defineProps<{
  contentRef: HTMLElement | null
  title?: string
  startLevel?: number // e.g., 2 to start from h2
  maxLevel?: number // e.g., 4 to include up to h4
}>()

const items = ref<TocItem[]>([])
const activeSection = ref<string>('')
const expandedSections = ref<Set<string>>(new Set())
let observer: IntersectionObserver | null = null

const toggleSection = (id: string) => {
  if (expandedSections.value.has(id)) {
    expandedSections.value.delete(id)
  } else {
    expandedSections.value.add(id)
  }
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }
}

const generateTableOfContents = () => {
  const flatToc: TocItem[] = []
  if (props.contentRef) {
    const startLevel = props.startLevel || 2
    const maxLevel = props.maxLevel || 6
    const selector = Array.from({ length: maxLevel - startLevel + 1 }, (_, i) => `h${startLevel + i}`).join(', ')
    
    const headers = props.contentRef.querySelectorAll(selector)
    headers.forEach((header) => {
      if (!header.id) {
        header.id = header.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      }
      
      flatToc.push({
        id: header.id,
        text: header.textContent || '',
        level: parseInt(header.tagName[1]),
        children: []
      })
    })
  }

  // Convert flat structure to tree
  const treeStructure: TocItem[] = []
  const stack: TocItem[] = []

  flatToc.forEach((item) => {
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      treeStructure.push(item)
    } else {
      if (!stack[stack.length - 1].children) {
        stack[stack.length - 1].children = []
      }
      stack[stack.length - 1].children.push(item)
    }

    stack.push(item)
  })

  items.value = treeStructure
}

const initializeObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '0px 0px -95% 0px',
      threshold: 0
    }
  )

  if (props.contentRef) {
    const startLevel = props.startLevel || 2
    const maxLevel = props.maxLevel || 4
    const selector = Array.from({ length: maxLevel - startLevel + 1 }, (_, i) => `h${startLevel + i}`).join(', ')
    const headers = props.contentRef.querySelectorAll(selector)
    headers.forEach(header => {
      if (header.id) {
        observer?.observe(header)
      }
    })
  }
}

watch(() => props.contentRef, () => {
  if (props.contentRef) {
    generateTableOfContents()
    initializeObserver()
  }
}, { immediate: true })

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Custom scrollbar for TOC */
nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: #eaedf1;
  border-radius: 2px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

/* Active state styles */
.toc-active {
  color: #3b82f6 !important;
  font-weight: 500;
}
</style> 