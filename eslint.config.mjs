import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ["node_modules/*", "dist/*"],
    rules: {
      "no-restricted-globals": ["warn", "numeral", "length", "Permissions", "Notification"],
      "no-console": "warn",
      "react/self-closing-comp": "warn",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "lines-between-class-members": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "padding-line-between-statements": [
        "warn",
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "always", "prev": "*", "next": ["const", "let", "var"] },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
        { "blankLine": "always", "prev": "directive", "next": "*" },
        { "blankLine": "any", "prev": "directive", "next": "directive" },
        {
          "blankLine": "always",
          "prev": ["block", "block-like", "class", "function"],
          "next": "*"
        },
        {
          "blankLine": "always",
          "prev": "*",
          "next": ["block", "block-like", "class", "function"]
        }
      ],
      "no-else-return": ["warn", { "allowElseIf": false }],
      "no-useless-return": "warn",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-param-reassign": ["warn", { "props": true, "ignorePropertyModificationsForRegex": ["^draft"] }]
    }
  },
  {
    files: ['src/redux/slices/*.ts'],
    rules: { 'no-param-reassign': ['error', { props: false }] },
  },
];