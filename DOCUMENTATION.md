Table of Contents

API Endpoints
Create a New Person
Fetch Details of a Person
Modify Details of an Existing Person
Remove a Person
Request and Response Formats
Create a New Person
Fetch Details of a Person
Modify Details of an Existing Person
Remove a Person
Sample Responses
Dynamic Parameter Handling
Usage Examples
Known Limitations
Setting Up and Deploying the API
API Endpoints
Create a New Person
Endpoint: /api
Method: POST
Description: Create a new person with the provided name.
Create a New Person Request
Request Body:

json

{
  "name": "John Doe"
}
Sample Response
Response Body:

json

{
  "id": 1,
  "name": "John Doe"
}
Fetch Details of a Person
Endpoint: /api/:user_id
Method: GET
Description: Fetch details of a person by their user ID.
Fetch Details of a Person Request
URL Parameter:

user_id (integer): The ID of the person to fetch.
Sample Response
Response Body:

json
{
  "id": 1,
  "name": "John Doe"
}
Modify Details of an Existing Person
Endpoint: /api/:user_id
Method: PUT
Description: Modify details of an existing person by their user ID.
Modify Details of an Existing Person Request
URL Parameter:

user_id (integer): The ID of the person to update.
Request Body:

json

{
  "name": "Updated Name"
}
Sample Response
Response Body:

json

{
  "id": 1,
  "name": "Updated Name"
}
Remove a Person
Endpoint: /api/:user_id
Method: DELETE
Description: Remove a person by their user ID.
Remove a Person Request
URL Parameter:

user_id (integer): The ID of the person to delete.
Sample Response
Response Body:


{
  "message": "Person deleted"
}
Request and Response Formats
Create a New Person Request
Request Method: POST

Endpoint: /api

Request Body:

json

{
  "name": "John Doe"
}
Fetch Details of a Person Request
Request Method: GET

Endpoint: /api/:user_id

URL Parameter:

user_id (integer): The ID of the person to fetch.
Modify Details of an Existing Person Request
Request Method: PUT

Endpoint: /api/:user_id

URL Parameter:

user_id (integer): The ID of the person to update.
Request Body:

json

{
  "name": "Updated Name"
}
Remove a Person Request
Request Method: DELETE

Endpoint: /api/:user_id

URL Parameter:

user_id (integer): The ID of the person to delete.
Sample Responses
Sample responses for each endpoint are provided in the respective sections above.

Dynamic Parameter Handling
This API can handle dynamic input for CRUD operations. You can specify the name of the person using either the request body or as a query parameter, depending on the endpoint.

Usage Examples
Here are some usage examples:

To create a new person:
POST /api
Request Body: {"name": "Your name"}

To fetch details of a person:
GET /api/1

To modify details of an existing person:
PUT /api/1
Request Body: {"name": "Updated Name"}

To remove a person:
DELETE /api/1


Known Limitations
The API expects the name field to be a string; other data types are not allowed.
Error handling for invalid input or database errors may not be exhaustive in this documentation and should be implemented in the API code.
Setting Up and Deploying the API
For instructions on how to set up and deploy the API, please refer to the project's README.md file.

Please refer to the project's README.md for information on setting up, running, and deploying the AP
               
                
                      
