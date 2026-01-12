<template>
  <header class="flex justify-center whitespace-nowrap">
    <div class="flex w-full max-w-[1200px] items-center justify-between py-5">
      <div class="flex items-center gap-4 text-[#101418]">
        <a href="/">
          <img src="/src/assets/images/logo.png" alt="Memoria IO Logo" class="h-6 w-auto">
        </a>
      </div>
      <div class="flex flex-1 justify-end gap-8">
        <nav class="flex items-center gap-14">
          <router-link 
            to="/" 
            class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors"
            :class="{ 'after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-blue-500': $route.path === '/' }"
          >Home</router-link>

          <router-link
            to="/blog" 
            class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors"
            :class="{ 'after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-blue-500': $route.path === '/blog' }"
          >Blog</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>
