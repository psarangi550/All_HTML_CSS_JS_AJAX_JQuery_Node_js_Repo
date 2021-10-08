/*
* Operator in Javascript:-never give space between the Operator
* But we can provide the space between the variable and the operator (not recomended  )
* Assignment Operator:-"="
* Arithmetic Operator:-"+","-","*","/","%"
* short hand Math Operator:-+=,-=,*=,/=
* comparison Operator:->=,<=,<,>,
* Logical Operator:-&&,||,^
* unary Operator:++,--
* Ternary Operator:-?:
* Equality Operator:==,===
* */

//* Assignment Operator:-"="
let name="Naveen"//assigning Naveen to name variable
console.log(name)//printing to the console

//* Arithmetic Operator:-"+","-","*","/","%"
let num1=10;//assigning 10 value to num1 variable
let num2=20//assigning 20 value to num2 variable
console.log(`Addition:${num1+num2}`)//using the template string with ${} to represent the dynamic values in template string
console.log(`Addition:${num1-num2}`)//using the template string with ${} to represent the dynamic values in template string
console.log(`Addition:${num1/num2}`)//using the template string with ${} to represent the dynamic values in template string
console.log(`Addition:${num1*num2}`)//using the template string with ${} to represent the dynamic values in template string

//if we want to fetch the Number is Even ior Odd Number by using the modulo function
let number = 12//assigning the value 12 to the variable number
if(number%2==0){//checking the condition with modulo function
  console.log("number is Even")//printing to the console
}
else{//of condition not satisfied
  console.log("number is Odd")//printing to the console
}

//* short hand Math Operator:-+=,-=,*=,/=
let a=10//assigning 10 value to variable a
let b=20//assigning 20 value to variable b
let add=0//assigning 0 value to variable add
add=add+(a+b)
add+=(a+b)//using the short end Math Operator Over Here


//* comparison Operator:->=,<=,<,>,
let mark=35;//assign ign the 35 value to the variable mark
if (mark>=65){//checking the condition by >= symbol
  console.log("you Passed the exam")//printing to the console
}
else{//if condition not satisfied
  console.log("you failed the exam")//printing to the console
}
//* Logical Operator:-&&,||,^
/*
* &&:-T && T:-T else in other cases it is false
* ||:-F !!F:-False else in all other cases it is true
* T^F,F^T:-in these cases it is true else false
* */
let isRelkation=true
let isParentAgreed=false
if(isRelkation && isParentAgreed){
  console.log("get Married")
}
else{
  console.log("Wait")
}


//* unary Operator:++,--
let x=10//assign the 10 value to the variable x
//if we want to increment by only 1 then we can use the either short end Math Operator or Arithmetic Operator or Unary Operator
//but remember that Unary Operator only be used for incrementing or decrementing the value by 1
//using arithmetic operator
x=x+1//using the arithmetic operator + and assignment Operator
x+=1//using the short end Math Operator
x++//suing the  unary Operator
console.log(x)//printing the x value


//ternary Operator:- symbol:-?:
//syntax:-(condition)?=true:false
mark=65;
let message="";
(mark>=65)?message="you passed":message="you failed"
console.log(message)

//* Equality Operator:==,===
//==:-first conversion or type curation then comparison
//==:-only comparison
a=10;
b="10"
if(a==b){
  console.log("Equal Numbers")
}
else{
  console.log("Not Equal Number")
}
