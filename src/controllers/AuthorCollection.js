const { count } = require("console")
const authorcollectionModel= require("../models/AuthorCollectionModel")

const createAuthor = async function (req,res){
    const bookauthor = req.body
    const allbookauthor = await authorcollectionModel.create(bookauthor)
    res.send({msg : allbookauthor})
}



module.exports.createAuthor = createAuthor
// module.exports.getauthor = getauthor 