// named functions
function namedFunction(){
    for(printedTimes=1;printedTimes<=5;printedTimes++){
        console.log("NamedFunctions.");
    }
}

namedFunction();
console.log(namedFunction);

/*
named function behaviors
    1.named function without parameters and without return value
    2.named function with parameters and without return value
    3.named function with parameters and with return value
*/
// 1.named function without parameters amd without return value
function getMultipliedValue(){
    let numberOne=50;
    let numberTwo=2;
    let multipliedValue=numberOne*numberTwo;
    console.log("The multiplication of "+numberOne+" and "+numberTwo+" is : "+multipliedValue);
}

getMultipliedValue();

// 2.named function with parameters and without return value
function getSquaredNumber(number){
    let squaredNumber=number**2;
    console.log("The Square of the given number '"+number+"' is : "+squaredNumber);
}
getSquaredNumber(12);
getSquaredNumber(25);

// 3.named function with parameters and with return value
function getSquaredRadius(radius){
    return radius**2;
}
function getCircleArea(){
    return parseInt(3.142*getSquaredRadius(window.prompt("Enter Radius(in cm)")))+"cm<sup>2</sup>";
}

document.getElementById("circle_area_value").innerHTML=getCircleArea();
document.getElementById("circle_area_logic").innerText=getCircleArea;
