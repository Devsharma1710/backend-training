const express = require("express")
const router = express.Router()
const {shortUrl, getUrl} = require("../controller/urlController")




router.post("/url/shorten",shortUrl)
router.get("/:urlCode", getUrl)

// router.get("/short/:objectid",getshorturl)









module.exports = router