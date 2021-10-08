//here first we need to import the brainHttp class
import {brainHttp} from "./api/brainHttp.js";//importing the custom fetch API class
const serverURL=`http://127.0.0.1:8900/api`
let getBtnEl=document.querySelector("#get-btn")
getBtnEl.addEventListener("click",()=>{
  let brainHt=new brainHttp()
  let url=`${serverURL}/employees`
  let getPromise=brainHt.get(url)
  getPromise.then((data)=>{
    // console.log(data)
    //document.querySelector("#table-body")
    fetchEmployee(data)
  }).catch((err)=>{
    console.error(err)
  })
})

let fetchEmployee=(data)=>{
  let empRow=""
  for(let d of data){
    empRow+=`<tr>
                    <td>${d.id}</td>
                    <td>${d.firstName}</td>
                    <td>${d.lastName}</td>
                    <td>${d.email}</td>
                    <td>${d.gender}</td>
                    <td>${d.ip_address}</td>
               </tr>`
  }
  document.querySelector("#table-body").innerHTML=empRow
}

//for the Post Request

//get the post button as:-
let postBtnEl=document.querySelector("#post-btn")
//adding the click event on the same
postBtnEl.addEventListener("click",()=>{
  let url=`${serverURL}/employees`
  let employee={
    firstName:"papali",
    lastName:"kar",
    email:"papali@gmail.com",
    gender:"male",
    ip_address:"127.0.0.23"
  }
  let brainHt=new brainHttp()
  let postPromise=brainHt.post(url,employee)
  postPromise.then((data)=>{
    brainHt.get(url).then((employees)=>{
      fetchEmployee(employees)
    })
  }).catch((err)=>{
    console.log(err)
  })
})

//for the put request
let putBtnEl=document.querySelector("#put-btn")
putBtnEl.addEventListener("click",()=>{
  let empId=`-12345`
  let url=`${serverURL}/employees/${empId}`
  let getUrl=`${serverURL}/employees`
  let employee={
    id:empId,
    firstName:"pupuli",
    lastName:"kar",
    email:"papalikar@gmail.com",
    gender:"male",
    ip_address:"255.255.255.23"
  }
  let brainHt=new brainHttp()
  let postPromise=brainHt.put(url,employee)
  postPromise.then((data)=>{
    brainHt.get(getUrl).then((employees)=>{
      fetchEmployee(employees)
    })
  }).catch((err)=>{
    console.log(err)
  })
})

//for the delete button
//fetching the del;ete button
let deleteBtnEl=document.querySelector("#delete-btn")
deleteBtnEl.addEventListener("click",()=>{
  let empId="-12345"
  let url=`${serverURL}/employees/${empId}`
  let getUrl=`${serverURL}/employees`
  let brainHt=new brainHttp()
  let deletePromise=brainHt.delete(url)
  deletePromise.then((data)=>{
    brainHt.get(getUrl).then((employees)=>{
      console.log(employees)
      fetchEmployee(employees)}).catch((err)=>{
      console.log(err)
    })
  })
})
