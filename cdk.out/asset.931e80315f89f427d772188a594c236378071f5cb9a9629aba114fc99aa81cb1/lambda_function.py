"""
File: basic_lambda.lambda_function.py
Description: Performs an ETL process whenever a file is dropped into an S3 bucket
"""
import logging

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

def lambda_handler(event, context):
    """
    Point of entry for Lambda
    """
    # Outputs the incoming event into CW logs
    logger.info("Event:")
    logger.info(event)

    return {
        "statusCode":200
    }

# For direct invocation and testing on the local machine
if __name__ == '__main__':
    print(lambda_handler(None,None))
