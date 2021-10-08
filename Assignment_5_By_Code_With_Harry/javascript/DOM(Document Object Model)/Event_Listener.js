var myh1=document.querySelector("h1")
//variable myh1 is the grabbed html element using the CSS selector h1 as argument
myh1.addEventListener("keypress",change_color)
//adding the Event Listener by addEventListener() anmd passing event as click and change_color as function 
//defining the Event Listener function 
function change_color(){
    //function with function keyword and function name as change_color which is the Event Listener function execute on event occurances
    //this function has no argument
    myh1.style.color="red";//changinmg the color to red color
} 