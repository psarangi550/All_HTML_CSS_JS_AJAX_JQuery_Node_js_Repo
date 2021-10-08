//here fetching the same example of create Employee and getEmployee using the async await concept
let employees=[{id:1,name:"pratik",age:40},
               {id:2,name:"Rika",age:24}]
//employee array of objects
//here creating a function for the createEmployee
let createEmployee=(employee)=>{
  //taking the employee object into the parameter
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
  employees.push(employee)//adding the employee object to employees array
    let isDone=true
    if(isDone){
      resolve()
    }
    else{
      reject()
    }
  },2000)//delaying it for 2000 milli seconds
  })
}
let getEmployee=()=>{
  setTimeout(()=>{
  let empRow=""//taking the empty objects for the employeeRow Variable
  employees.forEach((e)=>{
    empRow+=`<tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
             </tr>`
    document.querySelector("#table-body").innerHTML=empRow
  })
  },1000)
}

let init= async ()=>{
  await createEmployee({id:1,name:"Papali",age:28})//here we are using the await keyword to complete createEmployee first
  getEmployee()//calling the get Employee Method
}
init()//calling the init function
