import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
export declare class basicLambdaStack extends cdk.Stack {
    readonly lambdaFunction: lambda.Function;
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
