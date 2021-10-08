// //to print the the Number Between 1 to 10 using the do while loops
// let i=1;//assigning 1 value to i variable
// do{
//   console.log(i);//printing to the console
//   i++//incrementing the value
// }while(i<=10)//condition checking
// //here we are doing the statement execution first followed by condition checking while providing the condition we are providing a less value
//
// //print the output in the same line
// result=""//Re-assigning the result value as "" as its already used earlier
// i=1//assigning i value as 1 again wioth out re-assigning as its already being used
// do{
//   result+=`${i}`//appending the value of result string by using back tick and template string
//   i++//incrementing the i value
// }while(i<=10)
// console.log(result)


//printing 20 to 0 from backout with a gap iof 2 and space and comma in between them
// let result=""//assigning the value without re-assigning without let keyword
// let i=20//assigning the value as 20 as its already used no need of Let keyword
// do{
//   (i>0)?result+=`${i} ,`:result+=`${i} `//using the ternary operator and template string along with dynamic value in ${variable} symbol
//    i-=2//decrementing the value by 2`
// }while(i>=0)
// console.log(result)

// //using the Pattern Concept
// let i=1//assigning 1 value to the variable i
// let result=""//assigning the empty string to variable result
// do{
//   let j=1
//   do{
//     result+="*"
//     j++//incrementing the value
//   }while(j<=i)
//   result+="\n"
//   i++
// }while(i<=5)
// console.log(result)


// //using the Pattern Concept
// let i=1//assigning 1 value to the variable i
// let result=""//assigning the empty string to variable result
// do{
//   let j=1
//   do{
//     result+=`${j}`
//     j++//incrementing the value
//   }while(j<=i)
//   result+="\n"
//   i++
// }while(i<=5)
// console.log(result)

// //using the Pattern Concept
// let i=1//assigning 1 value to the variable i
// let result=""//assigning the empty string to variable result
// do{
//   let j=1
//   do{
//     result+=`${i}`
//     j++//incrementing the value
//   }while(j<=i)
//   result+="\n"
//   i++
// }while(i<=5)
// console.log(result)

// //using the Pattern Concept
// let i=5//assigning 1 value to the variable i
// let result=""//assigning the empty string to variable result
// do{
//   let j=1
//   do{
//     result+=`${i}`
//     j++//incrementing the value
//   }while(j<=i)
//   result+="\n"
//   i--
// }while(i>=0)
// console.log(result)


//using the Pattern Concept
let i=5//assigning 1 value to the variable i
let result=""//assigning the empty string to variable result
do{
  let j=1
  do{
    result+=`${j}`
    j++//incrementing the value
  }while(j<=i)
  result+="\n"
  i--
}while(i>=0)
console.log(result)
