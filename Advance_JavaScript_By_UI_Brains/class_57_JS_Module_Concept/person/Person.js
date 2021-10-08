export class Person{//classes with Name in Caps
  //for exporting this clss we have to use the export key word fpr the same
  constructor(firstName, lastName){//constructor with parameter and initialize with the instance variable /local property/variable
    this.firstName = firstName;//initialize with the instance variable /local property/variable
    this.lastName = lastName//initialize with the instance variable /local property/variable
  }
  //getter method to achieve the instance variable /local property/variable value
  getFirstName(){//getter method with out function keyword as its method only
    return this.firstName
  }
  getLastName(){//getter method with out function keyword as its method only
    return this.lastName
  }
  //instance method greeting collecting all the getter method
  greet(){//instance method with out function keyword
    let msg=`Welcome ${this.getFirstName()} ${this.getLastName()} `
    //accessing the getter method all together and assigning it to variable msg
    //using the template string and dynamic values for the same
    console.log(msg)//printing the message to the console
  }
}
