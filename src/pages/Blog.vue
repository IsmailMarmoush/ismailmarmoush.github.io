<template>
  <div class="blog-container">
    <div class="layout-content-container">
      <div class="blog-layout">
        <!-- Left Sidebar: Table of Contents (fixed on large screens) -->
        <aside class="sidebar-left">
          <div class="toc-wrapper">
            <!-- Table of Contents -->
            <TableOfContents
                :content-ref="contentDiv"
                title="Table of Contents"
                :start-level="2"
                :max-level="4"
            />
          </div>
        </aside>

        <!-- Main Content (wider) -->
        <div class="main-content">
          <div v-if="error" class="error-message">{{ error }}</div>
          <div v-else class="prose-container">
            <!-- Blog Post Header -->
            <div v-if="currentArticle" class="article-header">
              <h1 class="article-title">{{ currentArticle.title }}</h1>
              <div class="article-meta">
                <svg class="calendar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <time :datetime="currentArticle.lastUpdated">
                  {{ formatDate(currentArticle.lastUpdated) }}
                </time>
              </div>
            </div>
            <div v-if="content" v-html="content" ref="contentDiv" class="prose"/>
            <Giscus
                :key="$route.fullPath"
                loading="lazy"
                repo="ismailmarmoush/ismailmarmoush.github.io"
                repo-id="MDEwOlJlcG9zaXRvcnkyOTM5NTA0Mw=="
                category="General"
                category-id="DIC_kwDOAcCIY84C03jq"
                mapping="og:title"
                strict="0"
                reactions-enabled="1"
                emit-metadata="0"
                input-position="bottom"
                theme="light"
                lang="en"
                crossorigin="anonymous"
            />
          </div>
        </div>

        <!-- Right Sidebar with Blog List (sticky on large screens; hidden on small) -->
        <aside class="sidebar-right">
          <div class="blog-list-wrapper">
            <!-- Blog List -->
            <div class="blog-list-content">
              <h3 class="blog-list-title">Blog Posts</h3>
              <div v-if="groupedBlogPosts" class="year-groups">
                <div v-for="yearGroup in groupedBlogPosts" :key="yearGroup.year" class="year-group">
                  <h4 class="year-title">{{ yearGroup.year }}</h4>
                  <ul class="post-list">
                    <li v-for="entry in yearGroup.posts" :key="entry.filePath">
                      <a
                          href="#"
                          @click.prevent="loadBlogPost(entry)"
                          :class="[
                          'post-link',
                          currentArticle?.filePath === entry.filePath ? 'active' : ''
                        ]"
                      >
                        {{ entry.title }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick, watch, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {parseMarkdown, highlightCode} from '../services/markdown'
import {config as fetchAppConfig, type BlogPostMeta, AppConfig} from '../services/config'
import {loadDocument} from '../services/resources'
import TableOfContents from '../components/TableOfContents.vue'
import Giscus from '@giscus/vue'

// State
const route = useRoute()
const router = useRouter()
const appConfig = ref<AppConfig | null>(null)
const blogPosts = ref<BlogPostMeta[] | null>(null)
const currentArticle = ref<BlogPostMeta | null>(null)
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

const groupedBlogPosts = computed(() => {
  if (!blogPosts.value) return null

  // Group posts by year
  const grouped = blogPosts.value.reduce((acc, post) => {
    const year = new Date(post.lastUpdated).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<string, typeof blogPosts.value>)

  // Sort posts within each year by date (newest first)
  Object.keys(grouped).forEach(year => {
    grouped[year].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
  })

  // Get years and sort them in descending order, then create array of year groups
  const years = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a))

  return years.map(year => ({
    year,
    posts: grouped[year]
  }))
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const loadBlogPost = async (blogPostMeta: BlogPostMeta) => {
  isLoading.value = true
  error.value = null

  try {
    const markdown = await loadDocument(blogPostMeta.filePath)
    content.value = await parseMarkdown(markdown)
    currentArticle.value = blogPostMeta || null

    // Update URL to use route parameter
    const postId = blogPostMeta.filePath.replace('blog/', '').replace('.md', '')
    await router.push(`/blog/${postId}`)

    // Reset scroll position and wait for content to be rendered
    window.scrollTo(0, 0)
    await nextTick()

    // Force TOC to reinitialize by temporarily removing the ref
    const tempDiv = contentDiv.value
    contentDiv.value = null
    await nextTick()
    contentDiv.value = tempDiv

    // Initialize syntax highlighting
    if (contentDiv.value) {
      highlightCode(contentDiv.value)
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load blog post'
    content.value = ''
  } finally {
    isLoading.value = false
  }
}

const loadBlogPostById = async (postId: string) => {
  if (!blogPosts.value) return

  const post = blogPosts.value.find(p => {
    const id = p.filePath.replace('blog/', '').replace('.md', '')
    return id === postId
  })

  if (post) {
    await loadBlogPost(post)
  }
}

// Initialize
onMounted(async () => {
  try {
    appConfig.value = await fetchAppConfig()
    blogPosts.value = appConfig.value.blogPosts

    // Check for post ID in route parameter
    const postId = route.params.postId as string
    if (postId && blogPosts.value.length > 0) {
      await loadBlogPostById(postId)
    } else if (blogPosts.value.length > 0) {
      // Load most recent blog post by default (last entry)
      await loadBlogPost(blogPosts.value[blogPosts.value.length - 1])
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load blog list'
  }
})

// Watch for route parameter changes
watch(() => route.params.postId, async (newPostId) => {
  if (newPostId && blogPosts.value) {
    await loadBlogPostById(newPostId as string)
  }
})

watch(currentArticle, (newArticle) => {
  // Update document title
  if (newArticle && newArticle.title) {
    document.title = `${newArticle.title} – Ismail Marmoush`;
  } else {
    document.title = 'Ismail Marmoush';
  }

  // Update og:title meta tag
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', newArticle && newArticle.title ? newArticle.title : 'Ismail Marmoush');
}, {immediate: true})
</script>

<style scoped>
.blog-container {
  padding: 2.5rem 2.5rem;
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
}

.layout-content-container {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  flex: 1 1 0%;
}

.blog-layout {
  position: relative;
  display: flex;
  gap: 1.5rem;
}

.sidebar-left {
  display: none;
}

@media (min-width: 1024px) {
  .sidebar-left {
    display: block;
    width: 16rem;
    position: absolute;
    left: 0;
  }

  .toc-wrapper {
    position: fixed;
    width: 14rem;
    padding-top: 1.25rem;
  }
}

.main-content {
  flex: 1 1 0%;
  min-width: 0;
  width: 100%;
}

@media (min-width: 1024px) {
  .main-content {
    margin-left: 16rem;
    margin-right: 1.5rem;
  }
}

.error-message {
  color: #ef4444;
}

.prose-container {
  max-width: none;
  width: 100%;
}

.article-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.article-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #101418;
  margin-bottom: 0.75rem;
}

.article-meta {
  display: flex;
  align-items: center;
  color: #5c738a;
  font-size: 0.875rem;
}

.calendar-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.prose {
  max-width: none;
}

/* Add scroll margin to headers */
:deep(h2), :deep(h3), :deep(h4) {
  scroll-margin-top: 100px;
}

/* Make blog images have rounded corners and stay within container */
.prose :deep(img) {
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
}

.sidebar-right {
  display: none;
}

@media (min-width: 1024px) {
  .sidebar-right {
    display: block;
    width: 16rem;
  }

  .blog-list-wrapper {
    position: sticky;
    top: 8rem;
  }
}

.blog-list-content {
  margin-bottom: 1.5rem;
}

.blog-list-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #5c738a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.year-groups {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.year-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.year-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: #3f7fbf;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-left: 0.5rem;
  list-style: none;
  padding: 0;
}

.post-link {
  display: block;
  font-size: 0.875rem;
  padding: 0.25rem 0;
  color: #101418;
  text-decoration: none;
  transition: color 0.2s;
}

.post-link:hover {
  color: #3f7fbf;
}

.post-link.active {
  color: #3f7fbf;
  font-weight: 500;
}
</style>
