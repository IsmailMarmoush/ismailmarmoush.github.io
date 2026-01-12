/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Extend the ImportMeta interface
declare global {
  interface ImportMeta {
    readonly env: {
      readonly BASE_URL: string
      readonly MODE: 'development' | 'production'
      readonly DEV: boolean
      readonly PROD: boolean
      readonly SSR: boolean
      [key: string]: any
    }
  }
}