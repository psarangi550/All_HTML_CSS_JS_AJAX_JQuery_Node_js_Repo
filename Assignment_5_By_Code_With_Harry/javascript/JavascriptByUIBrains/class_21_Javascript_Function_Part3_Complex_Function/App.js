let twistedFn=function(){//function expression with out parameter
  let name="john"//assigning "john" value to name variable
  let printStudent=function(){//function expression without the parameter
    let student={//assigning the object to the variable student
      name:"Rajan",//properties/variable with value
      age:20,//properties/variable with value
      course:"javascript"//properties/variable with value
    }
    return student
  }
  return printStudent
}
console.log(twistedFn()().name)//calling the function
//nothing will be printed
// let output=twistedFn()//assigning the function call return value to a variable
// console.log(output().name)
// let mostRecentOutput=output().name
// console.log(mostRecentOutput)
// let recentOutput=output()//calling the Output function,assigning the returned valued to the variable recentOutput
// console.log(recentOutput["name"])

let twistedFn=function(){//function expression with out parameter
  let name="john"//assigning "john" value to name variable
  let printStudent=function(){//function expression without the parameter
    let student={//assigning the object to the variable student
      name:"Rajan",//properties/variable with value
      age:20,//properties/variable with value
      course:"javascript"//properties/variable with value
    }
    return student
  }
  return printStudent
}
let output=twistedFn()//calling the function
//nothing will be printed
let output=twistedFn()//assigning the function call return value to a variable
console.log(output().name)


