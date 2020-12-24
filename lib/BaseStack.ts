import * as cdk from '@aws-cdk/core'

export default abstract class BaseStack extends cdk.Stack {
  protected constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    cdk.Tags.of(this).add('SERVICE', process.env.SERVICE!)
    cdk.Tags.of(this).add('ENV', process.env.ENV!)

  }

  protected get prefix(): string {
    const service = process.env.SERVICE
    const env = process.env.ENV
    return `${env}-${service}`
  }

}
