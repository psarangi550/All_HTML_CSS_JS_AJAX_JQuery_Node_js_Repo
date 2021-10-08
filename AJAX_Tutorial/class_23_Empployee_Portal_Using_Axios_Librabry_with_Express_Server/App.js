//here we are taking for the get method
const serverURL="http://127.0.0.1:8900/api"
//taking the common URL as the server URL in here
//now  on DOMContentLoaded we can use on the windows object to display all the info from the get method
window.addEventListener("DOMContentLoaded",()=>{
  fetchEmployee();
})
let fetchEmployee=()=>{//arrow function expression
  let url=`${serverURL}/employees`
  axios.get(url).then((response)=>{
    let employees=response.data
    // console.log(employees)
    let empRow=""
    for(let employee of employees){
      empRow+=`<tr>
                <td>${employee.id}</td>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.email}</td>
                <td>${employee.gender}</td>
                <td>${employee.ip_address}</td>
                <td>
                <button class="btn btn-sm mt-0 btn-warning update">update</button>
                <button class="btn btn-sm mt-0 btn-danger delete">Delete</button>
                </td>
               </tr>`
    }
    document.querySelector("#table-body").innerHTML=empRow
  }).catch((error)=>{
    console.log(error)
  })
}
//here we need to for the post method on the add Employee form submit
let employeeForm=document.querySelector("#employees-form")
//here we need ot add the submit event on the same
employeeForm.addEventListener("submit",(event)=>{
  event.preventDefault()//to stop the auto form submission
  $("#employee-modal").modal("hide");//hiding the modal after the form being filled and clicked on the submit button
  let url=`${serverURL}/employees`
  let employee={
                firstName:document.querySelector("#add-first-name").value.trim(),
                lastName:document.querySelector("#add-last-name").value.trim(),
                email:document.querySelector("#add-email").value.trim(),
                gender:document.querySelector("#add-gender").value.trim(),
                ip_address:document.querySelector("#add-ip-address").value.trim()
               }//creating the employee object with out id as the id will be added by the server getID()
  //now calling the axios post method
  axios.post(url,employee).then((response)=>{
    let result=response.data;
    console.log(result)
    fetchEmployee()//calling the fetchEmployee Method
  }).catch((error)=>{console.log(error)})
  clearFormField()//calling clearFormField() method
})
let clearFormField=()=>{
    document.querySelector("#add-first-name").value="",
    document.querySelector("#add-last-name").value="",
    document.querySelector("#add-email").value="",
    document.querySelector("#add-gender").value="",
    document.querySelector("#add-ip-address").value=""
}

//for the put method and get method will do click event on the table body and fetch the target element
//fetching the table body as
let tblBodyEl=document.querySelector("#table-body")
tblBodyEl.addEventListener("click",(event)=>{
  let targetElement=event.target
  //for here er need to fetch which type of target element is it
  if(targetElement.classList.contains("delete")){
    // console.log("delete Btn")
    //fetching the id of the deleted button
    let selectedElementId=targetElement.parentElement.parentElement.firstElementChild.innerText
    let url=`${serverURL}/employees/${selectedElementId}`
    axios.delete(url).then((response)=>{
      let result=response.data
      console.log(result)
      fetchEmployee()//calling the fetchEmployee Method
    }).catch((error)=>{
      console.log(error)
    })
    }
  if(targetElement.classList.contains("update")){
    // console.log("update Btn")
    //for the update method first we want the get method then we can call the put() method
    let selectedElementId=targetElement.parentElement.parentElement.firstElementChild.innerText
    let url=`${serverURL}/employees`
    axios.get(url).then((response)=>{
      let employees=response.data
      for (let employee of employees){
        if(employee.id===selectedElementId){
          document.querySelector("#update-id").value=employee.id,
          document.querySelector("#update-first-name").value=employee.firstName
          document.querySelector("#update-last-name").value=employee.lastName
          document.querySelector("#update-email").value=employee.email
          document.querySelector("#update-gender").value=employee.gender
          document.querySelector("#update-ip-address").value=employee.ip_address
          $("#update-employee-modal").modal("show")
        }

      }
    }).catch((error)=>{console.log(error)})
  }
})
//here now we need to provide the submit event on the updated -form
let updateEmpForm=document.querySelector("#update-employees-form")
updateEmpForm.addEventListener("submit", (event)=>{
  event.preventDefault();//to stop the auto form submission
  $("#update-employee-modal").modal("hide")
  let selected=document.querySelector("#update-id").value
  let url=`${serverURL}/employees/${selected}`
  console.log(url)
  let employee={
    id:document.querySelector("#update-id").value.trim(),
    firstName:document.querySelector("#update-first-name").value.trim(),
    lastName:document.querySelector("#update-last-name").value.trim(),
    email:document.querySelector("#update-email").value.trim(),
    gender:document.querySelector("#update-gender").value.trim(),
    ip_address:document.querySelector("#update-ip-address").value.trim()
  }
  axios.put(url, employee).then((response)=>{
    let result=response.data
    console.log(result)
    fetchEmployee()//calling the fetch Employee Method
  }).catch((error)=>{
    console.log(error)
  })
})
