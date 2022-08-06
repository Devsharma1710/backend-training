function printDate (){
    let today = new Date();
    let date = today.getDate() + "-" + (today.getMonth) + "-" + (today.getFullYear) 
    console.log(today)

}
    printDate()   


     function getBatchInfo(){
        console.log( "plutonium ,W3D5,the topic being today taught is node js module system")
     }
     getBatchInfo() 

     module.exports.batchinfo = getBatchInfo
     module.exports.printDate = printDate