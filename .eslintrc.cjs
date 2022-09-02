module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:import/typescript",
    "prettier",
  ],
  ignorePatterns: ["node_modules/*", ".eslintrc.cjs", "vitest.setup.ts", ".storybook/*", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".ts", ".tsx"] }],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "object", "type", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/pages/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "./**.module.css",
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
    "react-hooks/exhaustive-deps": ["error"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./src",
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.stories.@(ts|tsx|js)"],
      extends: ["plugin:storybook/recommended"],
      rules: {
        "storybook/hierarchy-separator": "error",
        "storybook/default-exports": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
