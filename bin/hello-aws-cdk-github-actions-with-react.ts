#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloAwsCdkGithubActionsWithReactStack } from '../lib/hello-aws-cdk-github-actions-with-react-stack';

const app = new cdk.App();
new HelloAwsCdkGithubActionsWithReactStack(app, 'HelloAwsCdkGithubActionsWithReactStack', {});
