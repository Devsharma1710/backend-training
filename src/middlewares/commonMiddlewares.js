const moment = require("moment")

  const time = moment();


const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
// assignment
    const assignment1 = function(req,res,next){
        // res.send("hello chhotu")
        console.log(time.format('yyyy,MM,DD'))
        console.log(time.format('h:mm:ss'))
        console.log(req.ip)
        console.log(req.originalUrl)
        next()
        
    }







module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.assignment1= assignment1