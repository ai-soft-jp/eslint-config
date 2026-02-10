import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default defineConfig(js.configs.recommended, importPlugin.flatConfigs.recommended, prettier, {
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  languageOptions: {
    globals: globals.node,
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'always'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'never',
      },
    ],
  },
});
