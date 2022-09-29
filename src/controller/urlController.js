const express = require("express");
const urlModel = require("../models/urlModel");
const validUrl = require("valid-url");
const shortId = require("shortid");
const baseUrl = "http:localhost:3000"; //baseUrl = shorturl + urlcode

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
        return res.status(400).send({ data: url });
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
    let urlCode = req.params.urlCode;

    if (!urlCode)
      return res
        .status(400)
        .send({ status: false, message: "Pass url code in url" });

    let findUrlCode = await urlModel.findOne({ urlCode });
    // console.log( ` url ${findUrlCode} `);
    if (!findUrlCode)
      return res
        .status(400)
        .send({ status: false, message: "Url code not found" });
    let redirect = findUrlCode.longUrl
    res.redirect('/')
    return res.status(302).send({ status: true, message: findUrlCode});
  } catch (err) {
    return res.status(500).send({ status: true, error: err.message });
  }
};

module.exports = { shortUrl, getUrl };
