const express = require('express');
const router = express.Router();
// const UserModel= require("../models/bookModel")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');

// router.get("/test-me", function (req, res) {
    // res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )
 
// router.get("/getBooksData", BookController.getBooksData)
     
router.post("/postbook1",BookController.createpostbook)
  
router.get("/getbook1",BookController.findgetbook)
router.get("/getbook2",BookController.booklist)
router.get("/getyeardetail",BookController.yearDetails)
router.get("/randomBooks",BookController.randomBooks)
router.get("/priceDetails",BookController.priceDetails)

module.exports = router;