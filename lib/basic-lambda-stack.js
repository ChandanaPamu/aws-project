"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicLambdaStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
class basicLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const function_name = 'gefyra-basic-lambda';
        const lambda_path = 'src/lambda/basic_lambda';
        // Initialization of the lambda function
        this.lambdaFunction = new lambda.Function(this, function_name, {
            functionName: function_name,
            runtime: lambda.Runtime.PYTHON_3_8,
            code: lambda.Code.fromAsset(lambda_path),
            handler: "lambda_function.lambda_handler"
        });
    }
}
exports.basicLambdaStack = basicLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtbGFtYmRhLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzaWMtbGFtYmRhLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyxpREFBaUQ7QUFHakQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUk3QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sYUFBYSxHQUFHLHFCQUFxQixDQUFDO1FBQzVDLE1BQU0sV0FBVyxHQUFHLHlCQUF5QixDQUFDO1FBRTlDLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNELFlBQVksRUFBRSxhQUFhO1lBQzNCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxPQUFPLEVBQUUsZ0NBQWdDO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWxCRCw0Q0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBiYXNpY0xhbWJkYVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNre1xuICAvLyBNYWtpbmcgdGhlIG9iamVjdCBhY2Nlc3NpYmxlIGZvciByZXVzZWFiaWxpdHlcbiAgcHVibGljIHJlYWRvbmx5IGxhbWJkYUZ1bmN0aW9uOiBsYW1iZGEuRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgZnVuY3Rpb25fbmFtZSA9ICdnZWZ5cmEtYmFzaWMtbGFtYmRhJztcbiAgICBjb25zdCBsYW1iZGFfcGF0aCA9ICdzcmMvbGFtYmRhL2Jhc2ljX2xhbWJkYSc7XG5cbiAgICAvLyBJbml0aWFsaXphdGlvbiBvZiB0aGUgbGFtYmRhIGZ1bmN0aW9uXG4gICAgdGhpcy5sYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgZnVuY3Rpb25fbmFtZSwge1xuICAgICAgICBmdW5jdGlvbk5hbWU6IGZ1bmN0aW9uX25hbWUsXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLlBZVEhPTl8zXzgsXG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChsYW1iZGFfcGF0aCksXG4gICAgICAgIGhhbmRsZXI6IFwibGFtYmRhX2Z1bmN0aW9uLmxhbWJkYV9oYW5kbGVyXCJcbiAgICB9KTtcbiAgfVxufSJdfQ==