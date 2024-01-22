#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
//import { GefyraCdkDemoStack } from '../lib/gefyra-cdk-demo-stack';
const s3_bucket_stack_1 = require("../lib/s3-bucket-stack");
const basic_lambda_stack_1 = require("../lib/basic-lambda-stack");
const app = new cdk.App();
//new GefyraCdkDemoStack(app, 'GefyraCdkDemoStack');
// Deploying basic Lambda function
const basic_lambda_stack = new basic_lambda_stack_1.basicLambdaStack(app, 'basicLambdaStack');
// Creating an S3 bucket stack
const s3_bucket_stack = new s3_bucket_stack_1.S3BucketStack(app, 'gefyraS3Stack', {
    lambdaFunction: basic_lambda_stack.lambdaFunction
});
// Re-using assets
const bucket = s3_bucket_stack.bucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VmeXJhLWNkay1kZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VmeXJhLWNkay1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsb0VBQW9FO0FBQ3BFLDREQUF1RDtBQUN2RCxrRUFBNkQ7QUFFN0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsb0RBQW9EO0FBRXBELGtDQUFrQztBQUNsQyxNQUFNLGtCQUFrQixHQUFHLElBQUkscUNBQWdCLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFekUsOEJBQThCO0FBQzlCLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWEsQ0FBQyxHQUFHLEVBQUUsZUFBZSxFQUFFO0lBQzlELGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxjQUFjO0NBQ2xELENBQUMsQ0FBQztBQUVILGtCQUFrQjtBQUNsQixNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbi8vaW1wb3J0IHsgR2VmeXJhQ2RrRGVtb1N0YWNrIH0gZnJvbSAnLi4vbGliL2dlZnlyYS1jZGstZGVtby1zdGFjayc7XG5pbXBvcnQgeyBTM0J1Y2tldFN0YWNrIH0gZnJvbSAnLi4vbGliL3MzLWJ1Y2tldC1zdGFjayc7XG5pbXBvcnQgeyBiYXNpY0xhbWJkYVN0YWNrIH0gZnJvbSAnLi4vbGliL2Jhc2ljLWxhbWJkYS1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4vL25ldyBHZWZ5cmFDZGtEZW1vU3RhY2soYXBwLCAnR2VmeXJhQ2RrRGVtb1N0YWNrJyk7XG5cbi8vIERlcGxveWluZyBiYXNpYyBMYW1iZGEgZnVuY3Rpb25cbmNvbnN0IGJhc2ljX2xhbWJkYV9zdGFjayA9IG5ldyBiYXNpY0xhbWJkYVN0YWNrKGFwcCwgJ2Jhc2ljTGFtYmRhU3RhY2snKTtcblxuLy8gQ3JlYXRpbmcgYW4gUzMgYnVja2V0IHN0YWNrXG5jb25zdCBzM19idWNrZXRfc3RhY2sgPSBuZXcgUzNCdWNrZXRTdGFjayhhcHAsICdnZWZ5cmFTM1N0YWNrJywge1xuICBsYW1iZGFGdW5jdGlvbjogYmFzaWNfbGFtYmRhX3N0YWNrLmxhbWJkYUZ1bmN0aW9uXG59KTtcblxuLy8gUmUtdXNpbmcgYXNzZXRzXG5jb25zdCBidWNrZXQgPSBzM19idWNrZXRfc3RhY2suYnVja2V0O1xuIl19