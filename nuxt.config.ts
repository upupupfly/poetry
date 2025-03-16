// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性基准日期
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts"],
  alias: {
  },
  // components: [
  //   {
  //     path: "~/components/",
  //     pathPrefix: false
  //   }
  // ]
  components: [
    {
      path: "~/components/iconfont",
      pathPrefix: false
    }
  ],
  app: {
    head: {
      script: [
        {
          src: "/javascript/iconfont.js",
        }
      ]
    }
  },
  css: [
    "normalize.css/normalize.css",
    "~/assets/stylesheets/common.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/stylesheets/variable.scss' as *;"
        }
      }
    }
  },
})