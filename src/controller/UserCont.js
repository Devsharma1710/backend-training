const userModel = require('../Model/userRoute')
const { isValidBody,isValidName,isvalidPhone } = require('../validations/validator')

const createUser = async function(req,res){
    try{
        let data = req.body 
        const{name,city,mobile,mediaurl} = data
        if(!isValidBody(data)) {
            return res.status(400).send({status:false,message:"please provide valid request body"})
        }

        if(!name || !isValidName(name)) return res.status(400).send({status:false,messgae:"name is mandatory and in a valid format"})
        if(!mobile || !isvalidPhone(mobile)) return res.status(400).send({status:false,messgae:"mobile number is mandatory and in a valid format"})

        const create = await userModel.create(data)
        res.status(201).send({status:true,message:"user createed sucessfully",data:create})
    }
    catch(err){
        return res.status(500).send({status:false,message:"server error",err: err.message})
    }
}
const getUser = async function(req,res){
    try{
     const alldata = await userModel.find()
     res.status(200).send({status:true,data:alldata})
    }
    catch(err){
        return res.status(500).send({status:false,message:"server error",err: err.message})
    }
}


const updateUser = async function(req,res){
try{  
    let data = req.body
      let userId = req.params.userId
    let {name,city,mobile,mediaurl} = data


    if(!isValidBody(data)) {
        return res.status(400).send({status:false,message:"please provide valid request body"})
    }

    if(!name || !isValidName(name)) return res.status(400).send({status:false,messgae:"name is mandatory and in a valid format"})
    if(!mobile || !isvalidPhone(mobile)) return res.status(400).send({status:false,messgae:"mobile number is mandatory and in a valid format"})
    
    const updateuser = await userModel.findOneAndUpdate({_id:userId} ,{name:name ,city:city,mobile:mobile,mediaurl:mediaurl}, {new:true})

     return res.status(200).send({status:true,message:"user Update sucessfully",data:updateuser})
} 
catch(err){
    return res.status(500).send({status:false,message:"server error",err: err.message})
}

}



module.exports = {createUser,getUser,updateUser}
