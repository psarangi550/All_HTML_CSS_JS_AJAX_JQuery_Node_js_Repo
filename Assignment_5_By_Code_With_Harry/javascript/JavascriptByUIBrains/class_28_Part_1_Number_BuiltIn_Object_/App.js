//to fetch the Maximum Integer Allowed in Javascript
let maxNum=Number.MAX_SAFE_INTEGER//using the MAX_SAFE_INTEGER variable on the Number Inbuilt Object
console.log(maxNum)//printing to the console

//to fetch the Minimum Integer Number Allowed in JavaScript:-

let minNum=Number.MIN_SAFE_INTEGER//using the MIN_SAFE_INTEGER variable on the Number Inbuilt Object
console.log(minNum)//printing to the console


//we can also fetch the Positive Integer and Negative Integer by using the POSITIVE_INFINITY and NEGATIVE_INFINITY variable
let posiInfi=Number.POSITIVE_INFINITY////fetching the positive infinity by using POSITIVE_INFINITY Variable
console.log(posiInfi)//printing the value to the console

//we can also fetch the Negative Integer By the Help of NEGATIVE_INFINITY variable
let negaInfi=Number.NEGATIVE_INFINITY//using the NEGATIVE_INFINITY variable on the Number Object
console.log(negaInfi)//printing to the console


///if we want to convert a String Value to Int Value The we can Use Either parseInt parseFloat function
let str1="100"//asigning the 100 value to the variable number
let num1=Number.parseInt(str1)//passing the string value as an argument to parseInt() so that we can convert the String to a Number
console.log(num1)//printing the converted String to the Number
//if we want to see the Type then
console.log(`${typeof str1}====> ${typeof num1}`)//converting the String to the Number
//But if we have a decimal value and we are using the ParseInt Method then we will not be able to see the decimal Number once the string converted to a Number
str1="100.145"
num1=Number.parseInt(str1)//passing the string value as an argument to parseInt() so that we can convert the String to a Number
console.log(num1)//printing the converted String to the Number
//he if we see we cab able to observer that Only the Numeric value we are able to see Not the  decimal value


//if we want to fetch the Decimal Point then we have to use the parseFloat()
str1="100.145"
num1=Number.parseFloat(str1)//passing the string value as an argument to parseFloat() so that we can convert the String to a Number with decimal Point
console.log(num1)//printing the converted String to the Float Number
//he if we see we can able to observer that  Numeric value with  decimal value got changed


//if we want to Convert the Number Into a string Object then we can do that By toString() on the Number Object
let num2=100//assigning 1000 value to num1 variable
let str2=num2.toString()//converting the Number element to String Element
console.log(str2)//printing the String to the Console
console.log(`${typeof num2} ====>${ typeof str2}`)



//if we want to convert the Integer as a float with decimal Point then we can use toFixed(float decimal point in number )
let num3=100//assigning the 100 value to variable num3
let float1=num3.toFixed(3)//here calling the toFixed(fractional Digit as Number)
console.log(float1)
