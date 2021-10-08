//here we want to fetch from the external API which is the JSON Placeholder which is a Fake External API for Free Rest API
//here also we want o grab the elements on the basis of the button click event
//lets grab the button first by using the querySelector("CSS Selector") method
let ApiBtnElement=document.querySelector("#API-btn")
//now applying the click event on the same
ApiBtnElement.addEventListener("click",()=>{
  //here first we need to create an AJAX Request or XMLHttpRequest Object
  let xhr=new XMLHttpRequest()
  //then we have to prepare the XMLHttpRequest object with the external API details
  xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
  //preparing using the open method on the XMLHttpRequest Passing  operation type,url of the API and which kind of function (async)
  //after that we need to send the request to the server
  xhr.send();//sending the request to the server
  //Once the server process the request then it will send the request in the JSON format which we need to fetch
  //once the response from the server get then
  xhr.onload=()=>{//once the response provided by the  server
    if(xhr.status===200){//checking the status of the server
      let data=xhr.responseText//fetching the response as the text
      console.log(data)//here we can see the data is in JSON String format
      console.log( typeof data)//here we can see the data is in JSON String format
      //we need to convert it to the Javascript object format by using the JSON predefined object
      let details=JSON.parse(data)//converting the JSON object to JS Object
      console.log(details)//printing the JS object to the console
      getApiData(details)//calling the getApiData Method
    }
  }

  //here we to fetch the data which is coming as a Array of objects and display to the cards
  let getApiData=(details)=>{//arrow function expression with details as argument
    //here we want ot display the array of objects as an html <ul> tag
    let msgRow=""//assigning the empty array to the msgRow variable
    for(detail of details){
      msgRow+=`<ul class="list-group mt-4">
            <li class="list-group-item list-group-item-action list-group-item-success"> ID:${detail["id"]}</li>
            <li class="list-group-item list-group-item-action list-group-item-primary"> NAME:${detail["name"]}</li>
            <li class="list-group-item list-group-item-action list-group-item-secondary"> EMAIL:${detail["email"]}</li>
            <li class="list-group-item list-group-item-action list-group-item-danger"> zipcode:${detail["username"]}</li>
            </ul>`
      document.querySelector("#api-card").innerHTML=msgRow
    }
    // //here we are fetching the api-card by the Help of querySelector("css selector)
    // document.querySelector("#api-card").innerHTML=msgRow
  }

})
