const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")



const createpostbook =  async function(req,res){
    const dev = req.body
    const devi = await BookModel.create(dev) 
    res.send({msg:devi})
}



const findgetbook = async function(req,res){
    let allget = await bookModel.find().count()
    res.send({msg:allget})
}
const booklist = async function(req,res){
    let allBooks = await bookModel.find().select({Bookname:1, authorname: 1,_id:0})
 res.send({msg:allBooks})
}

const yearDetails = async function (req, res) {
    let yearList= await bookModel.find({ year: req.body.year }).select({Bookname:1,_id:0})
    res.send(yearList)}

    const randomBooks= async function(req, res) {
        let allBooks = await bookModel.find({$or:[ {stockavailable: true},{ totalpages: {$gt: 500}}]})
        res.send({msg: allBooks })
    }
    
    const priceDetails= async function(req,res){
        let list = await bookModel.find({"prices. indianPrice": {$in: ["100", "200","500 "]}} ).select({Bookname:1,_id:0})
        res.send({ msg: list })}
    
        const particularBooks = async function (req, res) {
    
            let specificBooks = await bookModel.find(req.body)
            res.send({msg:specificBooks})
        }
        






module.exports.createpostbook = createpostbook
module.exports.findgetbook = findgetbook
module.exports.booklist = booklist
module.exports.yearDetails = yearDetails
module.exports.randomBooks = randomBooks
module.exports.priceDetails = priceDetails
module.exports.particularBooks = particularBooks








// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     // let allBooks= await BookModel.find().count()  //count
//     // let allBooks= await BookModel.find( ).sort({sales: 1}).limit(3)  
//     // let allBooks= await BookModel.find({authorName : {$eq:"pk"}})    
//         //  let allBooks= await BookModel.findById("629e4a32d45477890126938d")
//         //  let allBooks= await BookModel.findOne({sales:10})
//          let allBooks= await BookModel.update({sales:{$gt:10}},
//             {$set:{isPublished:true}}
//             )



//     res.send({msg: allBooks})
// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData