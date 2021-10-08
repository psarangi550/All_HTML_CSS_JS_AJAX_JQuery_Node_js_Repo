//calling the promises concept simply with the callback
//this is a function with 2 callback function success and failure
//here the taskDone is the promises concept of js
//here we are not using the promises object  (simply for our understanding)
let taskDone=(success,failure)=>{//taskDone Promise method taking 2 callback function success and failure as argument
  //doing some task
  let isTaskDone=false;//assigning the true value to the isTaskDone variable
  //this task done will decide whrther to call the success call back or failure call back function
  //here we need to check whether promises been done or not
  if(isTaskDone==true){
    //if the promises been kept and task been done
    success("Task Been done")//calling the success call back function with string as parameter which need to be define while calling the function
  }
  else{
    failure("task is not Done")//calling the failure callback function with with string argument which we need to display to console and string we need to take as parameter while defining the function
  }
}
//now we need to call the promise function which is taskDone
//we can define the function predefined or we can create it ober here
//here in the case :-1 i am creating the function passing the function as argument
//in the case 2 i will directly create the function in the promises function call
let resolve=(message)=>{//arrow function expression taking the string message as an argument
  console.log(message)//printing the mesaage which is passed as an string argument to the function
}
let issue=(message)=>{//arrrow function expression taking the string message as an argument
console.error(message)//printing the parameter message to the console
}
taskDone(resolve,issue)//this is the first approach

//in the 2nd approch we are calling the function directly while calling the function
taskDone((message)=>{
  console.log(message)
},(message)=>{
  console.error(message)
})

//in the both the way i am expecting the result as Task Been done


//if we set the value to false in that case we will get the output as error message saying task is not Done
