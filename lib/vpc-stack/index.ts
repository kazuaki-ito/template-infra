import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'
import {SubnetType} from '@aws-cdk/aws-ec2'
import BaseStack from "../BaseStack";

export default class Index extends BaseStack {
  public readonly vpc: ec2.IVpc;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpcCidr = process.env.VPC_CIDR

    this.vpc = new ec2.Vpc(this, 'vpc', {
      cidr: vpcCidr,
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [{
        name: `${this.prefix}-pub`,
        subnetType: SubnetType.PUBLIC,
        cidrMask: 24
      }, {
        name: `${this.prefix}-pri`,
        subnetType: SubnetType.PRIVATE,
        cidrMask: 24
      }]
    })
  }

}
