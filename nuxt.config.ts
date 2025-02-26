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
    // 缓存1小时(调试或者开发时去掉缓存)
    // "/api/*": { cache: { maxAge: 60 * 60 } },
    // 重定向以避免404
    "/old-page": {
      redirect: { to: "/new-page", statusCode: 302 },
    },
  },
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        port: 6379,
        host: "127.0.0.1",
        username: "", // 需要Redis >= 6
        password: "",
        db: 0, // 默认为0
        // tls: {}, // tls/ssl
      },
    },
  },
});
