<!-- TocTree.vue -->
<template>
  <div class="toc-item">
    <a 
      :href="'#' + item.id"
      :class="[
        'block text-sm py-1 transition-colors',
        'pl-' + ((item.level - 1) * 4),
        item.level === 1 ? 'font-medium' : '',
        activeSection === item.id 
          ? 'text-[#3f7fbf] font-medium' 
          : 'text-[#000000ad] hover:text-[#3f7fbf]'
      ]"
    >
      {{ item.text }}
    </a>
    <div v-if="item.children.length > 0" class="ml-4">
      <TocTree 
        v-for="child in item.children" 
        :key="child.id" 
        :item="child" 
        :activeSection="activeSection"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface TocItem {
  id: string;
  text: string;
  level: number;
  children: TocItem[];
}

defineProps<{
  item: TocItem;
  activeSection: string;
}>();
</script>

<style scoped>
.toc-item {
  margin-bottom: 0.5rem;
}
</style> 