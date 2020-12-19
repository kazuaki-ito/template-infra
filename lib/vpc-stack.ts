import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'
import {SubnetType} from '@aws-cdk/aws-ec2'

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const service = process.env.SERVICE
    const env = process.env.ENV
    const vpcCidr = process.env.VPC_CIDR

    new ec2.Vpc(this, 'Vpc', {
      cidr: vpcCidr,
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [{
        name: `${env}-${service}-pub`,
        subnetType: SubnetType.PUBLIC,
        cidrMask: 24
      }, {
        name: `${env}-${service}-pri`,
        subnetType: SubnetType.PRIVATE,
        cidrMask: 24
      }]
    })
  }
}
