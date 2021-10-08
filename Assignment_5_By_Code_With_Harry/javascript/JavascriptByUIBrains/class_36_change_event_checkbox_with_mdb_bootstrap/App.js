//here we need to grab the check box as well as input box as DM Object and Apply check event On them
//here also we will have to use the  get attribute and set Attribute if we are using the getAttribute("Attribute Name") and
//setAttribute("Attribute Name","attribute value")
let passwordElement=document.querySelector("#password")
//fetching the input password by using the querySelector Method
let checkBoxElement=document.querySelector("#checkbox")
//fetching the input checkbox by using the querySelector Method
//adding the change event for the same
checkBoxElement.addEventListener("change",()=>{
    let attrSelected=passwordElement.getAttribute("type")
  if (attrSelected==="password"){
    passwordElement.setAttribute("type","text")
  }
  else{
    passwordElement.setAttribute("type","password")
  }
})
