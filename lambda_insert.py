import json
import boto3
import boto3.dynamodb.conditions

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('UserInfo')

def lambda_handler(event, context):
    body = json.loads(event["body"])
    try:
        table.put_item(
            Item={
                'email' : body['email'],
                'name' : body['name'],
                'age' : body['age'],
                'birthday' : body['birthday'],
                'job_title' : body['job_title'],
                'employer' : body['employer'],
                'city' : body['city'],
                'phone_number' : body['phone_number']
            },
        ConditionExpression='attribute_not_exists(email)'
        )
    
    except:
        table.update_item(
            Key={
                'email' : body['email']
            },
            UpdateExpression='''SET name = :new_name, SET email = :new_email, SET age = :new_age, SET birthday = :new_birthday, 
            SET job_title = :new_job_title, SET employer = :new_employer, SET city = :new_city, SET phone_number = :new_phone_number''',
            ExpressionAttributeValues={
                ':new_email' : body['email'],
                ':new_name' : body['name'],
                ':new_age' : body['age'],
                ':new_birthday' : body['birthday'],
                ':new_job_title' : body['job_title'],
                ':new_employer' : body['employer'],
                ':new_city' : body['city'],
                ':new_phone_number' : body['phone_number']
            }
        )
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }




