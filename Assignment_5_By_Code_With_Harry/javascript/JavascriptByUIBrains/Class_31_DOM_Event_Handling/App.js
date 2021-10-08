// //writing the function to change the dynamic content
// let sayGoodMorning=()=>{
//   let h1Tag=document.querySelector("#msg")
//   h1Tag.innerText="Good Morning"
//   h1Tag.style.backgroundColor="green"
//   h1Tag.style.padding="5px"
//   h1Tag.style.boxShadow="0px 0px 5px black"
// }
// let sayGoodAfternoon=()=>{
//   let h1Tag=document.querySelector("#msg")
//   h1Tag.innerText="Good Afternoon"
//   h1Tag.style.backgroundColor="orangered"
//   h1Tag.style.padding="5px"
//   h1Tag.style.boxShadow="0px 0px 5px black"
// }
// let sayGoodEvening=()=>{
//   let h1Tag=document.querySelector("#msg")
//   h1Tag.innerText="Good Evening"
//   h1Tag.style.backgroundColor="purple"
//   h1Tag.style.padding="5px"
//   h1Tag.style.boxShadow="0px 0px 5px black"
// }
// let sayGoodNight=()=>{
//   let h1Tag=document.querySelector("#msg")
//   h1Tag.innerText="Good Night"
//   h1Tag.style.backgroundColor="black"
//   h1Tag.style.padding="5px"
//   h1Tag.style.boxShadow="0px 0px 5px black"
// }


//2nd Approach
let sayPrintMessage=(text,color)=>{
  let h1Tag=document.querySelector("#msg")
  h1Tag.innerText=text
  h1Tag.style.backgroundColor=color
  h1Tag.style.padding="5px"
  h1Tag.style.boxShadow="0px 0px 5px black"
}

