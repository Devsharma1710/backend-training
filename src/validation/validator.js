
//============================================Validation for Body================================================

const isValidBody = function (data) {
    return Object.keys(data).length > 0;
  };
  
  //============================================Validation for Email=============================================
  
  const isValidEmail = function (mail) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  
  //============================================Validation for Password=============================================
  
  const isValidPassword = function (pass) {
    //if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(pass)) return true;
    if (/^[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(pass)) return true;
    return false;
  };
  
  //============================================Validation for Name=============================================
  
  const isValidName = function (name) {
    if (/^[A-Z\s]{1,35}$/.test(name)) return true;
    return false;
  };
  

  
  //============================================Validation for Phone Number=============================================
  
  const isvalidPhone = function (mobile) {
    if (/^(\+91[\-\s]?)?[0]?[6789]\d{9}$/.test(mobile)) return true;
    return false;
  };
  

  module.exports = {
    isValidEmail,
    isValidName,
    isValidBody,
    isValidPassword,
    isvalidPhone,
  };