const express = require('express');
const route = require('./routes/route')
const mongoose = require('mongoose');
const app = express();



app.use(express.json());

mongoose.connect("mongodb+srv://PrachiRakhonde:TidE9uPBxvyZRFOn@cluster0.vdm2ccj.mongodb.net/DEVADatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(() => console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000,function(){
    console.log('express app is running on port' + (process.env.PORT || 3000))
})