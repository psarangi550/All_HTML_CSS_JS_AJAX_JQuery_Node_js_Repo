//using the call back function over here
let sum=(a,b)=>{
  return (a+b)
}
let mul=(a,b)=>{
  return(a*b)
}
let calculate=(a,b,c)=>{
  return c(a,b)
}
//calling the function
let output=calculate(10,20,mul)
console.log(output)
//calling the other functi
output=calculate(10,20,sum)
console.log(output)
//calling a separated function apart from the function defined while calling the other function as below
output=calculate(10,20,(a,b)=>{
  return (a/b);
})
console.log(output)
