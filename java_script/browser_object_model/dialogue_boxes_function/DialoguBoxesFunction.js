/* dialogue boxes functions
   1.alert(alertMessage):void
   2.confirm(confirmMessage):boolean
   3.prompt(promtMessage):string | null
*/

// 1.alert(alertMessage):void
let alertStatus=window.alert("WebPage is harmful for the device.");
console.log("AlertStatus : "+alertStatus);

// 2.confirm(confirmMessage):boolean
let confirmStatus=window.confirm("Do you really want to proceed?");
console.log("ConfirmStatus : "+confirmStatus);

// 3.prompt(promtMessage):string | null
let emailUsername=window.prompt("Enter EmailUsername");
console.log("EmailUsername : "+emailUsername);
let password=window.prompt("Enter Password");
console.log("Password : "+password);

let numberOne=Number(window.prompt("Enter NumberOne"));
let numberTwo=Number(window.prompt("Enter NumberTwo"));
let addedValue=numberOne+numberTwo;
console.log("The addition between "+numberOne+" and "+numberTwo+" : "+addedValue);
