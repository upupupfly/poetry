// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性基准日期
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts"],
  components: [
    {
      path: "~/components/iconfont",
      pathPrefix: false,
    },
  ],
  alias: {},
  eslint: {
    checker: {
      lintOnStart: true,
      include: ["**/*.{js,jsx,ts,tsx,vue}"],
    },
    config: {
      // https://eslint.style/guide/config-presets#configuration-factory
      stylistic: {
        arrowParens: true,
        quotes: "double",
        semi: true,
      },
      nuxt: {
        sortConfigKeys: false,
      },
      formatters: true,
    },
  },
  // 构建时启动类型检查
  // typescript: {
  //   tsConfig: {
  //   },
  //   typeCheck: true
  // },
  app: {
    head: {
      script: [
        {
          src: "/javascript/iconfont.js",
        },
      ],
    },
  },
  css: ["normalize.css/normalize.css", "~/assets/stylesheets/common.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/stylesheets/variable.scss' as *;",
        },
      },
    },
  },
});
