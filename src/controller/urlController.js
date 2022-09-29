const express = require("express")

const urlModel = require("../models/urlModel")
const baseUrl = 'http:localhost:3000'

const validUrl = require("valid-url");
const shortId = require("shortid");
const config = require("config");


const shortUrl = async (req,res) =>{
    let longUrl = req.body
    let baseUrl = config.get("baseUrl")
    if (!validUrl.isUri(baseUrl)) {
        return res.status(400).send({ message: "Invalid base url" })
    }
    if (!validUrl.isUri(longUrl)) {
        return res.status(401).send('Invalid long URL')
    }
    if (validUrl.isUri(longUrl)) {
        try{
            let findUrl = await urlModel.findOne({longUrl:longUrl})
            if(findUrl){
                return res.status(401).send({status:false,msg:"url already exist"})
   
            }
            let urlCode = shortId.generate() //generating shortCode
            let shortUrl = baseUrl+"/"+urlCode
            return res.status(201).send({status:true,msg:shortUrl})
        }catch(error){
         return res.status(500).send({status:false ,error:error.message})
        }
    }

}

module.exports = {shortUrl}