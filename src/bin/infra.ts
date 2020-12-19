#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {VpcStack} from '../lib/vpc-stack';
import * as dotenv from 'dotenv'

dotenv.config()
const app = new cdk.App();

const vpcStack = new VpcStack(app, 'VpcStack');

cdk.Tags.of(vpcStack).add('SERVICE', process.env.SERVICE!)
cdk.Tags.of(vpcStack).add('ENV', process.env.ENV!)
