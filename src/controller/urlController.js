
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
      const cachedData = await GET_ASYNC(`${longUrl}`)
      if(cachedData){
        return res.status(400).send({ status : false, msg : "Urlfrom cache" ,data:JSON.parse(cachedData)});
      }
      let url = await urlModel.findOne({ longUrl });
      if (url) {
       await SET_ASYNC(`${longUrl}`,JSON.stringify(url))
        return res.status(400).send({ status : false, msg : "Url already exists" ,data:url});
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
        await SET_ASYNC(`${longUrl}`,JSON.stringify(allUrl))
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
const getUrl = async function (req, res) {
  try {
      const urlCode = req.params.urlCode
      if (!shortId.isValid(req.params.urlCode.trim())) {
          return res.status(400).send({ status: false, message: "Please provide valid urlCode" })
      }
      let cachedURLCode = await GET_ASYNC(`${req.params.urlCode}`)
      if (cachedURLCode) {
          return res.status(200).redirect(JSON.parse (cachedURLCode).longUrl)
      } else {
          const cachedData = await urlModel.findOne({ urlCode: urlCode })
          if (!cachedData) {
              return res.status(404).send({ status: false, message: "Long URL Not Found" })
          }
          await SET_ASYNC(`${req.params.urlCode}`, JSON.stringify(cachedData), "EX",10)
          return res.status(302).redirect(cachedData.longUrl)
      }
  } catch (err) {
      return res.status(500).send({ status: false, message: err.message })   
    }
}

module.exports = { shortUrl, getUrl };
