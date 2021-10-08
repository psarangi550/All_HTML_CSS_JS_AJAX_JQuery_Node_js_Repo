//here we are fetching the JSOn Request
let jsonBtnElement=document.querySelector("#JSON-btn")
//fetching the button Element by the help of querySelector Method
//now we have to add the click event for this with EventListener
jsonBtnElement.addEventListener("click",()=>{
  //here first We need to create the XMLHttpRequest Object
  let xhr=new XMLHttpRequest();
  //we need to prepare the Ajax or XMLHttpRequest
  xhr.open("GET","Mobile.json",true)
  //open() on the Ajax Object with which operation whats the file location and whats the request tyope which is async in nature
  //step:-3:-we need to sent the request to the server by send() on the XMLHttpRequest object or Ajax Object
  xhr.send()//sending the request to the server
  //now the server will process the request and sent the response in the json for and we need to fetch that as thats developer responsibility
  //now we need to fetch once server provide the response in json format by using the onload() function
  xhr.onload=()=>{
    //here first we need to check the status as 200 or not using the status variable
    if(xhr.status===200){
      let data=xhr.responseText//using the responseText to fetcvh the response in the text format
      //if we print the data we can see the data been coming in the string JSON format
      console.log(data)//printing the data to the console
      console.log(typeof data)//fetching the type of data
      //this need to be converted to an Javascript Object from the string format by using the parse method on JSON predefined object
      let employee=JSON.parse(data)
      console.log(employee)//printing the Javascript Object to the console
      getJSON(employee)
    }
  }
  let getJSON=(employee)=>{
    let htmlElement=document.querySelector("#json-card")
    htmlElement.innerHTML=`<ul class="list-group mt-2">
                        <li class="list-group-iten list-group-item-action list-group-item-primary">ID:=>${employee.id}</li>
                        <li class="list-group-iten list-group-item-action list-group-item-secondary">Name:=>${employee.name}</li>
                        <li class="list-group-iten list-group-item-action list-group-item-warning">AGE:=>${employee.age}</li>
                        <li class="list-group-iten list-group-item-action list-group-item-light">Designation:=>${employee.designation}</li>
                        <li class="list-group-iten list-group-item-action list-group-item-success">Designation:=>${employee.isActive}</li>
                        </ul>`

  }

})

