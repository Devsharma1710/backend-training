const { count } = require("console")
const BookcollectionModel= require("../models/BookCollectionModel")
const authorcollectionModel= require("../models/AuthorCollectionModel")
const bookModel = require("../models/bookModel")

const createbook = async function(req,res){
    const createbookdata = req.body
    const createalldata = await BookcollectionModel.create(createbookdata)
      res.send({msg:createalldata})
}
     

//1 condition  
const getbooksdata = async function (req,res){
  let authors = await authorcollectionModel.find({author_name:"chetan Bhagat"})
  let bookid = await BookcollectionModel.find({author_id:{$eq:authors[0].author_id}})
  res.send({msg : bookid})
}
// 2nd condition 
// const findauthor = async function(req,res){
//   let bookprice= await BookcollectionModel.findOneAndUpdate{
//     {book_name:"Two states"} ,
//     {price : 100}, 
//     {new:true}
//   } 

//   let updateprice= bookprice.price;
//   let authorupdate= await authorcollectionModel.find({author_id:{$eq : bookprice.author_id}}).select({author_name :1,id:0})
//     res.send({msg:authorupdate,updateprice})
// }  

  // 3rd condition 
  // const findbooks = async function (req,res){
  //   let allbooks = await BookcollectionModel.find({ price:{&gte: 50, $lte:100}}) 
  //   let store = allbooks.map(x => x.author_id);
  //   let NewBooks = await authorcollectionModel.find({author_id:store}).select({author_name:1,_id:0})
  //    res.send({msg: NewBooks}) 
  // }


module.exports.createbook = createbook
module.exports.getbooksdata = getbooksdata 
module.exports.findbooks = findbooks
moduule.exports.findauthor = findauthor