//here we need to select the element first
msgElement=document.querySelector("#msg")
rangeElement=document.querySelector("#range")

//if we made the numberFormat then we can go to google-->number format in javascript-->mdn example-->for indian
//here we are using intl.numberFormat String
//new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
//defining the arrow function for the same
let formatNumber= (number)=>{
  //function expression with arrow function and number as argument
  let result=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
  //defining the result variable with the intl.number format method
  return result//returning the result
}


//adding the input listener to the range Object then
rangeElement.addEventListener("input",()=>{
  //listener function
  //capturing the value from the range
  let valueSelected=rangeElement.value
  //we need to set the inner text of #msg attribute as valueSelected
    msgElement.innerText=formatNumber(valueSelected)//calling the FormatNumber function with the value as argument
})


