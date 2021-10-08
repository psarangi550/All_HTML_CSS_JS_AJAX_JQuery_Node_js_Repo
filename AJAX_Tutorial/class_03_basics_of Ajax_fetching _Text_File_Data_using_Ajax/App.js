//here we need to provide the AJAX call to fetch the message from the txt file

//on text button click a click event will generate to fetch the details

let textBtnEl=document.querySelector("#text-btn")

textBtnEl.addEventListener("click",()=>{//listener arrow function

//step1:-to create a xmlHttpRequest
let xhr= new XMLHttpRequest()//creating the XML hhtp request
//step:2:-prepare the XMLHttpRequest object
xhr.open('GET',"message.txt",true);
//step:3:-we need to send this prepared request to the server by send()
xhr.send();
//step:-4:-for processing the XMLHTTP Request and provide the text -data response and catch the fetch data bu onload() and responseText variable
//here also we need to check the status as xhr.status===200 or not where 200 means successful connection
//first:-on the xhr object need to call the onload function which is the arrow function
xhr.onload=()=>{
  //here we need to check the status is 200 or not using the status variable
  if(xhr.status===200){//checking whether a successfull connection been established or not
    let data=xhr.responseText//fetching the response from the server in the form of text data
    // console.log(data)//printing the data to the console
    getText(data)
  }
}
let getText=(data)=>{
  let htmlEl=document.querySelector("#text-card")
  htmlEl.innerHTML=`<h3>${data}</h3>`
}
})
