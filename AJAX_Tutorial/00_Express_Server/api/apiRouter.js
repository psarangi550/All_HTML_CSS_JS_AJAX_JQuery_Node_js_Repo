//here also we need to import the express module but this time we need to initialize the Router not the module
const express=require("express");
//we need to initialize the Router() on the express variable
const router=express.Router()//using the Router function we are initializing the apiRouter
let employees=[//array of objects
  {
    id:"-12345",
    firstName:"pratik",
    lastName:"sarangi",
    email:"psarangi50@gmail.com",
    gender:"male",
    ip_address:"127.0.0.1/3000"

  },
  {
    id:"-34568",
    firstName:"abismruta",
    lastName:"sarangi",
    email:"rika1997@gmail.com",
    gender:"female",
    ip_address:"127.0.0.1/8080"

  }
]

//fetching the get request in here
router.get("/employees",(request,response)=>{
  response.json(employees)
  console.log(`Get Request Successful on ${new Date().toLocaleTimeString()}`)
})

let getID=()=>{
  let result="_"
  for(let i=0;i<6;i++){
    result+=Math.floor((Math.random()*6))
  }
  return result
}


//adding the employee object to the array of objects using the post method where data need to be fetched from the client browser which been submitted by paranter
router.post("/employees",(request,response)=>{
  let employee={
    id:getID(),
    firstName:request.body.firstName,
    lastName:request.body.lastName,
    email:request.body.email,
    gender:request.body.gender,
    ip_address:request.body.ip_address
  }
  employees.push(employee)
  console.log(`POST Request starts at ${new Date().toLocaleTimeString()}`)
  response.json({msg:"POST request Successful"})
})

//now we are putting the put request by
router.put("/employees/:id",(request,response)=> {
  let empId = request.params.id//fetching the parameter
  let updateEmployee = {
    id: request.params.id,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    gender: request.body.gender,
    ip_address: request.body.ip_address
  }
  let existingEmployee = employees.find((employee) => {
    return employee.id === request.params.id
  })
  employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee)
  console.log(`PUT Request starts at ${new Date().toLocaleTimeString()}`)
  response.json({msg: "PUT request Successful"})

//for the delete request we have few code same as put but insted of find() we are using the filter()


//now we are putting the put request by
  router.delete("/employees/:id", (request, response) => {
    let empId = request.params.id//fetching the parameter
    employees = employees.filter((e) => {
      return e.id !== empId
    })
    console.log(`Delete Request starts at ${new Date().toLocaleTimeString()}`)
    response.json({msg: "Delete request Successful"})
  })
//then we need to export this to entry point and configure the intial roiute for the same
  module.exports = router;
})
