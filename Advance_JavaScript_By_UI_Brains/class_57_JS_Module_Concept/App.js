//here we need to use all the 3 classes over here  hence we need to import all the 3 classes over here as
import {Employee} from "./employee/Employee.js";
import {Customer} from "./customer/Customer.js"
// import {Person} from "./person/Person.js"

//creating the New Object for the employee class
let emp=new Employee("john","Doe",40,"Software Engineer")
emp.greet()//calling the instance method of the Employee class

//here we are creating the object of the customer class and calling the greet instancemethod on the same
let cust=new Customer("Laura","wilson",28, "USA")
//creating the object by the help of cust Object reference variable
//calling the instance method with the help of object reference
cust.greet()
