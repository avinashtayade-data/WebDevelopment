/*
 non-primitive data types
 non-primitive data types represents collection of values or multiple data
    1.java script objects
    2.java script array objects
    3.functions
    4.NumberObject
    5.StringObject
    6.BooleanObject
 */
/*
 4.NumberObject
 Number(anyValue):number
 new Number(anyValue):Number
 */
let number=10;
let numberObject=new Number(number);//boxing
console.dir(numberObject,typeof numberObject);
let numberPrimitiveValue=numberObject.valueOf();//un-boxing
console.log(numberPrimitiveValue,typeof numberPrimitiveValue);

/*
 5.StringObject
 String(anyValue):string
 new String(anyValue):String
 */
let stringPrimitiveData="JavaScript";
let stringObject=new String(stringPrimitiveData);//boxing
console.dir(stringObject);
let stringPrimitiveValue=stringObject.valueOf();//un-boxing
console.log(stringPrimitiveValue,typeof stringPrimitiveValue);

/*
 6.BooleanObject
 Boolean(anyValue):boolean
 new Boolean(anyValue):Boolean
 */
let booleanPrimitiveData=true;
let booleanObject=new Boolean(booleanPrimitiveData);//boxing
console.dir(booleanObject);
let booleanPrimitiveValue=booleanObject.valueOf();//un-boxing
console.log(booleanPrimitiveValue,typeof booleanPrimitiveValue);

// non-primitive data types clarity
console.log(new Number(10),typeof new Number(10));
console.log(new String("JavaScript"),typeof new String("JavaScript"));
console.log(new Boolean(false),typeof new Boolean(false));
console.log({},typeof {});
console.log([],typeof []);
