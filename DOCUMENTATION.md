//API Endpoint for creating a new User
    1:Standard Format: https://example.com/api
        POST request= https://example.com/api
    2:Response:{
                   "name":"YourName",
                   "id":1
                }
      Response:"User Created Successfully"

  //API Endpoint for retrieving all Users
       1:Standard Format:https://example.com/api
           GET request =https://example.com/api
        2:Response:[
                      {
                         "name":"Yourname",
                         "id":id
                      }
                  ]
    //API Endpoint for retrieving a specific User(pass his/her id as a parameter)
    
        1:Standard Format:https://example.com/api
            GET request = https://example.com/api/id
        2:Response:{
                       "name":"Yourname",
                        "id":id
                    }

    //API Endpoint for Deleting a User(Pass Id as a parameter)
          1:Standard Format:https://exapmle.com/api/id
               DELETE Request:https=//example.com/api/id
           2:Response:"User deleted Successfully"
                        
  //API Endpoint for Updating a User(Pass Id as a parameter)
      1:Standard Format:https://example.com/api/id
          PUT Request = https://example.com/api/id
      2:Response :"User updated Successfully"

  //Hosting And Deploying API
          1:SERVER
              We will user Render Platform
              Head over to render.com and create account and also configure it with your github 
              connect render  with your repository and create a web Service
              configure something  like name of the hosted project,root directory,build command
              After that,leave everything to render
          2:Locally
                open you terminal
                run :npm start
                
  Source Code Link: https://github.com/Gicherujoh/Zuri-Crud-Operations.git
              
               
                
                      
