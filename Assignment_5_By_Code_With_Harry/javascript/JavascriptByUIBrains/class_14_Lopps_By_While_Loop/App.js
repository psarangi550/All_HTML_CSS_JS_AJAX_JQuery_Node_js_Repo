// //While Loop with Ternary Operator
// let i=20;//assigning 20 value to variable i
// let result="";//assigning "" string to result variable
// while(i>=0) {//while with condition
//   (i > 0) ? result += `${i} ,` : result += `${i} `//using ternary operator instead of if else with template String and Dynamic value inside ternary Operator as ${}
//   i-=2//decrementing the value by 2 using the short end Math Operator
// }//closing the while loop
// console.log(result)

// //Using the Pattern
// let result=""
// let i=1;
// let j=1;
// while(i<=5){
// while(j<=i){
//   result+="*"
//   j++
// }
// console.log(result)
// i++
// }
/*  *
    **
    ***
    ****
    *****
*/

// //Using the Pattern
// let result=""
// let i=1;
// let j=1;
// while(i<=5) {
//   while (j <= i) {
//     result += `${j}`
//     j++
//   }
//   console.log(result)
//   i++
// }

/*
1
12
123
1234
12345
* */

//Ex:-3:-
//--------
// // let result=""
// let i=1;
//
// while(i<=5) {
//   let result=""
//   let j=1;
//   while (j<=i) {
//     result += `${i}`
//     j++
//   }
//   console.log(result)
//   i++
// }

// //example:-4:-
// let i=5;
//
// while(i>=1){
//   let j=1;
//   let result=""
//   while(j<i){
//   result+=`${j}`
//   j++
// }
// console.log(result)
// i--
// }

//example:-4
let i=5;

while(i>=1){
  let j=1;
  let result=""
  while(j<=i){
    result+=`${i}`
    j++
  }
  console.log(result)
  i--
}
