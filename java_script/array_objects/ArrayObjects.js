/*
array objects
1.array literals[elementOne,elementTwo...]
2.empty array literals[]
3.ArrayConstructor
  3.1.Array():ArrayObject
  3.2.Array(length):ArrayObject
  3.3.Array(elementOne,elementTwo):ArrayObject
4.new ArrayConstructor
  4.1.new Array():ArrayObject
  4.2.new Array(length):ArrayObject
  4.3.new Array(elementOne,elementTwo):ArrayObject
*/

// 1.array literals[elementOne,elementTwo...]
let studentName="RahulGupta";
let studentNames=["Yashwanth","NikhilMahadikar","RahulGupta"];
console.dir(studentNames);

let trainerDetailsArrayObject=["Yashwanth","Rudhraa",9507170631,28,false,
false,"WebDevelopment","11LPA","QspidersHadapsar",["WingA902",
"DhanashreeAangan","Handewadi","Pune","Maharashtra","India","IN",411028],];

// 2.empty array literals[]
let myntraCart=[];
myntraCart[0]="ReebokShoe";
myntraCart[2]="JockeyT-shirt";
console.dir(myntraCart);
console.log(myntraCart[1]);

/*
3.ArrayConstructor
  3.1.Array():ArrayObject
  3.2.Array(length):ArrayObject
  3.3.Array(elementOne,elementTwo):ArrayObject
*/

// 3.1.Array():ArrayObject
let bagBrandNames=Array();
console.dir(bagBrandNames);

// 3.2.Array(length):ArrayObject
let rainbowColors=Array(7);
console.dir(rainbowColors);

// 3.3.Array(elementOne,elementTwo):ArrayObject
let classRoomNumbers=Array(1,2,3,4,5,6,7,8);
console.dir(classRoomNumbers);

/*
4.new ArrayConstructor
  4.1.new Array():ArrayObject
  4.2.new Array(length):ArrayObject
  4.3.new Array(elementOne,elementTwo):ArrayObject
*/

// 4.1.new Array():ArrayObject
let mobileBrandNames=new Array();
console.dir(mobileBrandNames);

// 4.2.new Array(length):ArrayObject
let daysArray=new Array(7);
console.dir(daysArray);

// 4.3.new Array(elementOne,elementTwo):ArrayObject
let monthsArray=new Array("January","February","March","April","May","June",
"July","August","September","October","November","December");
console.dir(monthsArray);

