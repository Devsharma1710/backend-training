const express = require('express')
const router = express.Router();


const Usercont = require("../controller/Regiscont")




router.post("/register",Usercont.createUser)




router.all('/**',function(req,res){
   res.status(400).send({status:false,message:"the api you are requesting is not available"})
});






module.exports = router