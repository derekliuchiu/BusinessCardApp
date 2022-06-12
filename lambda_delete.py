import json
import boto3
import boto3.dynamodb.conditions

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('UserInfo')

def lambda_handler(event, context):
    






    return {
        'statusCode': 200,
        'body': json.dumps('delete')
    }