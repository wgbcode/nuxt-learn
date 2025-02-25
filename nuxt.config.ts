// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: {
    server: true,
    client: true,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  routeRules: {
    // 为了SEO目的，在构建时生成
    "/": { prerender: true },
    // 缓存1小时
    "/api/*": { cache: { maxAge: 60 * 60 } },
    // 重定向以避免404
    "/old-page": {
      redirect: { to: "/new-page", statusCode: 302 },
    },
  },
});
