let count=0
let min=0
let sec=0
let milSec=0
let interval=0//this is for getting the key from the seetInterval so that we can provide the same key for clear interval
let timeRunning=false;//declaring the time running as false



//here we have to grab the element by DOM Manipulation

let startButton=document.querySelector("#start-btn")
let stopButton=document.querySelector("#stop-btn")
let resetButton=document.querySelector("#reset-btn")

//declaring the function to increase the count value
let incrementCountValue=()=>{
  count++//incrementing the count value
  min=Math.floor(((count)/100)/60)
  sec=Math.floor(((count)/100)-(min*60))
  milSec=Math.floor(count-(sec*100)-(min*6000))
  document.querySelector("#minute").innerText=leadZero(min)
  document.querySelector("#second").innerText=leadZero(sec)
  document.querySelector("#m-second").innerText=leadZero(milSec)
}




//here we need to grab the start button and provide the click event Listen to it
startButton.addEventListener("click",()=>{
  //calling the method to increase the count
  if(!timeRunning) {//if the time is not running then only setInterval function
    interval=setInterval(incrementCountValue, 10)
    timeRunning=true;//making the time running as true
  }
})


//here we need to grab the stop button and provide the click event Listen to it
stopButton.addEventListener("click",()=>{
  clearInterval(interval)//stop the setInterval
  timeRunning=false;//making the time running as false

})


//here we need to grab the reset button and provide the click event Listen to it
resetButton.addEventListener("click",()=>{
  clearInterval(interval)//stop the setInterval
  timeRunning=false;//making the time running as false
  count=0
  min=0
  sec=0
  milSec=0
  interval=0//this is for getting the key from the seetInterval so that we can provide the same key for clear interval
  timeRunning=false;//declaring the time running as false
  document.querySelector("#minute").innerText="00"
  document.querySelector("#second").innerText="00"
  document.querySelector("#m-second").innerText="00"

})

//adding the ) i,.e Leading Zero Value towards it
//adding the ) i,.e Leading Zero Value towards it
let leadZero=(time)=>{
  if (time<=9){
    return ("0"+time)
  }
  else{
    return time
  }
}
