import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'
import BaseStack from "../BaseStack";

export interface BastionStackProps extends cdk.StackProps {
  vpc: ec2.IVpc
}

export default class BastionStack extends BaseStack {
  constructor(scope: cdk.Construct, id: string, props: BastionStackProps) {
    super(scope, id, props);

    const sgBastion = this._createSecurityGroup(props.vpc)

    new ec2.BastionHostLinux(this, 'bastion', {
      vpc: props.vpc,
      instanceName: `${this.prefix}-bastion`,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO
      ),
      machineImage: new ec2.AmazonLinuxImage({
        edition: ec2.AmazonLinuxEdition.STANDARD,
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
      }),
      subnetSelection: {
        subnetType: ec2.SubnetType.PUBLIC
      },
      securityGroup: sgBastion
    })
  }

  private _createSecurityGroup(vpc: ec2.IVpc) {
    // 必要に応じてここでSGを設定
    return new ec2.SecurityGroup(
      this,
      'sg-bastion', {
        vpc: vpc,
        securityGroupName: `${this.prefix}-bastion`
      }
    )
  }
}
