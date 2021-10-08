var color=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
function repeat(){
var result='#'
for(var i=0;i<6;i++){
var rand=Math.floor(Math.random()*16)
result=result+color[rand]
}
return result
}
function change_color(){
var myh1=document.querySelector("h1")
myh1.style.color=repeat()
}
setInterval(change_color,1000)