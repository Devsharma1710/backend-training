const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const assignmentcont = require("../controllers/assignment1")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/districtid",assignmentcont.getdistrictid)
router.get("/allweather",assignmentcont.getWeatherAll)
router.get("/arrangeByTemp",assignmentcont.arrangeByTemp)
router.get("/getWeatherTemp",assignmentcont.getWeatherTemp)
router.get("/getAllMemes",assignmentcont.getAllMemes)
router.post("/createMeme",assignmentcont.createMeme)











router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;