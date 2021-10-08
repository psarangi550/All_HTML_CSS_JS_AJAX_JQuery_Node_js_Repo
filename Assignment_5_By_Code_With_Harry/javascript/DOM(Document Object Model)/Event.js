function random_color(){
    //function with function name as random_color and function keyword and no Arguments
    var hex=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    //variable hect taking the group of values as an array where element describe allowed hex code
    var color_hex="#"//variable color with values as # which will going to genrate the hex code for random_color
    for(var i=0;i<6;i++){
        //for loop with initialization ,condition checking and increment values
        //this loop will exwecute 6 times as we need 6 random color from the array hex code 
        var r=Math.floor(Math.random()*16)
        //Math.random()*16 will generate a random number in frwaction between 0-16
        //Math.floor()-->convert the fraction value to floor value
        //Hence only 0-15 values are allowed which is index value of hex array
        color_hex=color_hex+hex[r]//adding the radom color to the color variable 6 times  so that it became hex code for color
    }//closing the for loop
    return color_hex;//return the color at the final 
}//closing the function 
var gbutton=document.querySelector("button");
//grabbing the html element using the CSS selector as button, this will return the HTML element
//adding the Event Listener with Function value
gbutton.addEventListener("click",change_background_body)
//adding the Event Listen which will execute the funnction when the click event occur
//defining the Event Kistener function 
function change_background_body(){
    //function with function keyword and function name as change_background and no arguiment 
    //here we are trying the Grab the Body of the html
    var gbody=document.querySelector("body")//using the css selector as argument fetching the html element
    gbody.style.background=random_color();//Calling the random_color() and setting to the body of the html 
}