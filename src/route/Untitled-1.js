// let array=[[15,22,24,65],[34,47,52,66]]

// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array[0].length;j++){
//         array[i][j]=array[i][j]+1
//     }
// }

// console.log(array);


// let a=[];
// let b=[];
// if(a==b){
//     console.log("yes")
// }else {
//     console.log("no")
// }

// let str="AMIT"
// console.log(str[0])

// const cardData = [
//     {
//         suit: "heart",
//         value: 7,
//     },
//     {
//         suit: "club",
//         value: 8,
//     },
//     {
//         suit: "club",
//         value: 2,
//     },
//     {
//         suit: "diamond",
//         value: 2,
//     },
//     {
//         suit: "diamond",
//         value: 5,
//     },
//     {
//         suit: "club",
//         value: 10,
//     },
// ];

// function findCard(value1,suit1){
//    let result= cardData.filter((obj)=>(obj.value==value1 && obj.suit==suit1)) 
// //    console.log(result)
//    if(result.length<1){
//     return false
//    }else if(result)
//    {
//     return true
//    }
// }

// console.log(findCard(1,'heart'))


// const binaryArrayToNumber = arr => {
//     // your code
//     let sum=0;
//     let n=arr.length;
//     for(let i=(n-1);i>0;i--){
//       if(arr[i]==1){
//         sum=sum+2**(n-1-i)
//       }
//     }
//     console.log(sum);
//   };

//   (binaryArrayToNumber([0,1,0,1]))

var number=function(array){
    //your awesome code here
    let ar={}
    for(let i=1;i<=array.length;i++){
      ar[i]=array[i-1]
     
    }
    // ar.toArray()
  console.log(ar);
  }

  number(['a','b','c','d'])