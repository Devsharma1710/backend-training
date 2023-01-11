const express = require('express')
 const router = express.Router();
 const cityCont = require("../controller/cityCont")
 const Usercont = require("../controller/UserCont")




 router.post("/register",cityCont.createcity)
 router.get("/getalldata",cityCont.getcity)


 router.post("/createUser",Usercont.createUser)
 router.get("/getUserdata",Usercont.getUser)
router.put("/updateuser/:userid",Usercont.updateUser)

 router.all('/**',function(req,res){
    res.status(400).send({status:false,message:"the api you are requesting is not available"})
 });

 module.exports = router