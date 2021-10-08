//here we need to grab the Element and Using Date Object and toLocaleDateString() and toLocaleTimeString()
//here we need to declare a js Object with timeZone property/variable
//their corresponding values are as string as Asia/Kolkata
//here we need to define the toLocaleDateString(locale language,option as js object timeZone Property)
//we need to use the setInterval() higher Order function to call the each js function defined on a specific time period regularly till infinity or clearInterval intoduced


//defining the JS Function indian Date and Time
let indianDateTime=()=>{//arrow function without args as function expression
  let option={timeZone:"Asia/Kolkata"}
  let currentIndianDate=new Date().toLocaleDateString("en-GB",option)
  let currentIndianTime=new Date().toLocaleTimeString("en-US",option)
  document.querySelector("#indian-date").innerText=currentIndianDate
  document.querySelector("#indian-time").innerText=currentIndianTime
}
//calling the Function
// indianDateTime()
//defining the JS Function indian Date and Time
let usaDateTime=()=>{//arrow function without args as function expression
  let option={timeZone:"America/New_York"}
  let currentUsaDate=new Date().toLocaleDateString("en-GB",option)
  let currentUsaTime=new Date().toLocaleTimeString("en-US",option)
  document.querySelector("#usa-date").innerText=currentUsaDate
  document.querySelector("#usa-time").innerText=currentUsaTime
}
// usaDateTime()
let chinaDateTime=()=>{//arrow function without args as function expression
  let option={timeZone:"Asia/Shanghai"}
  let currentChinaDate=new Date().toLocaleDateString("en-GB",option)
  let currentChinaTime=new Date().toLocaleTimeString("en-US",option)
  document.querySelector("#china-date").innerText=currentChinaDate
  document.querySelector("#china-time").innerText=currentChinaTime
}
// chinaDateTime()

//calling the setInterval() higher Order function
setInterval(indianDateTime,1000)
setInterval(usaDateTime,1000)
setInterval(chinaDateTime,1000)
