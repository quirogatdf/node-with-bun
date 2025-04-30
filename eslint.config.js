import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import unusedImport from "eslint-plugin-unused-imports";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbBaseTypescript from "eslint-config-airbnb-base-typescript";
/** @type {import ('eslint').Linter.Config[]}*/
export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    // plugins: { js },
    // extends: ["js/recommended"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImport,
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbBaseTypescript.rules,
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".tr", ".tsx"],
        },
      },
    },
  },
]);

