"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertions_1 = require("aws-cdk-lib/assertions");
const cdk = require("aws-cdk-lib");
const GefyraCdkDemo = require("../lib/gefyra-cdk-demo-stack");
test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new GefyraCdkDemo.GefyraCdkDemoStack(app, 'MyTestStack');
    // THEN
    const template = assertions_1.Template.fromStack(stack);
    // Testing AWS individual resources within the stack
    //   template.hasResourceProperties('AWS::SQS::Queue', {
    //     VisibilityTimeout: 300
    //   });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VmeXJhLWNkay1kZW1vLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZWZ5cmEtY2RrLWRlbW8udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFrRDtBQUNsRCxtQ0FBbUM7QUFDbkMsOERBQThEO0FBRTlELElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDdkUsT0FBTztJQUNQLE1BQU0sUUFBUSxHQUFHLHFCQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLG9EQUFvRDtJQUN4RCx3REFBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLFFBQVE7QUFFUixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnYXdzLWNkay1saWIvYXNzZXJ0aW9ucyc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgR2VmeXJhQ2RrRGVtbyBmcm9tICcuLi9saWIvZ2VmeXJhLWNkay1kZW1vLXN0YWNrJztcblxudGVzdCgnRW1wdHkgU3RhY2snLCAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbiAgICAvLyBXSEVOXG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgR2VmeXJhQ2RrRGVtby5HZWZ5cmFDZGtEZW1vU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcbiAgICAvLyBUSEVOXG4gICAgY29uc3QgdGVtcGxhdGUgPSBUZW1wbGF0ZS5mcm9tU3RhY2soc3RhY2spO1xuXG4gICAgLy8gVGVzdGluZyBBV1MgaW5kaXZpZHVhbCByZXNvdXJjZXMgd2l0aGluIHRoZSBzdGFja1xuLy8gICB0ZW1wbGF0ZS5oYXNSZXNvdXJjZVByb3BlcnRpZXMoJ0FXUzo6U1FTOjpRdWV1ZScsIHtcbi8vICAgICBWaXNpYmlsaXR5VGltZW91dDogMzAwXG4vLyAgIH0pO1xuXG59KTtcbiJdfQ==