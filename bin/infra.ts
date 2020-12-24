#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import * as dotenv from 'dotenv'
import VpcStack from '../lib/vpc-stack/'
import BastionStack from "../lib/bastion-stack";

dotenv.config()
const app = new cdk.App()


const vpcStack = new VpcStack(app, 'VpcStack')
new BastionStack(app, 'BastionStack', {
  vpc: vpcStack.vpc
})
