import eslint from "@eslint/js";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        defineNuxtConfig: "readonly",
      },
    },
    files: ["**/*.vue", "**/*.ts"],
    rules: {
      "vue/multi-word-component-names": "off",
      "no-extra-parens": "off",
      "@stylistic/semi": ["error", "always", { omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false }],
    },
  },
);
