// ESLint Configuration
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      // Configuração para arquivos JavaScript
      files: ["**/*.{js,mjs,cjs}"],
      extends: ["airbnb-base"],
      languageOptions: {
        sourceType: "module",
        globals: globals.browser,
      },
    },
    {
      // Configuração para arquivos TypeScript
      files: ["**/*.ts"],
      languageOptions: {
        parser: tsParser,
        sourceType: "module",
        globals: globals.browser,
      },
      extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        // Exemplo: Customizações para evitar conflitos
        "import/extensions": [
          "error",
          "ignorePackages",
          { js: "never", ts: "never" },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
      },
    },
  ],
};
