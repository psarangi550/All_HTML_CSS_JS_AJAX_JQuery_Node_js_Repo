//1.function with object as an args/parameter
let printObject=function(obj){//function expression with Object as Parameter
  console.log(obj)//printing thw object to the console
}
//1st Approach:-By directly providing the Object value as argument while calling the Function
printObject({name:"rajan",age:20})
//2nd Approach By defining the Object first and then calling the  Function by passing the Object as an argument
let Mobile={//variable mobile with Object as Value
  brand:"Apple",//properties/variable with value
  price:35000,//properties/variable with value
  color:"silver"//properties/variable with value
}
printObject(Mobile)//calling the Print Object Method by passing the object as argument



//2:-Same goes for the Array as well
let printArray=function(arrayParam){//function expresion with array as argument
  //let result=""//assigning the empty String to the variable result
  for(index in arrayParam){//using the for in loop which will provide the index for the array function
    console.log(`INDEX:  ${index} => VALUE: ${arrayParam[index]} `);

    //using the result with short end Math Operator with dynamic value inside the template string
  }
  // console.log(result)//printing the returned value to the console
}
//1st way:-we can pass the array val;ue as args while calling the function
printArray([10,20,30,40])
//2nd Way we can declare the Array first and then pass the variable name assigned to the Array as an argument to the function
color=["white","black","yellow","red","green","blue"]
//calling the function with variable name as argument for the function
printArray(color)


//3:-Object with function inside
// let name={
//   firstName:"Arjun",
//   lastName:"ready",
//   fullname:function(){
//     return "Arjun Reddy"
//   }
// }
// //if we are trying to access the function then we will get the function as output
// console.log(name.fullname)//here we will get thwe function as output
// console.log(name.fullname())// we will get the Answer as Arjun reddy

// this keyword used for accessing the current object Property in the object function of we need
//if we want to use the properties/variable or value of the Object inside the object function then we have to use the this keyword
//this keyword used for the current object property

//Example:-
let name={
  firstName:"Arjun",
  lastName:"ready",
  fullname:function(){
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(name.fullname())//calling the Object function with the varaible its been assigned to

//3.Nested function
//we can take function inside the another function
//but for a function declaration will happen first then we are able to call the function
//if we are calling the function with out declaring then we will end up getting error
//ex:-
// let outerFn=function(){//function expression with out argument
//   console.log("i am an Outer Function")//printing to the console
//   let innerFn=function(){//function expression with out argument
//     console.log("i am an Inner Function")//printing to the console
//   }//closing the innerFn
//   }//closing the outerFn
//if we are calling the Method we onl;y get the result as " i am an Outer Function " as we just declare the inner function not calling the inner function


//case:-2
//calling the inner function
// let outerFn=function(){//function expression with out argument
//   console.log("i am an Outer Function")//printing to the console
//   let innerFn=function(){//function expression with out argument
//     console.log("i am an Inner Function")//printing to the console
//   }//closing the innerFn
//   innerFn()//calling the inner function
// }//closing the outerFn
//calling the outerFn
outerFn()//as here part of Outer function we are calling the inner function hence inner function will going to be get executed
//O/P:-
// i am an Outer Function
// i am an Inner Function


//case:-3:-
//if we call the inner function before declaring in that case we will get the error
//as a function should always declared first then only it can be called

//case:-2
//calling the inner function
let outerFn=function(){//function expression with out argument
  console.log("i am an Outer Function")//printing to the console
  innerFn()//calling the inner functionbefore declaring
  let innerFn=function(){//function expression with out argument
    console.log("i am an Inner Function")//printing to the console
  }//closing the innerFn
}//closing the outerFn
//calling the outerFn
outerFn()//as the innerFn called before even declared in this case we will end up getting error
//o/p:-ReferenceError: Cannot access 'outerFn' before initialization
