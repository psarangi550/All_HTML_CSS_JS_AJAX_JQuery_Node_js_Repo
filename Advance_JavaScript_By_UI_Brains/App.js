// let employee="john" 
// localStorage.setItem("name",employee);


//local storage using the array 
let color=["blue","red","green","black","white"]
//setting the key and value to the web Browser
localStorage.setItem("colors",color)
//getting the valuye from the Browser
console.log(localStorage.getItem("colors"))
console.log(typeof localStorage.getItem("colors"))

let language=[["html","css","javascript","AJAX","jQuery"],["python","Django,Flask","restAPI"]]

//setting the value to the local storage
localStorage.setItem("lang",language)

//getting the values to the console 
console.log(localStorage.getItem("lang"))

//updatin the values of the Array which stored in the local Stroange
// localStorage.setItem("lang",language[2]="php")
localStorage.setItem("lang['html']","php")

//getting the values to the console 
console.log(localStorage.getItem("lang"))


//delete the values stored as local storage value
// localStorage.removeItem("lang")

//clearing All the values of the Local Storage by clear()
localStorage.clear()