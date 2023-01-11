
const mongoose = require('mongoose')



const isValidBody = function (data){
    return Object.keys(data).length>0;
}

const isValidName = function (name) {
    if (/^[A-Za-z\s]{1,35}$/.test(name)) return true
    return false
  };



  const isvalidPhone = function (mobile) {
    if (/^(\+91[\-\s]?)?[0]?[6789]\d{9}$/.test(mobile)) return true;
    return false;
  };
  


  module.exports = {isValidName,isValidBody,isvalidPhone}