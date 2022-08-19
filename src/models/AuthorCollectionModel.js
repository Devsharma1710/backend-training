const mongoose = require('mongoose')

const AuthorCollectionSchema = new mongoose.Schema({
    author_id : {
        type: String,
        require:true
    },
    author_name:String,
    age:Number,
    address:String
},{timestamps:true})

module.exports = mongoose.model('authorcollection',AuthorCollectionSchema)   