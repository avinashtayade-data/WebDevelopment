/*
 java script operators
    1.unary operators
    2.binary operators
    3.ternary operators
*/
/*
 2.binary operators
    2.1.arithmetic operators
    2.2.relational operators
    2.3.logical operators
    2.4.assignment operators
    2.5.string concatenation operator
*/
// 2.1.arithmetic operators[+ - * / % **]
let numberOne=100;
let numberTwo=5;
console.log(numberOne+numberTwo);
console.log(numberOne-numberTwo);
console.log(numberOne*numberTwo);
console.log(numberOne/numberTwo);
console.log(numberOne%numberTwo);
console.log(numberOne**numberTwo);

// 2.2.relational operators[> < >= <= == === != !==]
let earthGravityValue=9.8;
let moonGravityValue=1.6;
console.log(earthGravityValue>moonGravityValue);
console.log(moonGravityValue<earthGravityValue);
console.log(moonGravityValue<=earthGravityValue);
console.log(earthGravityValue>=moonGravityValue);
console.log(earthGravityValue==moonGravityValue);
let firstNumber=10;
let secondNumber="10";
console.log(firstNumber==secondNumber);
console.log(firstNumber!=secondNumber);
console.log(firstNumber===secondNumber);
console.log(firstNumber!==secondNumber);

// 2.3.logical operators[&&(AND) ||(OR) !(NOT)]
let isStudentHavingPen=true;
let isStudentHavingPencil=false;
let isStudentHavingHallTicket=false;
console.log(isStudentHavingPen && isStudentHavingPencil && isStudentHavingHallTicket);
console.log(isStudentHavingPen || isStudentHavingPencil && isStudentHavingHallTicket);
console.log(isStudentHavingPen || isStudentHavingPencil && !isStudentHavingHallTicket);
