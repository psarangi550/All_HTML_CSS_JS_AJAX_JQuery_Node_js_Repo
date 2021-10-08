import {brainHttp} from "./api/brainHttp.js";
//importing the brainHttps class

const serverURL="http://127.0.0.1:8900/api"

//when the DOM Content Being Loaded then
//when the page being loaded we want to get the data from the express server using out custom API class
window.addEventListener('DOMContentLoaded',()=>{//arrow listener function
  //for that we need the URL and also we need to import the brainHttp class
  fetchEmployee()//calling the fetch Employee method
} )
let fetchEmployee=()=>{
  let url=`${serverURL}/employees`
  //fetching the URL in here
  brainHttp.get(url).then((data)=>{
    let employees=data
    let empRow=""//assigning the empty string to empRow variable
    for(let employee of employees){
      empRow+=`<tr>
                    <td>${employee.id}</td>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.email}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.ip_address}</td>
                    <td>
                    <button class="btn btn-warning btn-sm mt-0 update">Update</button>
                    <button class="btn btn-danger btn-sm mt-0 delete">Delete</button>
                    </td>
               </tr>`
    }
    document.querySelector("#table-body").innerHTML=empRow
  }).catch((err)=>{
    console.error(err)
  })
}
//now we need to go for the post request
//now whenever the employee click on the add Employee form then the post method need to be executed
let updateEmpForm=document.querySelector("#employees-form")
//putting the submit request for the same
updateEmpForm.addEventListener("submit",(event)=>{
  event.preventDefault()//for stopping the auto form submission
  $("#employee-modal").modal("hide")//hiding the modal by the jQuery snippet of bootstrap jquery fetch in getBootstrap.com
  //here we need to mention the employee modal as the selector
  //now we need to configure the url and Employee Object
  let url=`${serverURL}/employees`
  let employee={
    firstName:document.querySelector("#add-first-name").value.trim(),
    lastName:document.querySelector("#add-last-name").value.trim(),
    email:document.querySelector("#add-email").value.trim(),
    gender:document.querySelector("#add-gender").value.trim(),
    ip_address:document.querySelector("#add-ip-address").value.trim()
  }
  brainHttp.post(url,employee).then((data)=>{//handling the promise object resolve method in the then() passing the same data as argument
    console.log(data)
    fetchEmployee()//calling the fetchEmployee Method
  }).catch((err)=>{
    console.error(err)
  })
  clearFormField()//calling the clearFormField Method
})
let clearFormField=()=>{//arrow function expression
  document.querySelector("#add-first-name").value="",
    document.querySelector("#add-last-name").value="",
    document.querySelector("#add-email").value="",
    document.querySelector("#add-gender").value="",
    document.querySelector("#add-ip-address").value=""
}
//for the delete and update button
//for the put request we need to put the click event on the table body
//from this using the target variable fetching the target Element
let tablBodyEl=document.querySelector("#table-body")
//here we want to see the click event on tha table body
tablBodyEl.addEventListener("click", (event)=>{
  //here we are taking the event object as the argument so that we can fetch the target element
  let targetElement=event.target//fetching the target element by target variable
  //if it is having the samrTarget element then we can distinguish between the update and delete button with out custom button
  //if the custom class update been selected then its update button
  //if the custom class delete been selected then its delete button
  //by using classList.contains("class") we can fetch the which button been clicked
  if(targetElement.classList.contains("delete")) {//checking for the delete button class
    // console.log("delete button")
    //here we need to fetch the id and from the ID we need to create the URL and call the delete static method with url as parameter
    let selectedElementId=targetElement.parentElement.parentElement.firstElementChild.innerText
    let url=`${serverURL}/employees/${selectedElementId}`
    // console.log(url)
    //here we can now call the display method with url as argument
    brainHttp.delete(url).then((data)=>{
      console.log(data)//printing the outpyut to the client browser console from the response what we got from the server
      fetchEmployee()//calling the fetchEmployee method
    })
  }
  if(targetElement.classList.contains("update")) {//checking for the updater button class
    // console.log("update button")
    //here for the updateRequest we need to have the get request first then we can go for the update Request
    //getting the element from the server
    let url=`${serverURL}/employees`
    let selectedElementId=targetElement.parentElement.parentElement.firstElementChild.innerText
    ///here we need to fetch which of the update button been clicked by using the corresponding id attribute
    brainHttp.get(url).then((data)=>{
      let employees= data
      let filterEmployee=employees.find((employee)=>{
        return employee.id===selectedElementId
      })
      //here we need to call the function to display to modal
      createUpdateModal(filterEmployee)//calling the createUpdateModal() method
    }).catch((err)=>{
      console.log(err)
    })
    //here defining the createUpdateModal method to display the update modal
    let createUpdateModal=(filterEmployee)=>{//arrow function expression
      document.querySelector("#update-id").value=`${filterEmployee.id}`
      document.querySelector("#update-first-name").value=`${filterEmployee.firstName}`
      document.querySelector("#update-last-name").value=`${filterEmployee.lastName}`
      document.querySelector("#update-email").value=`${filterEmployee.email}`
      document.querySelector("#update-gender").value=`${filterEmployee.gender}`
      document.querySelector("#update-ip-address").value=`${filterEmployee.ip_address}`
      //here we need to display the modal hence using the jquery Snippet for the update modal
      $("#update-employee-modal").modal("show")

    }

  }
})
//here we need to delcare the update Form submission code as
let updateElementForm=document.querySelector("#update-employees-form")
updateElementForm.addEventListener("submit",(event)=>{
  event.preventDefault()//to stop the auto form submission
  $("#update-employee-modal").modal("hide")//tp hide the updateModal once the details been modified
  let url=`${serverURL}/employees/${document.querySelector("#update-id").value}`
  let employee={
    id:document.querySelector("#update-id").value,
    firstName:document.querySelector("#update-first-name").value,
    lastName:document.querySelector("#update-last-name").value,
    email:document.querySelector("#update-email").value,
    gender:document.querySelector("#update-gender").value,
    ip_address:document.querySelector("#update-ip-address").value
  }
  brainHttp.put(url,employee).then((data)=>{
    console.log(data)
    fetchEmployee()//calling the fetch Employee Method to display
  }).catch((err)=>{
    console.log(err)
  })
})


