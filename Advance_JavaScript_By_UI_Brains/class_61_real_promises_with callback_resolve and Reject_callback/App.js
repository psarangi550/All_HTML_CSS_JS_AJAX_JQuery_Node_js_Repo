//here we are using the real promises with promise object and resolve and reject callback function
let cameraClean=new Promise((resolve,reject)=>{
  //here we need to declare which task we want to perform
  let iscameraClean=false//setting the camera clean as true
  if(iscameraClean){//if the promises been kept and camera clean been done then we can call the resolve method
    resolve("Task Been done")
    //calling the resolve call back function using the string as an argument
  }
  else{
    reject("Task is not done")
    //calling the reject callback function with string argument
  }
})//creating the new Promise object
//while creating the promise object we will have to pass a call back function with 2 callback function reject and resolve as parameter

//here in order to call the promises as the object being created we have to use promise object name.then().catch()
//inside the then we need to define the resolve method and inside the catch we need to declare the reject function

//here we are first creating the reject and resolve function and passing the function as argument for the then and catch method:-case
//this is the case:-1 approach on the next attempt we will directly call the method inside the then() and catch()

//here in the first approach declaring the resolve() as success() and then passing as the args for the then ()

let success=(message)=>{//arrow function expression with message as argument
  console.log(message)//printing the message passed as argument to the console to the console
}

//similarly creating the reject as issue() callback function and the passing the issue call back function inside catch()
let issue=(message)=>{
  console.error(message)//printing the message to the console
}

cameraClean.then(success).catch(issue)//passing the success ans issue call back function which will behave as resolve and reject method


//by the 2nd approach using the Arrow function to directly call the reject and resolve function in catch and then()

cameraClean.then((message)=>{//calling the message as argument as string value
  console.log(message)//printing the message to the console
}).catch((message)=>{//calling the message as argument as string value
  console.error(message)//printing the message to the console
})

//in both the cases i am expecting the result as task been done


//if we make the isCameraClean as false we should get the error message saying task is not done
