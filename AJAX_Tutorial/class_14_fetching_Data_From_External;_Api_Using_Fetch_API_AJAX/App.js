//here we are fetching from the external API using the FetchAPI
//fetching the external Api Button
let apiBtnEl=document.querySelector("#API-btn")
//adding the click event for the Same
apiBtnEl.addEventListener("click", ()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    if(response.status !==200){
      console.log("Something went wrong")
    }
    response.json().then((data)=>{
      console.log(data)
      let empRow=""
      for(let d of data){
        empRow+=`<ul class="list-group mt-3">
                 <li class="list-group-item list-group-item-action list-group-item-success"> Name:${d.name}</li>
                 <li class="list-group-item list-group-item-action list-group-item-primary">UserName: ${d.username}</li>
                 <li class="list-group-item list-group-item-action list-group-item-secondary">Email:${d.email}</li>
                 <li class="list-group-item list-group-item-action list-group-item-warning">phone:${d.phone}</li>
                 </ul>`
        document.querySelector("#xml-card").innerHTML=empRow
      }
    })
  })

})
