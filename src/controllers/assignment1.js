let axios = require("axios")



let getdistrictid = async function (req, res) {
    try {
        let districtid = req.query.districtid
        let date = req.query.date
        // console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getWeatherAll = async (req, res) => {
    try {
        let city = req.query.q;
        let appid = req.query.appid;
        var option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(option)
        res.status(200).send({ msg: result.data }) //get all data of city
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}


//------------------------------Get Weather Temp ---------------------------------------
let getWeatherTemp = async (req, res) => {
    try {
        let city = req.query.q;
        let appid = req.query.appid;
        var option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(option)
        res.status(200).send({ msg: result.data.main.temp }) //get only temp of city
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

//------------------------------Arrange By Temp---------------------------------------
let arrangeByTemp = async (req, res) => {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]; 
        let cityArr = [];
        for (let i = 0; i < cities.length; i++) {
            var option = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=3db52f1d8ab59f13bae754e08f840281`
            }
            result = await axios(option)
            cityArr[i] = { city: result.data.name, temp: result.data.main.temp }
        }
        //sorting
        let output = cityArr.sort((a, b) => (a.temp - b.temp))
        res.status(200).send({ msg: output })
    }
    catch (error) {
        
        res.status(500).send({ msg: error.message })
    }
}

let getAllMemes = async function (req, res)  {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


//-----------------------Create All Memes---------------------
let createMeme = async (req, res) => {
    try {
        let template_id = req.query.template_id;
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username;
        let password = req.query.password;
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getAllMemes = getAllMemes
module.exports.createMeme = createMeme


module.exports.getWeatherAll = getWeatherAll
module.exports.getWeatherTemp = getWeatherTemp
module.exports.arrangeByTemp = arrangeByTemp

  module.exports.getdistrictid = getdistrictid