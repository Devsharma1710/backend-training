const express = require("express")
const router = express.Router()
const {shortUrl, getUrl} = require("../controller/urlController")

router.post("/url/shorten",shortUrl)
router.get("/:urlCode", getUrl)











module.exports = router