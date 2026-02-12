import type * as eslint from 'eslint/config';

export const configs: {
  readonly common: eslint.Config[];
  readonly aws_cdk: eslint.Config[];
  readonly cloudfront_function: (...files: string[]) => eslint.Config[];
};

declare const config: eslint.Config[];
export default config;
