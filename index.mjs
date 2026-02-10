import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  prettier,
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/no-absolute-path': 'error',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-relative-packages': 'error',
      'import/no-useless-path-segments': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          pathGroups: [
            {
              pattern: '@internal/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '**/*.css',
              group: 'object',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
          named: {
            enabled: true,
            types: 'types-last',
          },
          'newlines-between': 'never',
          warnOnUnassignedImports: true,
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'no-restricted-globals': ['error', 'closed', 'status'],
      'no-irregular-whitespace': ['error', { skipStrings: true, skipComments: true }],
      'semi': ['error', 'always'],
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      '@typescript-eslint/consistent-type-imports': ['error'],
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.mts', '*.tsx'],
    languageOptions: {
      globals: globals.node,
      parserOptions: { projectService: true },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': ['error'],
      '@typescript-eslint/return-await': ['error', 'always'],
    },
  },
);
