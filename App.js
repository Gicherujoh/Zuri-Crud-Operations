const express = require('express')
const mongoose= require('mongoose')
const app = express();
require('dotenv').config();


//setting up middlewares
app.use(express.json());

//connecting to MongoDB
mongoose.connect(process.env.Connection_String,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected Successfully')
    app.listen(3000,()=>console.log('Server running on port 3000'))
})
//importing the user MODEL
const User = require('./UserModel/userModel');
app.post('/api',async(req,res)=>{
   let name;
     if(req.body && req.body.name){
        name = req.body.name
     }else if(req.query && req.query.name){
        name = req.query.name
        
     }else{
         return res.json('Failed')
     }
    
    try{
        const highestUserIdUser = await User.findOne({}).sort({ id: -1 });

        // Determine the next userId value
        const nextUserId = highestUserIdUser ? highestUserIdUser.id + 1 : 1;
        const newUser = await User.create({
            name,
            id:nextUserId
        })
        if(newUser){
          const {name,id} = newUser
             return res.json({name,id})
        }else{
            res.json('Failed to create.')
        }
      

    }catch(e){
        res.json({
            message:e
        })
    }
})
//retrieving all the data from MongoDB
app.get('/api',async(req,res)=>{
    try{
       const Users = await User.find({},{ _id:0,id: 1, name: 1 });
       if(Users){
          res.json(Users)
       }else{
          res.json('No Users found.')
       }
         
    }catch(e){
        res.json({
            message:e
        })
    }
})
//retrieving specific data from MongoDB
app.get('/api/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const findUser = await User.findOne({id})
        if(findUser){
            const {name,id}= findUser;
            res.json({name,id})
        }else{
            res.json('User doesnt Exist')
        }
    }catch(e){
        res.json(e)
    }
})
//Deleting a user given its ID
app.delete('/api/:id',async(req,res)=>{
    const {id} = req.params
    try{
      const removeUser = await User.findOneAndDelete({id})
      if(removeUser){
      res.json('User Deleted Successfully')
      const {name,id} = removeUser
        return res.json(removeUser)
      }else{
        res.json('Failed to delete User')
      }
    }catch(e){
        res.json(e)
    }
})
//Updating a user using its ID
app.put('/api/:id',async(req,res)=>{
    const {id} = req.params
    let name;
       if(req.body && req.body.name){
           name = req.body.name
       }else if(req.query && req.query.name){
          name = req.query.name
       }
    try{
        const updateUser = await User.findOneAndUpdate({id:id},{name:name})
        if(updateUser){
           const {name,id} = updateUser
          return res.json({name,id})
        }else{
            res.json('Failed to Update.')
        }
    }catch(e){
       return  res.json(e)
    }
})
