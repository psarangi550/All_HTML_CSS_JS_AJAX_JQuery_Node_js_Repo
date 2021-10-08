//grabing the element by using the querySelector Method
let numberEl=document.querySelector("#num")
let multiplierEl=document.querySelector("#range")
//introducing the keyup event for input text box
numberEl.addEventListener("keyup",()=>{
  let numberValue=numberEl.value
  // console.log(numberValue)
  Number(document.querySelector("#number").innerText=numberValue)
  multiplication();
})
//introducing the input event on the range Selector

multiplierEl.addEventListener("input",()=>{
  let rangeValue=multiplierEl.value
  Number(document.querySelector("#multi").innerText=rangeValue)
  multiplication();
})
//here we are describing the function for the multiplication
let multiplication=()=>{
  let firstNumber=Number(document.querySelector("#number").innerText)
  let secondNumber=Number(document.querySelector("#multi").innerText)
  let result=firstNumber*secondNumber
  document.querySelector("#result").innerText=result
}
