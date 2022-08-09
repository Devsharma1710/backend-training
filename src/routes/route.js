const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router(); 

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


      ///first problems starts here 
      router.get('/get-movies', function(req, res){
        let movies1 = ["shole","rang de basanti","dil mange more","yjhd"]
        res.send(movies1)
      })

  //second  problem starts from here  
  router.get('/get-movies/:indexNumber', function(req, res){
    let movies = ['rang de basanti','the shinning','lord of the rings','batman begins']
    let index =req.params.indexNumber;
    console.log(movies[index])
    res.send(movies[index])
  })
   ///third problem starts here
   router.get('/get-movies/:indexNumber', function(req, res){
    let moviesName = ['rang de basanti','the shinning','lord of the rings','batman begins']
    let index = req.params.indexNumber;
    if(index>moviesName.length){
        return res.send("movies length is greater than the movie")
    }else{
        res.send(moviesName[index])
    }
   })
     ///fourth problem starts here
       router.get('/get-/films/',function(req,res){
        let moviesName = [{"id":1,"name":"the shinning"},
       {"id":2,"name":"incendies"},
    {"id":3, "name":"rang de basanti"},
    {"id":4,"name":"finding nemo"}]
    res.send(moviesName)

       })
       // fifth problem starts here 
       router.get('/get-/films/:indexNumber',function(req,res){ 
        let moviesName = [{"id":1,"name":"the shinning"},
        {"id":2,"name":"incendies"},
     {"id":3, "name":"rang de basanti"},
     {"id":4,"name":"finding nemo"}]
      let index = req.params.indexNumber;
      if(index>moviesName.length){
        return res.send("invalid no")
      }else{
        res.send(moviesName[index])
      }
       })



router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them 
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response') 
})

module.exports = router;    