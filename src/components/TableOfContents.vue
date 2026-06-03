<template>
  <nav class="toc-nav">
    <div v-if="items.length > 0">
      <h3 class="toc-title">{{ title }}</h3>
      <div class="toc-items">
        <template v-for="item in items" :key="item.id">
          <div class="toc-item-group">
            <!-- Main header with expansion -->
            <div class="toc-header-wrapper">
              <button
                  v-if="item.children?.length"
                  @click.stop="toggleSection(item.id)"
                  class="toggle-btn"
              >
                <span class="toggle-icon" :class="{ 'rotated': expandedSections.has(item.id) }">
                  ›
                </span>
              </button>
              <span v-else class="toggle-spacer"></span>
              <a
                  :href="'#' + item.id"
                  @click.prevent="() => { scrollToSection(item.id); if (item.children?.length) toggleSection(item.id); }"
                  class="toc-link"
                  :class="{ 'toc-active': activeSection === item.id }"
              >
                {{ item.text }}
              </a>
            </div>

            <!-- Sub-headers -->
            <div v-if="item.children?.length && expandedSections.has(item.id)" class="toc-sub-items">
              <template v-for="child in item.children" :key="child.id">
                <div class="toc-header-wrapper">
                  <button
                      v-if="child.children?.length"
                      @click.stop="toggleSection(child.id)"
                      class="toggle-btn"
                  >
                    <span class="toggle-icon" :class="{ 'rotated': expandedSections.has(child.id) }">
                      ›
                    </span>
                  </button>
                  <span v-else class="toggle-spacer"></span>
                  <a
                      :href="'#' + child.id"
                      @click.prevent="() => { scrollToSection(child.id); if (child.children?.length) toggleSection(child.id); }"
                      class="toc-link"
                      :class="{ 'toc-active': activeSection === child.id }"
                  >
                    {{ child.text }}
                  </a>
                </div>

                <!-- Third level -->
                <div v-if="child.children?.length && expandedSections.has(child.id)" class="toc-grandchild-items">
                  <template v-for="grandchild in child.children" :key="grandchild.id">
                    <a
                        :href="'#' + grandchild.id"
                        @click.prevent="() => { scrollToSection(grandchild.id); if (grandchild.children?.length) toggleSection(grandchild.id); }"
                        class="toc-link grandchild-link"
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
import { ref, onUnmounted, watch } from 'vue'

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
.toc-nav {
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}

.toc-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #5c738a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.toc-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc-header-wrapper {
  display: flex;
  align-items: center;
}

.toggle-btn {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af; /* text-gray-400 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.toggle-btn:hover {
  color: #4b5563; /* text-gray-600 */
}

.toggle-icon {
  display: inline-block;
  transition: transform 0.2s;
}

.toggle-icon.rotated {
  transform: rotate(90deg);
}

.toggle-spacer {
  width: 1rem;
  margin-right: 0.5rem;
}

.toc-link {
  display: block;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  color: #4b5563; /* text-gray-600 */
  text-decoration: none;
  transition: color 0.2s;
}

.toc-link:hover {
  color: #3b82f6; /* text-blue-500 */
}

.toc-sub-items {
  margin-left: 1rem;
  margin-top: 0.25rem;
}

.toc-grandchild-items {
  margin-left: 2.5rem;
  margin-top: 0.25rem;
}

.grandchild-link {
  color: #6b7280; /* text-gray-500 */
}

/* Custom scrollbar for TOC */
.toc-nav::-webkit-scrollbar {
  width: 4px;
}

.toc-nav::-webkit-scrollbar-track {
  background: transparent;
}

.toc-nav::-webkit-scrollbar-thumb {
  background: #eaedf1;
  border-radius: 2px;
}

.toc-nav::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

/* Active state styles */
.toc-active {
  color: #3b82f6 !important;
  font-weight: 500;
}
</style>