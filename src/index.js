const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://devsharma:B7ZLeCNtYvNOY0ij@cluster0.eniousr.mongodb.net/dev-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// const moment = require('moment')
// const time = moment();
// app.use(
//     function(req,res,next){
//         console.log(time.format('yyyy,MM,DD'))
//         console.log(time.format('h:mm:ss'))
//         console.log(req.ip)
//         console.log(req.originalUrl)
//         next()
//     }
// )




app.use('/', route);

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        res.send({msg:"done"})
  }
  );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
