//Everywhere semicolon is not Mandetory
var books=[]//variable  books with empty array
var input=prompt("Which Operation need to performed [add]/[list][exist]");
while(input!="exit"){//if the user chooses option as exit
if(input=="add"){//if the user chooses add option
var newBook=prompt("Enter Books you want to add")//prompting to the user
books.push(newBook)//adding thr Books to the Array
}//closing the if block
else if(input=="list"){//if the user chooses the list option
console.log("The Avaialble books are")//printing to the console
console.log(books)//accessing the List and Printing to the console
}//closing the else-if block
else{//if the user chooses anything apart from add exit or list
console.log("Please enter a valid Option")//if the user chooses anything apart from add exit or list
}//closing the else block
var input=prompt("Which Operation need to performed [add]/[list][exist]");//for multiple operation to happen until the user input as exit
}//closing the while loop