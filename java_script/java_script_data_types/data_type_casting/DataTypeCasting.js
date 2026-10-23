/*
 Data types casting
    1.implicit data type casting
    2.explicit data type casting
 */
// 1.implicit data type casting[type coercion]
let numberOne=10;//10->"10"
let numberTwo="10";//"10"-->10
console.log(numberOne+numberTwo,typeof (numberOne+numberTwo));//1010 string
console.log(numberOne-numberTwo,typeof(numberOne-numberTwo));//0 'number'
console.log(numberOne*numberTwo,typeof(numberOne*numberTwo));//100 'number'
console.log(numberOne/numberTwo,typeof(numberOne/numberTwo));//1 'number'
console.log(numberOne%numberTwo,typeof(numberOne%numberTwo));//0 'number'
console.log(numberOne===numberTwo,typeof(numberOne===numberTwo));//false 'boolean'

/*
 2.explicit data type casting
    2.1.any data type into number data type
    2.2.any data type into string data type
    2.3.any data type into boolean data type
 */

/*
 2.1.any data type into number data type
    2.1.1.Number(anyData):number
    2.1.2.parseInt(string):number
    2.1.3.parseFloat(string):number
 */
// 2.1.1.Number(anyData):number
console.log(Number(numberOne)+Number(numberTwo),typeof (numberOne+Number(numberTwo)));//20 'number'
const isSunRiseEast=true;
console.log(Number(isSunRiseEast),typeof Number(isSunRiseEast));//1 'number'
const isSunRiseWest=false;
console.log(Number(isSunRiseWest),typeof Number(isSunRiseWest));//0 'number'
let waterBottleQuantity="2litres";
console.log(Number(waterBottleQuantity),typeof Number(waterBottleQuantity));//NaN 'number'

// 2.1.2.parseInt(string):number
let isTrainerOnline=false;
console.log(parseInt(isTrainerOnline),typeof parseInt(isTrainerOnline));//NaN 'number'
console.log(parseInt(waterBottleQuantity),typeof parseInt(waterBottleQuantity));//2 'number'
// 2.1.3.parseFloat(string):number
let isTrainerOffline=true;
console.log(parseFloat(isTrainerOffline),typeof parseFloat(isTrainerOffline));//NaN 'number'
let academicCGPA="9.75CGPA";
console.log(parseInt(academicCGPA),typeof parseInt(academicCGPA));//9 'number'
console.log(parseFloat(academicCGPA),typeof parseFloat(academicCGPA));//9.75 'number'

/*
 2.2.any data type into string data type
    2.2.1.String(anyData):string
    2.2.2.object.toString():string
 */
// 2.2.1.String(anyData):string
let mobileNumber=9597170631;
console.log(String(mobileNumber),typeof String(mobileNumber));//9597170631 string
let isJavaScriptUnderstood=true;
console.log(String(isJavaScriptUnderstood),typeof String(isJavaScriptUnderstood));//true string
// 2.2.2.object.toString():string
console.log(mobileNumber.toString(),typeof mobileNumber.toString());//9597170631 string
console.log(isJavaScriptUnderstood.toString(),typeof isJavaScriptUnderstood.toString());//true string

/*
 2.3.any data type into boolean data type
    2.3.1.Boolean(anyData):boolean
 */
let emailUsername=0;
console.log(Boolean(emailUsername),typeof Boolean(emailUsername));
