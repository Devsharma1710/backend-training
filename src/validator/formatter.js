// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler



function dev(){
    let a  ="     dev aharma   "
   let b = "DEV SHARMA"
   let d = "dev sharma"
   console.log(a.trim())
   console.log(b.toLowerCase())
   console.log(d.toUpperCase())
}
 dev();

 module.exports.dev = dev