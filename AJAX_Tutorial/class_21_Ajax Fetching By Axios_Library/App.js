//using axios library we need to fetch text data
//for that we need to include the axios.min.js file from the github link while searching for axios library in google
//if we want to do it throughout axios library we need to link the axios library before the app.js in the HTML file
//here now we have to grab the text button and start the click event on the same
let textBtnEl=document.querySelector("#text-btn")
textBtnEl.addEventListener("click", ()=>{
  //here we are calling the function to keep the code module can also be done in here
  fetchEmployee()//calling the fetchEmployee Method which been described just below
})
let fetchEmployee=()=>{//arrow function expression
  axios.get('./data/message.txt').then((response)=>{
    if(response.status !==200){//here the status of the response not being 200 then
      console.log("Something  went wrong")//printing to the console
      return;//if the status not 200 return back to the function from the if block
    }
    //if the status is 200 then
    let users=response.data
    //fetching all the data in the text format
    //console.log(users)//printing to the console
    //Now we need to display this to the cards which can be done by
    document.querySelector("#text-card").innerHTML=`<h3>${users}</h3>`
  }).catch((error) => {
    console.error(error)
  })
}


//for fetching the JSOn Data we have to use the Same process
//only the button and instead of <h3> we need to display that in the <ul> tag

let jsonBtnEl=document.querySelector("#JSON-btn")
jsonBtnEl.addEventListener("click",()=>{
  fetchJSON()//calling the fetchJSON() which been described below
})
let fetchJSON=()=>{//arrow function expression
  axios.get("./data/Mobile.json").then((response)=>{
    //here in this case like fetch() in fetchAPI axios.get() will return a promise object whose resolve() need to be handled by the then code
    //if the response status is not 200 then
    if(response.status!==200){
      console.log("Something went Wrong")
      return;//in case of status not 200 return to the function ie(repsonse)=>{}:-arrow function
    }
    //if the response is 200 then
    let users=response.data;
    //here response.dat will return the result in object form hence no need of converting from JSON to Object
    // console.log(users)//printing the data to the console
    //now we need to display that to the cards by
    document.querySelector("#json-card").innerHTML=`<ul class="list-group">
                                                               <li class="list-group-item list-group-item-action">ID:${users.id}</li>
                                                               <li class="list-group-item list-group-item-action">Name:${users.name}</li>
                                                               <li class="list-group-item list-group-item-action">Age:${users.age}</li>
                                                               <li class="list-group-item list-group-item-action">Designation:${users.designation}</li>
                                                               <li  class="list-group-item list-group-item-action">isActive:${users.isActive}</li>
                                                            </ul>`
  })
}

//now we have to read it from the external API here we are using the json Placeholder API for the Same
//lets grab the APi btn which i am assuming coming as xml-btn
let apiBtnEl=document.querySelector("#API-btn")
//fetching the Api Button and Applying the click event Listener function for the same
apiBtnEl.addEventListener("click",()=>{
  //we are we need to ue the axios.get() but unlike previous 2 we need to provide the url of JSON Placeholder API
  //her also the axios.get(url) return a promise object having resolve and reject method which need to be handled by the
  // inside then() and catch() respectively it need to be handled
  axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
    if(response.status!==200){
      console.log("Something went wrong")
      return;//returning back to the function
    }
    //if in case of successful response it is
    let users=response.data;//here this dat will be provided in the form f object just same as json
    //hence no need od parse() or stringyfy() of JSON inbuilt module
    let htmlRow=""//taking the htmlRow as empty string so that we can append the same
    for(let user of users){
          htmlRow+=`<ul class="list-group mt-2">
                    <li  class="list-group-item list-group-item-action">ID:${user.id}</li>
                    <li class="list-group-item list-group-item-action">USERNAME:${user.username}</li>
                    <li class="list-group-item list-group-item-action">Name:${user.name}</li>
                    <li class="list-group-item list-group-item-action">City:${user.address.city}</li>
                    <li class="list-group-item list-group-item-action">Phone Number:${user.phone}</li>
                    </ul>`
    }
    document.querySelector("#api-card").innerHTML=htmlRow
  }).catch((err)=>{
  console.log(err)
  })
})
