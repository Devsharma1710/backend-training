const registerModel = require('../Models/Register')
const { isValidBody,isValidName,isvalidPhone,isValidEmail,isValidPassword } = require('../validation/validator')


const createUser = async function(req,res){
    try{
        let data = req.body 
        const{FirstName,LastName,Phone,Email,Password} = data
        if(!isValidBody(data)) {
            return res.status(400).send({status:false,message:"please provide valid request body"})
        }

        if(!FirstName || !isValidName(FirstName) ) return res.status(400).send({status:false,messgae:"FirstName is mandatory and in a valid format"})
        if(!LastName || !isValidName(LastName)) return res.status(400).send({status:false,messgae:"LastName is mandatory and in a valid format"})
        if(!Phone || !isvalidPhone(Phone)) return res.status(400).send({status:false,messgae:"Phone number is mandatory and in a valid format"})
        let inputPhone = await registerModel.findOne({ Phone: Phone });
        if (inputPhone) {
            return res.status(400).send({ status: false, msg: `${Phone} is already registered ` });
        }
        if(!Email || !isValidEmail(Email)) return res.status(400).send({status:false,messgae:"Phone number is mandatory and in a valid format"})
        let inputEmail = await registerModel.findOne({ Email: Email });
        if (inputEmail) {
            return res.status(400).send({ status: false, msg: `${Email} is already registered` });
        }
        if(!Password || !isValidPassword(Password)) return res.status(400).send({status:false,messgae:"Phone number is mandatory and in a valid format"})

        const create = await registerModel.create(data)
        res.status(201).send({status:true,message:"user createed sucessfully",data:create})
    }
    catch(err){
        return res.status(500).send({status:false,message:"server error",err: err.message})
    }
}

module.exports = {createUser}