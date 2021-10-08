//conditional Statement Using Switch
//in case of switch One By One Condition Checking will not happen but it will directly check
// satisfied Condition if matched then it will execute the statement but don't check the false condition
//but in case of if and else even though the condition being false also it will check each condition provided in if /else-if/else block
//by Using the switch the performance will be improved
//like if else , if all the condition failed in if or else if then only else block will execute
//similarly in switch we have "default" if non of the switch case matching then only default will execute
//each switch statement must be written with a case which is similar to else if block
///example:-
let day=new Date().getDay()
//here Date is a class
// we are creating the Object of Date class by new Date()
//getDay() method in the Date class we can access by Date Object
//this will provide the day in Numeric for which is 0-sunday,1:-monday........6:-saturday
day=3//changing the day value as 3
console.log(day)//0 as its sunday today when pratik executing the task
let today=""//assigning empty string to today variable
switch(day){//switch statement with condition checking as day==0
  case 0://if the day==0 then
    today="Sunday"//assigning the today variable with value as Sunday
    break;//applying break to come out of switch
  case 1://if the day==1 then
    today="Monday"//assigning the today variable with value as Monday
    break;//applying break to come out of switch
  case 2://if the day==2 then
    today="TuesDay"//assigning the today variable with value as TuesDay
    break;//applying break to come out of switch
  case 3://if the day==3 then
    today="wednesDay"//assigning the today variable with value as wednesDay
    break;//applying break to come out of switch
  case 4://if the day==4 then
    today="thrusDay"//assigning the today variable with value as thrusDay
    break;//applying break to come out of switch
  case 5://if the day==5 then
    today="Friday"//assigning the today variable with value as Friday
    break;//applying break to come out of switch
  case 6://if the day==6 then
    today="Saturday"//assigning the today variable with value as thrusDay
    break;//applying break to come out of switch
  default://if the day is nopt between 0-6 and all the case condition failed then
    today="Please Enter a Proper Date"//assigning the today variable with value as Please Enter a Proper Date
    break;//applying break to come out of switch
}
console.log(`today is: ${today}`)

