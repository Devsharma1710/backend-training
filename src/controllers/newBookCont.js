const newbookModel= require("../models/newBook")
const newAuthorModel = require("../models/newAuthor")
const newpublisherModel = require("../models/newPublisher")
const mongoose = require('mongoose');


const newBooks1 = async function(req,res){
    let newB = req.body
    let allnewB = await newbookModel.create(newB)
     res.send({msg:allnewB})
}
 

const getnewbookwithdetails = async function (req, res) {
    let newspecificBook = await newbookModel.find().populate(['newauthorid' , 'publisher_id'])  
    res.send({data: newspecificBook})

}
  
const createbook = async function (req,res) {
    let book = req.body
    let author1 = book.newauthhorid
    let publisher1 = book.publisher_id
// let isvalid = mongoose.types.ObjectId.isValid(author1)
// let isvalid1 = mongoose.types.ObjectId.isValid(publisher1)

    let idfromauthor = await newAuthorModel.findById(author1)
    let idfrompublisher = await newpublisherModel.findById(publisher1)
     

    if(!idfromauthor){
        return res.send("this author doesn't exist")
    }else if(!idfrompublisher){
      return res.send("this publisher doesn't exist")
    }else if(!idfromauthor && !idfrompublisher){
        return res.send("author and publisher both id is invalid please try eith valid ID")

    }else{
        let bookcreate = await newbookModel.create(book)
        res,send({data:bookcreate})
    }
}

   
let getbookswithauthordetails = async function (req,res){
    let data = await newpublisherModel.find({name:["penguin" ,"harpercollins"]}).select({_id:1})
    let bookid = await newbookModel.updateMany({publisher_id :data},{$set : {isHardCover :true, new:true }},{upsert:true})

    let authorids = await newAuthorModel.find({ratings : {$gt:3.5}}).select({_id:1})
  
    let newrating = await newbookModel.updateMany({newauthorid : authorids },{$inc :{price :10}},{upsert:true})

    res.send({data: bookid , newrating})  
}

module.exports.newBooks1 = newBooks1 
module.exports.getnewbookwithdetails = getnewbookwithdetails
module.exports.getbookswithauthordetails  = getbookswithauthordetails 
module.exports.createbook  = createbook 
