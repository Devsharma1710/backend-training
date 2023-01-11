const mongoose  = require('mongoose')

const userSchema = new mongoose.Schema({

  name:{
    type:String,
    reruired:true,
  },
   city:{
    type:String,
    reruired:true,
   },
   mobile:{
    type:Number
   },
   mediaurl:{
    type:String
   }
},{ timestamps:true}
)

module.exports  = mongoose.model("User",userSchema)