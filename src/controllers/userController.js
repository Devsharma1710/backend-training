const UserModel= require("../models/userModel")
const bookschema = require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find( )
    res.send({msg: allUsers})
}    

const postbookish = async function (req,res){
    let post  = req.body
    let allpost = await bookschema.create(post)
    res.send({msg : allpost})

}

const getbookish = async function (req,res){
   
    let allbook = await bookschema.find({authorname : "devi"})
    res.send({msg : allbook})
}





module.exports.postbookish= postbookish
module.exports.getbookish= getbookish

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData