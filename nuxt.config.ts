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
  components: false,
  css: [
    "normalize.css/normalize.css"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/stylesheets/global.scss' as *;"
        }
      }
    }
  },
})