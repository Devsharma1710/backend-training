const express = require("express")
const route = require("./route/route")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use("/",route)

mongoose.connect("mongodb+srv://Lucky:ejIoY6iVVc1sRKbS@cluster0.byhslvl.mongodb.net/group14Database",{
    useNewUrlParser: true

})

.then(()=>console.log("mongoosedb is connected"))
.catch(err=>console.log(err))

app.listen(process.env.PORT || 3000,()=>{
    console.log("express app running on PORT"+(process.env.PORT || 3000))
})