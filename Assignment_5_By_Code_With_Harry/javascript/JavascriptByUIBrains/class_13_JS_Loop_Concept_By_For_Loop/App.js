// //using the for loop
// let result=""//assigning empty string to result variable
// for(let i=0;i<=10;i++){//for loop with initialization Condition checking and incrementing or decrementing the values
//   (i<=9)? result+=`${i} ,`:result+=`${i} `//using the ternary operator with template string and dynamic values in ${variable Name}
// }
// console.log(result)//printing the result to the console

//
// //using the for loop
// let result="";//assigning empty string to result variable
// for(let i=20;i>=0;i-=2){//for loop with initialization Condition checking and incrementing or decrementing the values
//   (i>0)? result+=`${i} ,`:result+=`${i} `//using the ternary operator with template string and dynamic values in ${variable Name}
// }
// console.log(result)//printing the result to the console

//
// //Nested For Loop :-i.e:-for loop inside another for loop
//
// for(let i=0;i<=5;i++){
//   let result=""
//   for(let j=0;j<=i;j++){
//     result+="*"
//   }
//   console.log(result)
// }
// // console.log(result)
//
//
// //Example:2:-
//
// for(let i=1;i<=5;i++){
//   let result=""
//   for(let j=1;j<=i;j++){
//     result+=`${j}`
//   }
//   console.log(result)
// }
// // console.log(result)
//
// //ex:-3
//
// for(let i=1;i<=5;i++){
//   let result=""
//   for(let j=1;j<=i;j++){
//     result+=`${i}`
//   }
//   console.log(result)
// }
// // console.log(result)
//
// //ex:-3
//
// for(let i=5;i>=1;i--){
//   let result=""
//   for(let j=1;j<=i;j++){
//     result+=`${j}`
//   }
//   console.log(result)
// }
// // console.log(result)
//

// //ex:-3
//
// for(let i=5;i>=1;i--){
//   let result=""
//   for(let j=1;j<=i;j++){
//     result+=`${i}`
//   }
//   console.log(result)
// }
// // console.log(result)

let n=6
for(let i=1;i<=n;i++){
  let result=""
  for(let j=1;j<=n-i;j++){
    result+=`${j}`
  }
  console.log(result)
}
// console.log(result)
