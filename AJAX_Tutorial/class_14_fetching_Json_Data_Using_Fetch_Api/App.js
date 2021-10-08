//fetching the JSON file data using the FetchApi
//here we need to call the fetch() which return a promise object which resolve() need to be taken in the then()
//step:-1:-call the fetch method using the URL i.e fetch(url or file location)
//this will return an promise object to call the promise object resolve method we haver to use the then()
//inside the then() we need to describe the resolve method iof the promise object which been returned by the fetch(url)
//resolve method of the returned fetch(url) method take response as an args hence we need to pass response as args for the
//then() we are describing the callback function

//here we are fetching the json button as
let jsonBtnEl=document.querySelector("#JSON-btn")

//obn this we have to call the click event with addEventListener()
jsonBtnEl.addEventListener("click",()=>{//arrow listener function
  fetch("mobile.json").then((response)=>{
    if(response.status!==200){//if the status is not 200 then
      console.log("something went wrong")//printing to the console
    }
    //if the status is 200 then
    //response.text():-for the text file
    //response.json():-for the json files
    //Both the above method return a promise object
    // console.log(response.json())//in the log we can see the promise object
    //so again the returned pronise object resolve method we need to call in the then()
    //here also the resolve() taking 1 args hence while describing by the then() we need to call by then() with call back function and anything as args
    //here we are providing the data as argument
    response.json().then((data)=>{//call back function for the returned promise object resolve method with args as data as the resolve() defined with args
      console.log(data)//displaying the data to the console upon clicking on the json button
      // let mobile=JSON.parse(data)
      //let empRow=""//employee row making it as empty and displaying as appended
      document.querySelector("#json-card").innerHTML=`<ul class="list-group">
                                                                <li class="list-group-item list-group-item-action list-group-item-success"> ID:${data.id}</li>
                                                                <li class="list-group-item list-group-item-action list-group-item-primary">BRAND: ${data.brand}</li>
                                                                <li class="list-group-item list-group-item-action list-group-item-secondary">COLOR:${data.color}</li>
                                                                <li class="list-group-item list-group-item-action list-group-item-warning">PRICE${data.price}</li>
                                                              </ul>`
    })
  })
})

