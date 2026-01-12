import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcss from './postcss.config.js'

export default defineConfig({
    base: '/',
    plugins: [vue()],
    css: {
        postcss,
    },
})