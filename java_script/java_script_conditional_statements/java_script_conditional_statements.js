/*
conditional statements
    1.if statement
    2.if else statement
    3.else if ladder statement
    4.switch case statement
*/
// 1.if statement
let givenNumberValue=-11;
if(givenNumberValue>0){
   console.log("The GivenNumberValue "+givenNumberValue+" is positive.");
}
// 2.if else statement
if(givenNumberValue>0){
   console.log("The GivenNumberValue "+givenNumberValue+" is positive.");
}
else{
   console.log("The GivenNumberValue "+givenNumberValue+" is negative.");
}

// 3.else if ladder statement
let puneWeatherStatus="sunny";
if(puneWeatherStatus=="sunny"){
   console.log("Wear Sunglasses.");
}
else if(puneWeatherStatus=="cloudy"){
   console.log("Wear Helmet.");
}
else if(puneWeatherStatus=="rainy"){
   console.log("Wear ZEEL Rain Coat");
}

let userEnteredNumber=61;
if(userEnteredNumber>0){
   if(userEnteredNumber%5==0 && userEnteredNumber%10==0){
      console.log(userEnteredNumber+" is divisible by 5 and 10.");
   }
   else if(userEnteredNumber%5==0){
      console.log(userEnteredNumber+" is divisible by 5.");
   }
   else if(userEnteredNumber%10==0){
      console.log(userEnteredNumber+" is divisible by 10.");
   }
   else{
      console.log(userEnteredNumber+" is not divisible by both 5 and 10.");
   }
}
else{
   console.log(userEnteredNumber+" is negative. Please enter positive number.");
}

let userDayCount=9;
if(userDayCount==1){
   console.log("Sunday");
}
else if(userDayCount==2){
   console.log("Monday");
}
else if(userDayCount==3){
   console.log("Tuesday");
}
else if(userDayCount==4){
   console.log("Wednesday");
}
else if(userDayCount==5){
   console.log("Thursday");
}
else if(userDayCount==6){
   console.log("Friday");
}
else if(userDayCount==7){
   console.log("Saturday");
}
else{
   console.log(userDayCount+" is in-valid, Please enter dayCount between 1 to 7.");
}

/*
4.switch case statement
switch(key[userInput]){
   case valueOne:case operationOne;
   case valueTwo:case operationTwo;
   case valueThree:case operationThree;
}
*/
let webDevelopmentCourse="DS";//userInput
switch(webDevelopmentCourse){
   default:console.log("Please enter WebDevelopment Course Al...");
   break;
   case "HTML":console.log("HyperTextMarkupLanguage");
   break;
   case "CSS":console.log("CascadingStyleSheet");
   break;
   case "JS":console.log("JavaScript");
}
let userMonthCount=13;//userInput
switch(userMonthCount){
   default:console.log(userMonthCount+" is in-valid month, Plea...");
   break;
   case 1:console.log("January");
   break;
   case 2:console.log("February");
   break;
   case 3:console.log("March");
   break;
   case 4:console.log("April");
   break;
   case 5:console.log("May");
   break;
   case 6:console.log("June");
   break;
   case 7:console.log("July");
   break;
   case 8:console.log("August");
   break;
   case 9:console.log("September");
   break;
   case 10:console.log("October");
   break;
   case 11:console.log("November");
   break;
   case 12:console.log("December");
   break;
}
