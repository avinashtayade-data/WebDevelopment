/*
java script variables
java script variables are the memory blocks which stores data or value[literals]
syntax:variable-declaration-keywords identifiers=literals;
re-initialization syntax:identifiers=literals;
de-coded syntax:var | let | const variableNames=data | value;
re-initialization de-coded syntax:variableName=data | value;
*/
// case-study-one:declaration and initialization[var let const]
var studentName="RahulGupta";//declaration and initialization
console.log(studentName);//utilization
let projectorName="EPSON";
console.log(projectorName);
const rollNumber=1011;
console.log(rollNumber);

// case-study-two:re-initialization [var let]
studentName="Nikhil Mahadikar";
console.log(studentName);
projectorName="hp";
console.log(projectorName);
// rollNumber=1012;//re-initialization
console.log(rollNumber);

// case-study-three:only-declaration[var let]
var classRoomNumber;//declaration
let employeeName;//declaration
const earthPosition=3;//declaration and initialization

// case-stude-four:re-declaration and initialization[var]
var classRoomNumber=7;
// let employeeName="Yashwanth";
// const earthPosition=3;
