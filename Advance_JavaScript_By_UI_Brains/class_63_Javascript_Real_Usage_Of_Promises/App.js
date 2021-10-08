//real time usage of promises
let employees=[{id:1,name:"pratik",age:40},
                {id:2,name:"Rika",age:24}]
//here we want to go through the promise concept
//here instead of call back last time we have to use the promises concept
let createEmployee=(employee)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      employees.push(employee)
      let isDone=true;
      if(isDone==true){
        resolve()
      }
      else{
        reject("Something went wrong")
      }
    },2000)

  })
}

let getEmployees=()=>{
  return new Promise((resolve,reject)=>{
      let fetchEmp=true
      if(fetchEmp==true){
        resolve()
      }
      else{
        reject("Something went wrong")
      }
  })
}


let createEmp=createEmployee({id:1,name:"papali",age:28})

createEmp.then( ()=>{
  getEmployees().then(()=>{
    setTimeout(()=>{
      let empRow=""
      for(employee of employees) {
        empRow+=`<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
             </tr>`
        document.querySelector("#table-body").innerHTML=empRow
      }
    },1000)
  }).catch((message)=>{console.log(message)})
}).catch((message)=>{console.log(message)})

