/*
* in JSON Object we can Convert the JSON String Object to JSOn Object  or JSOn Object to String Object
* //whenever we are working with AJAX or Backend Data The Input will always come in  JSON string format and we have to
* convert that to the JS Object format so that we can perform some action with the JSON Object
* for that we have to use:-JSON String===> Object===>parse()
* for Object====> JSON String====>stringfy()
* */

let employee={//assigning the employee Object with properties and variable with value as js Object to the variable
  id:1,
  name:"pratik",
  course:"javascript",
  isActive:true
}
//if we want to convert into a String Object then we can use the Stringfy()
let empString=JSON.stringify(employee)//calling the Stringfy() on the JSOn Built in Object by passing the Object as argument
console.log(empString)//printint the return value to the console
//here we want top convert this String in to a JSON Object hence we can use the parse()
employee=JSON.parse(empString)//using the JSON Object parse method to convert the String the JSOn Object
console.log(employee)
