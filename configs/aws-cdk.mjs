import { defineConfig } from 'eslint/config';
import common from './common.mjs';

export default defineConfig(
  ...common,
  {
    ignores: ['**/cdk.out/**/*'],
  },
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
