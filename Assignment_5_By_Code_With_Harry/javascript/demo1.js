var name1=prompt("Enter your Name");//var name where we need to ask for the Name value using the prompt()
var act=prompt("Enter your favorite Actor");//var act where we need to ask for the favorite actor Name value using the prompt()
var num=Number(prompt("Enter your Lucky Number"));//var num where we need to ask for the Lucky Number value using the prompt()
var dish=prompt("Enter your favorite Dish");//var dish where we need to ask for the Dish Name value using the prompt()
var nameCondition=false;
var actCondition=false;
var numCondition=false;
var dishCondition=false;
if (name1[0]=="d"){
nameCondition=true;
}
else if (act[act.length-1]=="r"){
actCondition=true;
}
else if (num==7){
numCondition=true
}
else if(dish.length>=6){
dishCondition=true;
}
if(nameCondition && actCondition && numCondition && dishCondition ){//if all the condition mateched and true
console.log("please purchase git tutorial video by next month and try finishing the same in the same month only")
console.log("This onsite is bullshit ,as long as you took you will be in this project which is awful")
console.log("please read everyday "+name1+" So that you can get a job in UK as soon as possible")
}