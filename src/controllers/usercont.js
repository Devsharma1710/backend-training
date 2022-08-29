const { count } = require("console")
const userdocModel= require("../models/userdoc")

const createuserdoc = async function (req, res) {
    let data = req.body
let headerdata = req.headers["isfreeappuser"]
  data.isfreeappuser = headerdata
if(!headerdata){
    return res.send({"msg":"isFreeAppUser is required"})
}
        let savedData= await userdocModel.create(data)
        res.send({data: savedData})
}
module.exports.createuserdoc = createuserdoc

// creating the user
// const createUser= async function (req, res) {
//     let data= req.body   
//     let token= req.headers.isfreeappuser
//      data.isFreeAppUser = token
//     let allData= await UserModel.create(data)
//     res.send({msg: allData})










