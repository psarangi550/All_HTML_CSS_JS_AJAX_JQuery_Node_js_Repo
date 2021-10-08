//taking a String and Finding the a and o How Many Times Available
// let str1=String(" Good Morning ")
// let fetchOs= str1=> {
//   let strArray = str1.split("");
//   let filterArray1 = strArray.filter(function (str) {
//     return (str === "o")
//   })
//   console.log(filterArray1.length)
// }
// fetchOs(str1)

//
// //alternate approach:-
// let fetch0s=(str1)=>{//function expression with Arrow Function
//   let count=0
//   for(let i=0;i<str1.length;i++){
//     if (str1[i]=="o") {
//       count = count + 1
//     }
//     }
//   return count
//   }
//   let output=fetch0s(str1)
// console.log(output)



//example How to Make the String Reverse

// str1=String(" Pratik ")
// let reverseString=(str1)=>{
//   let strArray=str1.split("");
//   let reverseStr=(strArray.reverse()).join("")
//   return reverseStr
// }
// let output=reverseString(str1)
// console.log(`${str1}=======> ${output}`)


// //alternarte way
// str1=String(" Pratik ")
// let reverseString=(str1)=>{
//   let length=str1.length
//   let result=""
//   for(let i=length-1;i>0;i--){
//     result+=str1.charAt(i)
//   }
//   return result
// }
// let output=reverseString(str1)
// console.log(`${str1}=======> ${output}`)


//check the given string is palindrome or not
//when the String and its reverse String Matched to each other they are called as Palindrome String
//
// str1=String("pratik")
// let reverseString=(str1)=>{
//   let length=str1.length
//   let result=""
//   for(let i=length-1;i>=0;i--){
//     result+=str1.charAt(i)
//   }
//   return result
// }
// let output=reverseString(str1)
// // console.log(`${str1}=======> ${output}`)
// if(str1===output){
//   console.log(`${str1} is a palindrome Number `)
// }
// else {
//   console.log(`${str1} isn't a palindrome Number `)
// }


//alternate way
str1=String("tenet")
let reverseString=(str2)=>{
  length=str2.length;
  let result=""
  for(let i=length-1;i>=0;i--){
    result+=str2.charAt(i)
  }
return result
}
// let output=reverseString(str1)
// console.log(`${str1}=======> ${output}`)

//calling the function
// reverseString(str1)

// //another Alternate Approach
// let isPallinDrome=(str3)=>{
//   if(str3===reverseString(str3)){
//     console.log(`${str3} is a palindrome Number `)
//   }
//   else {
//     console.log(`${str3} isn't a palindrome Number `)
//   }
// }
//
// isPallinDrome(str1)


//another Alternate Approach
let isPallinDrome=(str3)=>{
  (str3===reverseString(str3))?console.log(`${str3} is a palindrome Number `):console.log(`${str3} isn't a palindrome Number `)
}

isPallinDrome(str1)
