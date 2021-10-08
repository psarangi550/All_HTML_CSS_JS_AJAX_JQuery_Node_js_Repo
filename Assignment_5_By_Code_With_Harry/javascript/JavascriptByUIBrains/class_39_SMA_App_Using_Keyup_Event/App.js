//here we need to select the text area as well as the span tag by thge id selector
//we are using the maxlength attribute in the text area hence the text been limited to the 100
//we can use the querySelector("css selector") to select an element
//here we are using the keyup even as for the form field text value
//it will return the value in string for which we can calculate the length
let textAreaEl=document.querySelector("#text-area")
//select the text area by querySelector and css selector as argument to it
let charCountEl=document.querySelector("#char-count")
//selecting the span tag using the query Selector () with css selector as argument
//adding the keyup event for the textAreaEl
textAreaEl.addEventListener("keyup",()=>{
  //listener arrow function with keyup event on the selected html object
  charCountEl.innerText=textAreaEl.value.length
  //cathching the length of the textArea Value and displaying to the Span Tag
})
