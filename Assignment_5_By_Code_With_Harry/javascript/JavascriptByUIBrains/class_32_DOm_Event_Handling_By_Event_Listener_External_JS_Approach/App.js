//here we are writing the External JS By Using the addEvent Listyener Function
//Step:1-to Grab the html element
//step:2:-add the event Listener for the selected html element
//step:-3:-then add the Event Listener function
let sayPrintMsg=(message,color)=>{
  let h1Tag=document.querySelector("#msg")
  h1Tag.innerText=message
  h1Tag.style.backgroundColor=color
  h1Tag.style.boxShadow="0 0 15px black"
  h1Tag.style.padding="15px"
//here
}
//step:-1
let gmBtn=document.querySelector("#gm-btn")
//step:2 and 3
gmBtn.addEventListener("click",()=>{
  sayPrintMsg("Good Morning", "green")
})
//step:-1
let gaBtn=document.querySelector("#ga-btn")
//step:2 and 3
gaBtn.addEventListener("click",()=>{
  sayPrintMsg("Good Afternoon", "orangered")
})

//step:-1
let geBtn=document.querySelector("#ge-btn")
//step:2 and 3
geBtn.addEventListener("click",()=>{
  sayPrintMsg("Good Evening", "purple")
})

//step:-1
let gnBtn=document.querySelector("#gn-btn")
//step:2 and 3
gnBtn.addEventListener("click",()=>{
  sayPrintMsg("Good Night", "black")
})
