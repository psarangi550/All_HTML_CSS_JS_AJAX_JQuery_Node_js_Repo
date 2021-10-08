//form validation
//here we want tot introduce the onsubmit even if we are using the inline js
//if we are using the external js we need to use the "submit" event
//but the submit event not meant for the button but for the form itself
//lets grab the form
let registrationForm=document.querySelector("#registration-form")
//after grabbing the element we need to appy the Submit event using the addEventListener
registrationForm.addEventListener("submit",(event)=>{
  //here we are calling the validation form where all the checking is going to happen
  event.preventDefault()
  if(validationForm()){
    alert("Form Submitted Successfully")
  }
})

let validationForm=()=>{
  return(checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword())
  // checkUserName()
  // checkEmail()
  // checkPassword()
  // checkConfirmPassword()
}
let checkUserName=()=> {
  //arrow function to test the regular expression and check whethose are valid or not
  //first Lets the grab the userName and usernameFeedback
  let inputEl = document.querySelector("#username")
  let inputElFeedback = document.querySelector("#username-feedback")
  //here we need to take a regular expression for pattern matching
  let regExp = /^[a-zA-Z0-9]\w{4,10}/
  //here the regular expression must be written inside the // symbol with the corresponding the values
  //if we want to test the value we need ti use the test() on regular expression variable
  //here also we need to pass as args which element value need to be tested as per the regular expression
  //this will always return the result in true or false format
  if (regExp.test(inputEl.value)) {
    match_valid(inputEl, inputElFeedback)
    return true;
  } else {
    match_invalid(inputEl, inputElFeedback)
    return false;
  }
}
let checkEmail=()=>{
  //arrow function to test the regular expression and check whethose are valid or not
  //first Lets the grab the userName and usernameFeedback
  let inputEl =document.querySelector("#email")
  let inputElFeedback=document.querySelector("#email-feedback")
  //here we need to take a regular expression for pattern matching
  let regExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //here the regular expression must be written inside the // symbol with the corresponding the values
  //if we want to test the value we need ti use the test() on regular expression variable
  //here also we need to pass as args which element value need to be tested as per the regular expression
  //this will always return the result in true or false format
  if(regExp.test(inputEl.value)){
    match_valid(inputEl,inputElFeedback)
    return true;
  }
  else{
    match_invalid(inputEl,inputElFeedback)
    return false;
  }
}

let checkPassword=()=>{
  //arrow function to test the regular expression and check whethose are valid or not
  //first Lets the grab the userName and usernameFeedback
  let inputEl =document.querySelector("#password")
  let inputElFeedback=document.querySelector("#password-feedback")
  //here we need to take a regular expression for pattern matching
  let regExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  //here the regular expression must be written inside the // symbol with the corresponding the values
  //if we want to test the value we need ti use the test() on regular expression variable
  //here also we need to pass as args which element value need to be tested as per the regular expression
  //this will always return the result in true or false format
  if(regExp.test(inputEl.value)){
    match_valid(inputEl,inputElFeedback)
    return true;
  }
  else{
    match_invalid(inputEl,inputElFeedback)
    return false;
  }
}

let checkConfirmPassword=()=>{
  //arrow function to test the regular expression and check whethose are valid or not
  //first Lets the grab the userName and usernameFeedback
  let inputEl =document.querySelector("#c_password")
  let inputElFeedback=document.querySelector("#c_password-feedback")
  let passwordEl=document.querySelector("#password")
  //here we need to take a regular expression for pattern matching
  let regExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  //here the regular expression must be written inside the // symbol with the corresponding the values
  //if we want to test the value we need ti use the test() on regular expression variable
  //here also we need to pass as args which element value need to be tested as per the regular expression
  //this will always return the result in true or false format
  if(regExp.test(inputEl.value) && passwordEl.value===inputEl.value){
    match_valid(inputEl,inputElFeedback)
    return true;
  }
  else{
    match_invalid(inputEl,inputElFeedback)
    return false;
  }
}
let match_valid=(inputEl,inputElFeedback)=>{
  inputEl.classList.add("is_form_valid")
  inputEl.classList.remove("is_form_invalid")
  inputElFeedback.classList.add("text-success")
  inputElFeedback.classList.remove("text-danger")
  inputElFeedback.innerText="Looks Good"

}
let match_invalid=(inputEl,inputElFeedback)=>{
  inputEl.classList.remove("is_form_valid")
  inputEl.classList.add("is_form_invalid")
  inputElFeedback.classList.remove("text-success")
  inputElFeedback.classList.add("text-danger")
  inputElFeedback.innerText=`Please Enter Valid ${inputEl.getAttribute("placeholder")}
  `
}

//username keyup event
let usernameEl = document.querySelector("#username")
usernameEl.addEventListener("keyup",()=>{
  checkUserName()
})

//email keyup event
let emailEl = document.querySelector("#email")
emailEl.addEventListener("keyup",()=>{
  checkEmail()
})

//password keyup event
let passwordEl = document.querySelector("#password")
passwordEl.addEventListener("keyup",()=>{
  checkPassword()
})

//confirm password keyup event
let c_passwordEl = document.querySelector("#c_password")
c_passwordEl.addEventListener("keyup",()=>{
  checkConfirmPassword()
})
