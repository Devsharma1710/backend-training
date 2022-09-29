const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        tolowercase: true
    },
    longUrl:{
        type: String,
        required: true,
        valid: true

    },
    shortUrl: {
        type: String,
        unique: true,
        required: true
    }

}, { timestamps: true })

module.exports =mongoose.model("url",urlSchema)