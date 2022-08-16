const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookschema = require("../models/userModel")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



router.post("/bookpost",UserController.postbookish)

router.get("/getbook",UserController.getbookish)


module.exports = router;