//now we need to import the express module in here
const express = require('express')
//we need to start the router as
const router=express.Router()

//now here we are writing the concept for the GET Method

let employees=[
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

//rest Api Calls:-

//for the get request
router.get("/employees",(request,response)=>{
  response.json(employees)
  console.log(`GET Request Successful on ${new Date().toLocaleTimeString()}`)
})

//defining the getID()

let getID=()=>{
  let result="_"
  for(let i=0;i<6;i++){
    result+=Math.floor((Math.random()*6))
  }
  return result
}

//for the post request

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
  console.log(`Post Request Occurred Successfully on ${new Date().toLocaleTimeString()}`)
  response.json({msg:"Post Request Successful"})
})

//put request:
router.put("/employees/:id",(request,response)=>{
  let empID=request.params.id;
  let updateEmployee= {
    id: empID,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    gender: request.body.gender,
    ip_address: request.body.ip_address
  }
  let existingEmployee=employees.find((employee)=>{
    return employee.id===empID
  })
  employees.splice(employees.indexOf(existingEmployee),1,updateEmployee)
  console.log(`Put Request Occurred Successfully on ${new Date().toLocaleTimeString()}`)
  response.json({msg:"Put Request Successful"})
})

//to delete an Employee
router.delete("/employees/:id",(request,response)=> {
  let empID = request.params.id;
  employees=employees.filter((employee)=>{
    return employee.id !==empID
  })
  console.log(`Delete Request Occurred Successfully on ${new Date().toLocaleTimeString()}`)
  response.json({msg:"Delete Request Successful"})
})


//export this apiRouter to entry file app.js
module.exports=router;
