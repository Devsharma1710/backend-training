const mongoose  = require('mongoose')

const citySchema = new mongoose.Schema({

  cityname:{
    type:String,
    reruired:true,
    unique:true
  },
},{ timestamps:true}
)

module.exports  = mongoose.model("city",citySchema)