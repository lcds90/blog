module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  globals: {
    postscribe: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  root: true,
  rules: {
    '@typescript-eslint/no-shadow': 'error',
    'max-len': ['error', {
      code: 200,
      ignoreComments: true,
      ignorePattern: '"*": "*"',
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'vue/attributes-order': ['error', {
      alphabetical: true,
      order: [
        ['UNIQUE', 'SLOT'],
        'LIST_RENDERING',
        'TWO_WAY_BINDING',
        'CONDITIONALS',
        'DEFINITION',
        'OTHER_ATTR',
        'OTHER_DIRECTIVES',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'EVENTS',
        'CONTENT',
      ],
    }],
    'vue/multi-word-component-names': 'off',
    'vue/sort-keys': ['error', 'asc', {
      caseSensitive: true,
      ignoreChildrenOf: ['model'],
      ignoreGrandchildrenOf: ['computed', 'directives', 'inject', 'props', 'watch'],
      minKeys: 2,
      natural: false,
    }],
  },
};
