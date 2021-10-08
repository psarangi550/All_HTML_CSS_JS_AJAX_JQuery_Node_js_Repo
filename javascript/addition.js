var nums=prompt("Enter group of values as comma separated to see the sum ")
//variable nums with user input as prompt() which will be returned by string format
//variable with var keyword and semicolon is not mandetory so as the var keyword
//as the element entered are string in nature we need to conver that to Array object having string element
//For that we need split() with "," as the separator value
var n=nums.split(",");//creating a variable with name as n and array elements
// var n1=[]//variable with empty Array
// n.forEach(function(x){
// n1.push(Number(x))
// })
// console.log(n1);
function add(n){//function with function keyword and fuynction name as add and n as array as argument
var result=0;//taking the result as 0
for(var i=0;i<n.length;i++){//for loop with initializing the i value and condition checking and incrementing the value
result=result+Number(n[i])//converting the string to number adding it to the result
}//closing the for loop
return result;//returning the final result
}//closing the function
//calling the function
add(n);
210