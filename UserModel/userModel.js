const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
       default:1
    },
    name:{
        type:String
    }
})
module.exports= mongoose.model('User',userSchema)