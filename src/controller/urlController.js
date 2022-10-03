const express = require("express");
const urlModel = require("../models/urlModel");
const validUrl = require("valid-url");
const shortId = require("shortid");
const baseUrl = "http:localhost:3000"; //baseUrl = shorturl + urlcode

const redis = require("redis");





const { promisify } = require("util");

//Connect to redis
const redisClient = redis.createClient(
  18003,
  "redis-18003.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("kAoDV1mbdU4e97CP04rmcz4P04U6SA1p", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});



const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);

const getshorturl = async function (req, res) {
  let cahcedshorturl = await GET_ASYNC(`${req.params._id}`)
  if(cahcedshorturl) {
    res.send(cahcedshorturl)
  } 
  else 

  {
    let profile = await urlModel.findById(req.params._id);
    await SET_ASYNC(`${req.params._id}`, JSON.stringify(profile))
    res.send({ data: profile });
  }

};







// post url
const shortUrl = async (req, res) => {
  const { longUrl } = req.body;

  // check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).send({ status: false, message: "Invalid base url" });
  }

  // check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await urlModel.findOne({ longUrl });
      if (url) {
        console.log("Already exists...");
        return res.status(400).send({ status : false, msg : "Url already exists" });
      } else {
        // create url code
        let urlCode = shortId.generate();
        let shortUrl = baseUrl + "/" + urlCode;
        // console.log(shortUrl);
        let allUrl = await urlModel.create({
          longUrl: longUrl,
          shortUrl: shortUrl,
          urlCode: urlCode,
        });
        return res.status(201).send({ data: allUrl });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Some error has occurred" });
    }
  } else {
    return res.status(400).send({ message: "Invalid long url" });
  }
};

// get url
const getUrl = async (req, res) => {
  try {
    let code = req.params.urlCode;

    if (!code) return res.status(400).send({ status: false, message: "Pass url code in url" });

    let findUrlCode = await urlModel.findOne({ urlCode : code });
    if (!findUrlCode) return res.status(400).send({ status: false, message: "Url code not found" });
    let redirect = findUrlCode

    return res.status(302).redirect(redirect.longUrl)
  } catch (err) {
    return res.status(500).send({ status: true, error: err.message });
  }
};

module.exports = { shortUrl, getUrl,getshorturl };
