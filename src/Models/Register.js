const mongoose  = require('mongoose')

const registerSchema = new mongoose.Schema({

  FirstName:{
    type:String,
    reruired:true,
    Uppercase:true,
    trim:true
  },
  LastName:{
    type:String,
    reruired:true,
    Uppercase:true,
    trim:true
  },
  Phone:{
    type:Number,
    reruired:true,
    unique:true,
    trim:true
  },
  Email:{
    type:String,
    reruired:true,
    unique:true
  },
  Password:{
    type:String,
    reruired:true,
   
  },
},{ timestamps:true}
)

module.exports  = mongoose.model("register",registerSchema)