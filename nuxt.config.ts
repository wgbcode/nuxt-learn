// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
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
    /**
      SSG: 预渲染会提前请求 API，并生成对应的 html 文件和 js、css 文件
      1、情形一：直接请求该页面，会直接从缓存中拿到 html 文件并返回
      2、情形二：先请求另一个页面，再导航到该页面，会根据生成的静态 js、css 文件动态更新 DOM
      3、优点：相对于 SSR，由于文件是直接从缓存中读取，不用请求 API 和构建 html 文件，所以响应速度会更快，服务端的压力也会更小
      4、注意事项：当静态页面的数据有更新时，需要重新部署，不适合频繁更新的数据
      （1）方式一：客户端每次加载文件时，都先通过 tag 去校验文件是否有更新，如果有更新，则会重新请求文件，没有更新，则会直接从缓存中读取；静态文件的文件名需保持一致，不能使用 hash 值
      （2）方式二：每次生成新的静态文件时，通过用户主动刷新页面，拿到新的 index.html 或者静态页面 html
    */
    prerender: {
      crawlLinks: true, // 是否需要爬取页面内的链接并添加到预渲染队列
      routes: ["/page1", "/page2"],
      ignore: ["/page3"],
    },
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
