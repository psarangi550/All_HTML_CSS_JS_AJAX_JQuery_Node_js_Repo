//javascript function example
//function declaration :-
function printStatement(startNumber,endNumber,incrementValue){
  let result=""//assigning the Empty String to the result variable
  for(let i=startNumber;i<=endNumber;i+=incrementValue){
    result+=`${i} `//using the short end Math Function with Dynamic values inside the template String
  }
  console.log(result)//accessing the result and printing to the console
}
//calling or Executing the function on order to display
printStatement(10,50,6)//proving paranmeter value and calling the function
printStatement(20,100,6)//proving paranmeter value and calling the function
