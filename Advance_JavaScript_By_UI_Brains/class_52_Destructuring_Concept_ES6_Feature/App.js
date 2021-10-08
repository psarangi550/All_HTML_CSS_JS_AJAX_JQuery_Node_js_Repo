//here we are taking the complex object
let student={
  name:"Arjun Reddy",
  age:20,
  course:"MBBS",
  address:{
    street:"Hi-Tech City",
    city:"Hyderabad",
    state:"TS"
  },
  Reagular_hobbies:{
    id:1,
    Hobbies:["Reading Software Books","Stalking People"]
  },
  occessional_hoobies:{
    id:2,
    Hobbies:["Geeking on Everything","Read Books Evenryday thinking"]
  }

}
//if we want to access the city and  from the address Nested Object then we can use destructuring concept as
let {street,city}=student.address//here we are accessing few item from the object which is the concept of destructuring in js
//now if we want to represent it we can use as
console.log(`STREET: ${street}===>CITY:${city}`)


//if we want to see the regular Hobbies  Name then we can use that by using
let {Hobbies}=student.Reagular_hobbies
console.log(`REGULAR HOBBIES: ${Hobbies}`)
