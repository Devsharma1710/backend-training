
const cityModel = require('../Model/city')
const { isValidBody,isValidName } = require('../validations/validator')

const createcity = async function(req,res){
    try{
        let data = req.body 
        const{cityname} = data
        if(!isValidBody(data)) {
            return res.status(400).send({status:false,message:"please provide valid request body"})
        }

        if(!cityname || !isValidName(cityname)) return res.status(400).send({status:false,messgae:"cityname is mandatory and in a valid format"})

        const create = await cityModel.create(data)
        res.status(201).send({status:true,message:"city createed sucessfully",data:create})
    }
    catch(err){
        return res.status(500).send({status:false,message:"server error",err: err.message})
    }
}
const getcity = async function(req,res){
    try{
     const alldata = await cityModel.find()
     res.status(200).send({status:true,data:alldata})
    }
    catch(err){
        return res.status(500).send({status:false,message:"server error",err: err.message})
    }
}



module.exports = {createcity,getcity}
