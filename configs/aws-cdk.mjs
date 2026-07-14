import { defineConfig } from 'eslint/config';
import common from './common.mjs';

export default defineConfig(
  ...common,
  {
    ignores: ['**/cdk.out/**/*', '**/cdk-integ.*/**/*', '**/*.snapshot.+(js|ts)/**/*'],
  },
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
