
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const tokenVerification = async (req, res, next) =>

 {
    try {
        //---------------------------header verification---------------------------

        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        // let token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send({ status: false, msg: "token must be present" });



        //---------------------------token verification------------------------------

        const decodedToken = jwt.verify(token, "prajapatnavratan");
        if (!decodedToken) return res.status(403).send({ status: false, msg: "token is invalid" });




        //---------------------------finding user------------------------------

        const userId = req.params.userId;
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).send({ status: false, msg: "No such user exists" });



        //---------------------------authorization user--------------------------

        if (userId != decodedToken.userId) return res.status(403).send({ status: false, msg: "Unauthorized person" });




        //---------------------------isDeleted true------------------------------

        const user1 = await userModel.findById(userId).select({ isDeleted: 1, _id: 0 });
        if (user1.isDeleted == true) return res.status(404).send({ status: true, msg: "User has been deleted" });
        next()
    }
    catch (err) { 
        res.status(500).send({ error: err.message })
    }
}

module.exports = { tokenVerification }


















// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
