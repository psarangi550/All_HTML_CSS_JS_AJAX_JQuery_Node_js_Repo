function random_color(){
//function to generate random color which is in hex code format 
var hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//variable hex with group of values as an Array,where individual Elements are hex color code element
var color="#"//variable color with value as # this will create a random hex color code
for(var i=0;i<6;i++){//for loop with initialuization condition checking and increment operator 
//for loop will work for 6 times
var r=Math.floor(Math.random()*16)
//here Math.random() will provide the value between 0-16 in fraction format
//Math.floor() will provide the  before value of the fraction 
//hence this willl generate a value between 0-15 which is the index value of hex variable 
//saving all those to the variable r
color=color+hex[r]//adding the color so that random color can get generated with this
}//closing the for loop
return color;//returnning the color which is in hex code format
}//closing the function
function random_name(){
//function with function keyword and function name as random_name with out any argument
//function will return the random name from an array 
var city=["HYDERBAD","BANGALORE","ODISHA","MUMBAI","PUNE","UK"]
//variable city with group of cities as an array 
//from this value we want to produce a random city
var x=Math.floor(Math.random()*6)
//here Math.floor will prduce random number between 0-6 in fraction
//Math.floor will produce the floor bvqalue for the fraction 
//hence the Number wil;l be always between 0-5 which is the index value
return city[x]//returning the random Name on function Call
}
myh1=document.querySelector("h1")
//fetching the html element using the querySelector Method and CSS selector h1 as argument
//define the function names changetColorConten() as Listener Function
function changeColorContent(){
    //listener function on Event Occurrance
    myh1.style.color=random_color()
    //calling the random_color() and saving the returned hex code color to the color of grabbed html element
    myh1.textContent=random_name()
    //calling th4e random_name() and saving the returned random _name as the text Content of h1 Tag

}//closing the Listener function
//nopw adding the Listener to the Grabbed HTML Content 
myh1.addEventListener("mouseover",changeColorContent)
//adding the Listener function on event for the grabbed html element 
myh1.addEventListener("mouseout",changeColorContent)
//adding the Listener function on event for the grabbed html element 