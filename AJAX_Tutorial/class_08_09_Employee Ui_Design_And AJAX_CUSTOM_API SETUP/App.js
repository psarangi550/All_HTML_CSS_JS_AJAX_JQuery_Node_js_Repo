//importing the Custom API of Ajax
import {brainHttp} from "./api/brainHttp.js";

//Now we need to fetch the GET Button for the GET Request
let getBtnEl=document.querySelector("#get-btn")
//fetching the Element by the query selector

//for the post button
let postBtnEl=document.querySelector("#post-btn")
//fetching the Element by the query selector

const commonURL="http://127.0.0.1:8900/api"//taking the comman part of the employee

//now we need to perform the addEventListen On the Same
getBtnEl.addEventListener("click", ()=>{
  fetchEmployee()//calling the fetchEmployee method
})


let fetchEmployee=()=>{
    //here we need top use the AJAX Custom API that we have configured
    let url=`${commonURL}/employees`
    let brainHt=new brainHttp()
    brainHt.get(url,(err,employees)=>{
      if(err!==null){
        console.log(err)
      }
      let empRow=""
      for( let employee of employees){
        empRow+=`<tr>
                   <td>${employee.id}</td>
                   <td>${employee.firstName}</td>
                   <td>${employee.lastName}</td>
                   <td>${employee.email}</td>
                   <td>${employee.gender}</td>
                   <td>${employee.ip_address}</td>
                </tr>`
      }
      document.querySelector("#table-body").innerHTML=empRow
    })

}

postBtnEl.addEventListener("click",()=>{
  let url=`${commonURL}/employees`
  let brainHt=new brainHttp()
  let employee={firstName:"papali",lastName:"kar",email:"papali@gmail.com",gender:"male",ip_address:"127.0.0.19"}
  brainHt.post(url,employee,(err,result)=>{
    if(err) throw err
    alert(result)
    fetchEmployee()
  })
})

//for the put Button
let putBtnEl=document.querySelector("#put-btn")
//selecting the putElement Button by Query selector
//adding the click event onto it
putBtnEl.addEventListener("click",()=>{
  //here we need to configure the URL first and followed by employee data and then callback function
  let empId="-12345"
  let url=`${commonURL}/employees/${empId}`
  let employee={
    id:empId,
    firstName:"pratik",
    lastName:"loser",
    email:"pratikksarangi@gmail.com",
    gender:"male",
    ip_address:"255.255.255.255"
  }
  let brainHt=new brainHttp()//creating the object of brainHttp class
  brainHt.put(url,employee,(result)=>{
    alert(JSON.stringify(result))//converting to JSOn ans Sending the alert to end User
    fetchEmployee()//calling the fetchEmployee method
  })

})

//putting the delete request for the Same

//fetching the delete button using the document object and querySelector method
let delBtnEl=document.querySelector("#delete-btn")
//preparing the click event for the same
delBtnEl.addEventListener("click",()=>{//arrow callback function
  let empId="-12345"
  let url=`${commonURL}/employees/${empId}`
  let brainHt=new brainHttp()//creating the object for the same
  brainHt.delete(url,(result)=>{
    alert(JSON.stringify(result))//alerting to the end user
    fetchEmployee()//calling the fetch employee method
  })
})
