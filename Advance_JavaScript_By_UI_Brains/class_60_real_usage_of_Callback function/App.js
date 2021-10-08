// //employees is the array of object where we try to add the employee to the Array of Object by createEmployee() and fetch the Employee withgetEmployee method
// let employees=[{id:1,name:"john",age:40},
//                 {id:2,name:"laura",age:28} ]
// //employees array of objects
// //here we want to add the employee object to the array with create employee method
// //but each employee creation will take 2000ms i.2 2 seconds
// //using the setTimeout() function for the same
// let createEmployee=(employee)=>{//arrow function expression taking employee object as an argument
//   setTimeout(()=>{
//     employees.push(employee)//adding the employee object passed while calling the create employee method to the Array using the push method
//   },2000)//it will wait for 2000ms or 2 seconds to execute the program as we used the setTimeOut function
// }
// let getEmployee=()=>{//arrow function expression for calling getEmployee method
//   //here want to fetch all the employee in the array and add to the table body of the html \
//   //let suppose this fetching process take 1 seconds of the time then
//   //using the setTimeout() for 1 sec or 1000ms
//   setTimeout(()=>{
//     let eachRow=""//assigning the empty string to the variable eachRow
//     for(employee of employees){//for of loop where employee is the local to the for-off loop
//       eachRow+=`<tr><!-Adding to the table tow all these html file -->
//                 <td>${employee.id}</td>
//                 <td>${employee.name}</td>
//                 <td>${employee.age}</td>
//               </tr>`
//       document.querySelector("#table-body").innerHTML=eachRow
//     }
//   },1000)
//
// }
// //now calling the createEmployee method passing the employee objects in to it
// createEmployee({id:3,name:"Pratik",age:30})
// //fetching All the employee object as
// getEmployee()//calling the getEmployee method

//case:2 using the call-back function to see the entire data
//as the createEmployee Method taking 2 sec and getEmployee method taking only one 1 sec hence the getEmployee() executed prior to the createEmployee method to add the Employee object in to the array
//hence in the output we only get two results out of 3 what we have expected
//to remove this issue we can use the call back method
//hence in this case we can use the call back function
//first the callback function should execute and getEmployee() should wait for the completion of createEmplioyee class
//here using the call back function in the create Employee method where we have to use the getEmployee method as the call back function
//callback function are the function which passed an argument to another function and need to be called back once the required process being enbd


//employees is the array of object where we try to add the employee to the Array of Object by createEmployee() and fetch the Employee withgetEmployee method
let employees=[{id:1,name:"john",age:40},
  {id:2,name:"laura",age:28} ]
//employees array of objects
//here we want to add the employee object to the array with create employee method
//but each employee creation will take 2000ms i.2 2 seconds
//using the setTimeout() function for the same
let createEmployee=(employee,callback)=>{//arrow function expression taking employee object as an argument
  setTimeout(()=>{
    employees.push(employee)//adding the employee object passed while calling the create employee method to the Array using the push method
    callback();//calling the call back function
  },2000)//it will wait for 2000ms or 2 seconds to execute the program as we used the setTimeOut function


}
let getEmployee=()=>{//arrow function expression for calling getEmployee method
  //here want to fetch all the employee in the array and add to the table body of the html \
  //let suppose this fetching process take 1 seconds of the time then
  //using the setTimeout() for 1 sec or 1000ms
  setTimeout(()=>{
    let eachRow=""//assigning the empty string to the variable eachRow
    for(employee of employees){//for of loop where employee is the local to the for-off loop
      eachRow+=`<tr><!-Adding to the table tow all these html file -->
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
              </tr>`
      document.querySelector("#table-body").innerHTML=eachRow
    }
  },1000)

}
//now calling the createEmployee method passing the employee objects in to it
createEmployee({id:3,name:"Pratik",age:30},getEmployee)//here emember that getEmployee method pass as an argument not xcalling the function

//fetching All the employee object as creteEmployee passing the getEmployee method as an argument which behabve as the callback function
// getEmployee()//calling the getEmployee method
//here in this case we will get the result as 3 employee first the program will wait for 2 seconds after that it will add the employee to the array then try to fetch the getEmployee method
