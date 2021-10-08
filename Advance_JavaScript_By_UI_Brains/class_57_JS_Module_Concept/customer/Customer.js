//here first we need to import the Person class which is present in the different JS file using the js concept
//using the import statement for the same io.e import {class Name} '//Absolute File Path'
import {Person} from '../person/Person.js'//importing the person class in the employee class
//we have to export this employee class also to a new file hence using the export keyword for the same
export class Customer extends Person{
  //parent class Person and child class Employee
  constructor(firstName,lastName,age,location){//constructor with parameter and initialize with the instance variable /local property/variable
    super(firstName, lastName);//calling the parent class constructor from the child class
    this.age=age//initialize with the instance variable /local property/variable
    this.location=location//initialize with the instance variable /local property/variable
  }
  //getter Method to achieve the instance variable value/local property or variable value
  getAge(){//getter method with out the function keyword
    return this.age
  }
  getLocation(){//getter method with out the function keyword
    return this.location
  }
  //over-riding the greet instance method in here
  greet(){//instance method with out function keyword
    let msg=`Welcome ${this.getFirstName()} ${this.getLastName()}
             AGE:${this.getAge()}
             Location : ${this.getLocation()}`
    //accessing the getter method all together and assigning it to variable msg
    //using the template string and dynamic values for the same
    console.log(msg)//printing the message to the console
  }
}
