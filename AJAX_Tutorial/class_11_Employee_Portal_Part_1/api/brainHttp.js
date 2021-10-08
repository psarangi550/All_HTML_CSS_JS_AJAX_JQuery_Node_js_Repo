export class brainHttp {
  constructor() {
    this.http = new XMLHttpRequest()
    //creating a New XMLHttpRequest and assigning to the instance variable http
    //whenever the object being created and constructor will execute and create an object of http
  }

  get = (url, callback) => {
    //here need make the ajax set up over the get method
    //as the XMLHTTPRequest created hence we need to go for step:2 to prepare
    this.http.open("GET", url, true)
    //now we need to send the request
    this.http.send()
    //we need to prepare the request
    this.http.onload = () => {
      if (this.http.status === 200) {
        let data = this.http.responseText
        let employees = JSON.parse(data)
         callback(null, employees)
      } else {
         callback(`Error Occurred due to ${this.http.status} `)
      }
    }

  }


  post=(url,employee,callback)=>{
    //here need make the ajax set up over the get method
    //as the XMLHTTPRequest created hence we need to go for step:2 to prepare
    this.http.open("POST",url,true)
    //here we need make sure that we need to set the requestHeader before sending the XMLHttpsRequest to server
    this.http.setRequestHeader("content-type","application/json")
    //this specify that which kind of request client been making is it json request or urlEncoded request
    this.http.send(JSON.stringify(employee))
    //now server will process the request and sent the response we need to catch the response
    this.http.onload=()=>{
      if(this.http.status===200){
        let data=this.http.responseText;//fetching the response sent by the server in the form of text
        let result=JSON.parse(data)
        return callback(null,result)
      }
      else{
        return callback(`Error Occurred due to ${this.http.status} `)
      }
    }
  }

  //put request
  put=(url,employee,callback)=>{
    //ajax call using it here
    //prepare the request as its already Created while calling the object
    this.http.open("PUT",url,true)
    //now we need to let server klnow which kind of request we are sending
    this.http.setRequestHeader("content-type","application/json")
    //now we need to send the employee object in the form of JSOn using the JSON.stringyfy() method
    this.http.send(JSON.stringify(employee))
    //now we need to handle the response coming from the server using the onload function as
    this.http.onload=()=>{
      let data=this.http.responseText
      let result=JSON.parse(data)//converting to Object using the JSON.parse(string)
      callback(result)//calling the callback method described in the app.js
    }
  }


  //Delete request
  delete=(url,callback)=>{//using the arrow function expression with url and callback as arguments
    //here also we have to do the Ajax call
    //step:2:-prepare the request
    this.http.open("DELETE",url,true)//using the open method to prepare the request
    //step3:-to let the server know which type of request we are making
    this.http.setRequestHeader("content-type","application/json")
    this.http.send()//here no need to provide any employee info for the delete reqyest as in the server side this will not be checked
    //handling the request as
    this.http.onload=()=>{
      let data=this.http.responseText
      let result=JSON.parse(data)
      callback(result)
    }

  }

  // updateEmp=(url,empId,callback)=> {
  //   //making the Ajax call
  //   this.http.open("GET", url, true)
  //   this.http.setRequestHeader("content-type","application/json")
  //   this.https.send()
  //   this.http.onload=()=>{
  //     let data=this.http.responseText
  //     let employees=JSON.parse(data);
  //     for(let employee of employees){
  //       if(employee.id===empId){
  //         return employee
  //         callback(employee)
  //       }
  //     }
  //
  //   }
  // }



}
