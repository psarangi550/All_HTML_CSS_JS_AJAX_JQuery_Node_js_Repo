//now here we need to import the custom Api File of the AJAX
import {brainHttp} from "./api/brainHttp.js";

const serverURL=`http://127.0.0.1:8900/api`
//define the common url as server Url

//now we want to initiate the get request as soon as the page load
//for that we have the event as DomContentLoaded event which is the part of window object hence we need to call this even on the window object
window.addEventListener("DOMContentLoaded",()=>{//arrow callback function
  //as soon as the HTML Page Loaded then get request we want to make to the server
  fetchEmployee()//calling the fetchEmployee Method
  //which will be defined below
} )
let fetchEmployee=()=>{//arrow callback function
  let url=`${serverURL}/employees`//creating the url for the get Request
  //creating the object of brainHttp class
  let brainHt=new brainHttp()
  brainHt.get(url,(err,employees)=>{
    if(err)throw err
    console.log(employees)
    let empRow=""//making the empRow as empty so that we can append it
    for(let employee of employees){//using the for-of loop
      empRow+=`<tr>
                    <td>${employee.id}</td>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.email}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.ip_address}</td>
                    <td>
                    <button class="btn btn-warning btn-sm mt-0 update">Update</button>
                    <button class="btn btn-danger btn-sm mt-0 delete " >Delete</button>
                    </td>
                    <!--update and delete class will be explained Later-->
               </tr>`
      //now we need to add that to the table body
      document.querySelector("#table-body").innerHTML=empRow
      //selecting the HTML Element adding to the html body
    }
    //now we need to add that to the table body
    // document.querySelector("#table-body").innerHTML=empRow
    //selecting the HTML Element adding to the html body
  })

}

//here we need to create the same for the post operation using the for submit
//as soon as we click on the form we want to send a post request to the server and made the request
//for that grabbing the submit button for the same
let addEmpForm=document.querySelector("#employees-form")
//fetching the element by the help of query selector
//now we have to perform click event on the same
addEmpForm.addEventListener("submit",(event)=>{
  event.preventDefault()//to stop the auto form submission
  $("#employee-modal").modal("hide")//this is the jquery form so that once we fill the form and hit on the Add Employee button so that modal will close
  //this modal () been provided in the bootstrap.js file for which we need the jQuery file of bootstrap along with popper.js
  let url=`${serverURL}/employees`
  let employee= {//fetching the data provided from the form data
    //here we only need the firstName,lastName,email,gender and ip address but id will be created on the server side
    firstName: document.querySelector("#add-first-name").value.trim(),
    lastName: document.querySelector("#add-last-name").value.trim(),
    email: document.querySelector("#add-email").value.trim(),
    gender: document.querySelector("#add-gender").value.trim(),
    ip_address: document.querySelector("#add-ip-address").value.trim()
  }
  //creating the employee object which need to be passed while calling the POST method call using the BrainHttp class object
  //now in here we want to add a jquery code to close the add employee once we fill the data and click on add employee

  //after that we need the url and employee object to call the post() on the BrainHttp class object
  //for the url we can use the same url
  let brainHt=new brainHttp()//creating the Object of the API class
  brainHt.post(url,employee,(err,data)=>{
    if(err)throw err
    // console.log(data)//fetching the data to the console
    fetchEmployee();//calling the fetchEmployee Method-->already defined
    clearForm()//calling the  clearForm Method-->defining later

  })
})
//here we need to define the clearForm()
let clearForm = ()=>{//arrow function expression
      document.querySelector("#add-first-name").value="";
      document.querySelector("#add-last-name").value="";
      document.querySelector("#add-email").value="";
      document.querySelector("#add-gender").value="";
      document.querySelector("#add-ip-address").value="";
      // $("#employee-form").modal("hide")
}


//for the delete functionality


//for this we need to provide the clieck event on the total table
//we need to fetch which button been clicked based on that
//grabbing the table body  so that from here we can see which element been clicked
let tblBodyEl=document.querySelector("#table-body")
//fetching the table body and we need to perform the click event for the same in order to fetch which element been clicked
tblBodyEl.addEventListener("click",(event)=> {
  //here we need to check which element been clicked by the target variable
  let targetElement = event.target;
  //console.log(targetElement)//printing the target elemtn to the console
  if (targetElement.classList.contains("delete")) {
    let selectedEl = targetElement.parentElement.parentElement.firstElementChild.innerText
    // console.log(selectedEl)
    //here we need to provide the URL for the same
    let url = `${serverURL}/employees/${selectedEl}`
    //creating the Object of brainHttp Class
    let brainHt = new brainHttp() //creating the object of brainHttp class
    brainHt.delete(url, (data) => {
      console.log(JSON.stringify(data))
      fetchEmployee()//calling the fetEmployee Method
    })
  }
  if (targetElement.classList.contains("update")) {
    // console.log(targetElement)
    // console.log("no")
    // targetElement.addEventListener("click", () => {
      targetElement.setAttribute("data-toggle","modal")
      targetElement.setAttribute("data-target","#update-employee-modal")
      // console.log(targetElement)
      let selectedEl = targetElement.parentElement.parentElement.firstElementChild.innerText
      let url = `${serverURL}/employees/`
      let brainHt = new brainHttp()
      brainHt.get(url, (err, employees) => {
        if (err) throw err
        for (let employee of employees) {
          if (employee.id === selectedEl) {

            // console.log(employee)
            document.querySelector("#update-id").value=employee.id
            document.querySelector("#update-first-name").value=employee.firstName
            document.querySelector("#update-last-name").value=employee.lastName
            document.querySelector("#update-email").value=employee.email
            document.querySelector("#update-gender").value=employee.gender
            document.querySelector("#update-ip-address").value=employee.ip_address
          }

        }
      })


    // })
    //
    // //   targetElement.setAttribute("data-toggle","modal")
    // //   targetElement.setAttribute("data-target" ,"#employee-modal")
    // //
    // //   // console.log()
    // //   let result=targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.textContent
    // //   document.querySelector("#add-first-name").value=result
    // //   document.querySelector("#add-last-name").value=targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent
    // //   document.querySelector("#add-email").value=targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent
    // //   document.querySelector("#add-ip-address").value=targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent
    // //   if(targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent=="male"){
    // //     document.querySelector("#add-gender").value="male"
    // //   }
    // //   else{
    // //     document.querySelector("#add-gender").value="female"
    // //   }
    // //

  }
})

let updateEmpForm=document.querySelector("#update-employees-form")
updateEmpForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  $("#update-employee-modal").modal("hide")
  let url=`${serverURL}/employees/${document.querySelector("#update-id").value}`
  let employee={
    id:document.querySelector("#update-id").value,
    firstName:document.querySelector("#update-first-name").value,
    lastName:document.querySelector("#update-last-name").value,
    email:document.querySelector("#update-email").value,
    gender:document.querySelector("#update-gender").value,
    ip_address:document.querySelector("#update-ip-address").value
  }
  let brainHt=new brainHttp()
  brainHt.put(url,employee,(data)=>{
    console.log(JSON.stringify(data))
    fetchEmployee()
  })
})




