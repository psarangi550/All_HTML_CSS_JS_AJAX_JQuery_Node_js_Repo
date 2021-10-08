

//also we can add the axios.in.js file in here or we can use the CDN from the github library
//here i am using the axios.min.js and linking the same script in the html body before app.js as app.js been dependent on the same


//here we need to mention the common url as server URL
let serverUrl="http://127.0.0.1:8900/api"

//with axios Library fetching the data on button click
//fetching the getButton
let getBtnEl=document.querySelector("#get-btn")
//now applying the click event and corresponding listener function in the getBtnEl
getBtnEl.addEventListener("click", ()=>{
  fetchEmployee()//calling the fetchEmployee method
})
let fetchEmployee=()=> {
  let url = `${serverUrl}/employees`
  axios.get(url).then((response) => {
    let users = response.data
    // console.log(users)
    let empRow = ""//making the employee Row as empty so that we can append the same
    for (let user of users) {
      empRow += `<tr>
                    <td>${user.id}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.ip_address}</td>
               </tr>`
    }
    document.querySelector("#table-body").innerHTML = empRow
  }).catch((error) => {
    console.log(error)
  })
}

  //preparing the post() method for the same
//fetching the post button and applying the click event on the same
let postBtnEl=document.querySelector("#post-btn")
postBtnEl.addEventListener("click",()=>{
  //here we need 2 things one is URL and one is employee object creating both can calling the post method
  let url = `${serverUrl}/employees`
  let employee={
    firstName:"papali",
    lastName:"kar",
    email:"papali@gmail.com",
    gender:"male",
    ip_address:"127.0.0.15"
  }
  axios.post(url,employee).then((response)=>{
                    let info=response.data
                    console.log(info)
                    fetchEmployee()

  }).catch((error)=>{
    console.log(error)
  } )
})

//for the put method
//fetching the put button as
//preparing the post() method for the same
//fetching the post button and applying the click event on the same
let putBtnEl=document.querySelector("#put-btn")
putBtnEl.addEventListener("click",()=>{
  //here we need 2 things one is URL and one is employee object creating both can calling the post method
  let empId="-12345"
  let url = `${serverUrl}/employees/${empId}`
  let updatedEmployee={
    firstName:"Pratik",
    lastName:"Loser",
    email:"psarangi50@gmail.com",
    gender:"male",
    ip_address:"127.255.255.15"
  }
  axios.put(url,updatedEmployee).then((response)=>{
    let info=response.data
    console.log(info)
    fetchEmployee()
  }).catch((error)=>{
    console.log(error)
  } )
})

//putting the delete request Over here as
//same but only url being rrquired object not required
let deleteBtnEl=document.querySelector("#delete-btn")
deleteBtnEl.addEventListener("click",()=>{
  //here we need 2 things one is URL and one is employee object creating both can calling the post method
  let empId="-12345"
  let url = `${serverUrl}/employees/${empId}`
  axios.delete(url).then((response)=>{
    let info=response.data
    console.log(info)
    fetchEmployee()
  }).catch((error)=>{console
    console.log(error)
  } )
})

