let  str1 =String("Good")
// let str2=str1.replace(str1[0]," ")
// console.log(str2)
// let str2=delete str1[1]
// console.log(str2)
// let strArry=str1.split("");
// console.log(strArry.splice(0,0," "))
// let patternDisplay=(str1)=> {
//   let result = ""
//   for (let i = 0; i<str1.length; i++) {
//     for (let j = 0; j <=i; j++) {
//       result += str1.charAt(j);
//     }
//     result += "\n"
//   }
//   return result
// }
// let output=patternDisplay(str1)
// console.log(output)

//
// //alternate Approach
// let patternString=(str1)=> {
//   for (let i =0; i < str1.length;i++){
//     console.log(str1.substring(0,i+1))
//   }
// }
// patternString(str1)

//
// //triangle 2 pattern:-
// //alternate Approach
// let patternString=(str1)=> {
//   for (let i =str1.length; i >=0; i--){
//     console.log(str1.substring(0,i))
//   }
// }
// patternString(str1)


//triangle 3 pattern:-
//
// let output=""
// let result=""
// let reqSpace=()=> {
//   result = result + " "
//   return result
// }
// let patternString=(str1)=> {
//   let n=str1.length
//   // let strArray=str1.split("")
//   for (let i=0;i<str1.length;i++){
//     if(i>0){
//       output+=reqSpace()+str1.substr(i,n)+"\n"
//     }
//     else{
//       console.log(str1)
//     }
//   }
//   console.log(output);
// }
// patternString(str1)


//table Patter  4:-
// let result=""
// let patternString=(str1)=>{
//   for(let i=0;i<str1.length;i++){
//     result+=str1.substr(0,str1.length-i)+"\n"
//   }
//   return result
// }
// let output=patternString(str1)
// console.log(output)


//table pattern5:-

let result=""

let addSpace=(number)=>{
  let output1=""
  for(let i=0;i<number;i++){
    output1=output1+" "
  }
  return output1
}
let patternString=(str1)=>{
  for(let i=0;i<=str1.length;i++){
    result+=addSpace((str1.length-i))+str1.substr(str1.length-i,i)+"\n"
  }
  return result
}
let output=patternString(str1)
console.log(output)
