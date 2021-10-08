//we can also assign a function as a value to a variable which is known as function expression
//we can access the function execution by the variable name which we assigned the function to
//if we print the variable then we will be able to see the whole function in the console
//if we want to execute the function then we need to declare the variable as function calling
let wishMe=function(){
  console.log("Good Morning ")
}
//calling the function as below
console.log(wishMe)//printing the variable where the function been assigned to
wishMe()//calling through declaring a variable as method name



//2.if we are not passing any argument to a function expression which declare the parameter for the function
//then in that case we will not get any error rather we will get undefined as an answer
let greetMe=function(name,age){//function expression with parameter
  let msg=` Hello, ${name} , You are ${age} years Old `//using the dynamic value in the template String to assign the value to a variable
  console.log(msg)//printing to the console
}
greetMe("pratik")//calling the function by providing onl;y one parameter value
// O/P:-Hello, pratik , You are undefined years Old
greetMe("pratik" ,40)//calling the function by providing both parameter value
// O/P:-Hello, pratik , You are 40 years Old
greetMe(40 ,"pratik")//calling the function by providing both parameter value
// O/P:-Hello, 40 , You are pratik years Old



//3:-if the function returning something we need to catch it then print in order to display it to console
//if we are not catching and printing to the console in that case we will not get the output
//we can catch it by assigning the returned value to variable and printing it later
let sum=function(a,b){//function expression with parameter
  let result=2*(a*b)//assigning the values to the variable result
  return result//returning the result
}
sum(10,20)//if we are calling the function then we will not be able to get the info as we are not catching the returned value
//but if we catch it by assigning to a variable then we can be able to print it
let output=sum(10,20)//asigning the returned value of the function to a variable in order to catch
console.log(output)//printing  the variable value
