const express = require('express')
const route = require('./routes/router.js')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect("mongodb+srv://PrachiRakhonde:TidE9uPBxvyZRFOn@cluster0.vdm2ccj.mongodb.net/devDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});