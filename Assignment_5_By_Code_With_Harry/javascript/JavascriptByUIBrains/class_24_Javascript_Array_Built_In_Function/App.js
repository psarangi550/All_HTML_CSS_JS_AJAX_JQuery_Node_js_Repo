//using the filter function for Object inside another Object
let employees=[
    {
      id:1,
      name:"john",
      age:40,
      designation:"Manager",
      isActive:true
    },
  {
    id:2,
    name:"wilson",
    age:46,
    designation:" Sr.Manager",
    isActive:false
  },
  {
    id:3,
    name:"laura",
    age:34,
    designation:"Team Lead",
    isActive:true
  },
  {
    id:4,
    name:"Mahesh",
    age:25,
    designation:"Software Engineer",
    isActive:true
  }

]
// console.log(employees)

let activeEmployee=employees.filter(function(employee){
            return employee.isActive==true
})
console.log(activeEmployee)
