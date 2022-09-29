const express = require("express")
const router = express.Router()
const {shortUrl} = require("../controller/urlController")

router.post("/url/shorten",shortUrl)















module.exports = router