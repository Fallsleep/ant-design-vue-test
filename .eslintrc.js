module.exports = {
  root: true,
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    node: true
  },
  // 使用 vue-eslint-parser 作为基础的 eslint parser，主要解析<template>
  // 对于<script>的解析，通过parserOptions.parser指定
  parser: 'vue-eslint-parser',
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    }
  },
  // 全局变量
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },
  overrides: [
    {
      files: [
        '**/*.html',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'generator-star-spacing': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 5,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'semi': [
      'error',
      'never',
      {
        'beforeStatementContinuationChars': 'never'
      }
    ],
    'no-delete-var': 'error',
    'prefer-const': [
      'error',
      {
        'ignoreReadBeforeAssign': false
      }
    ],
    'template-curly-spacing': 'off',
    'indent': 0,
    '@typescript-eslint/indent': ['error', 2],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    // 禁用尾随逗号
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'no-multi-spaces': ['error', {
      'ignoreEOLComments': true
    }],
    'space-before-blocks': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'space-infix-ops': 'error',
    'no-trailing-spaces': 'error',
    'arrow-spacing': 'error'
  }
}
