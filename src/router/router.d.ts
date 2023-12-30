import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    bannerUrl?: string
    title?: string
  }
}