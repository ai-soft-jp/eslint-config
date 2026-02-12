import aws_cdk from './configs/aws-cdk.mjs';
import cloudfront_function from './configs/cloudfront-function.mjs';
import common from './configs/common.mjs';

export const configs = {
  common,
  aws_cdk,
  cloudfront_function,
};
export default common;
