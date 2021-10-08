var nums=prompt("Enter group of values as comma separated to see the sum ")
//variable nums with user input as prompt() which will be returned by string format
//variable with var keyword and semicolon is not mandetory so as the var keyword
//as the element entered are string in nature we need to conver that to Array object having string element
//For that we need split() with "," as the separator value
var n=nums.split(",");//creating a variable with name as n and array elements
var n1=[]
n.forEach(function(x){
n1.push(Number(x))
})
console.log(n1)
function max(n){//function with function keyword and function name and argument as array
minvalue=Infinity //here declarting a vartiable as max with value as -infinity
//-infinity is a keyword in javascript to represent the minimum number
for (var i=0;i<n.length;i++){
if (Number(n[i])<=minvalue){//checking whether the provided element is >-infinity or not
minvalue=n[i]//taking the max value as x[i] and again comparing
}
minvalue
}
return minvalue;///returning the max value
}
max(n)