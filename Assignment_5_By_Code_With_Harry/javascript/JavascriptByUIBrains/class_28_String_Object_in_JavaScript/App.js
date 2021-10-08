//if we want to fetch the substring from a String then we can use the substr(given index)--->>from given index All the Elements
//there is One More Version also Present substr(given index ,number of Elements )
let str1="GooD Morning"//Assignign the String to the Variable
//this can also be written as:-
let str2=String("good Morning ")
//if we want to fetch the value from 0 index to 4 th index i.4 good
console.log(str2.substr(0,4))//fetching the value from oth index to 4th index
//here a complete  New String has been created as string is immutable in nature
//if we want to fetch the Morning then its starts from 5th index and end at 12th index i.e length is 7
//here if we are not providing the length then till the length of the string will be considered
console.log(str1.substr(5))//here only taking the foprm value not how many elements so it will cover for the whole element


//if we want to fetch the character at a specific index then we can use the charAt() function on the string Object
let str3=String("Good Morning")//here string value assigned to the variable
console.log(str3.charAt(5))//fetching the character at index 5


//if we want to coinvert a String to UpperCase and LowerCase then we have to toUpperCase() and toLowerCase() on the string Object
let str4=String("Good Morning")//assigning the String Value to the variable 4
console.log(str4.toLocaleUpperCase())//printing to the console after making it Upper case by toUpperCase()
console.log(str4.toLocaleLowerCase())//printing to the console after making it Lower case by toLowerCase()


//if we want to fetch the Character code i.e the ASCII Code based on the character based on index value the we can use charCodeAt() on the String Object
let str5="Good Morning "//assigning the String value to the variable
console.log(str5.charCodeAt(5))//fertching the ASCII code of an alphabet based on the index value then
