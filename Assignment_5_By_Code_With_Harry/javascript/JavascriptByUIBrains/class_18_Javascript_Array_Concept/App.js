let employees=[
  {
    id:1,
    name:"john",
    age:38,
    designation:"manager",
    isActive:true
  },
  {
    id:2,
    name:"wilson",
    age:25,
    designation:" sr.manager",
    isActive:false
  },
  {
    id:3,
    name:"Laura",
    age:27,
    designation:"Software Engineer",
    isActive:true
  },
  {
    id:4,
    age:35,
    name:"Pratik",
    designation:"Team Lead",
    isActive:false
  }
]
// console.log(employees)

//accessing the employees whose Age id Less than 30
// let result=""
let juniorEmployee=[]
for (employee of employees){
  if(employee.isActive) {
    juniorEmployee.push(employee)
  }
}
console.log(juniorEmployee)
