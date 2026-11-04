/*
string objects
  1.string literals['' | ""]:string
  2.String(anyData):string
  3.new String(anyData):StringObject
  4.template literals[` `]:string
*/
// 1.string literals["" | '']
let projectorRemoteBrandName="EP'S'ON";
console.log(projectorRemoteBrandName, typeof projectorRemoteBrandName);
let studentName='Rahul"G"upta';
console.log(studentName, typeof studentName);

// 2.String(anyData):string
let mobileNumber=9597170631;
console.log(String(mobileNumber), typeof String(mobileNumber));

// 3.new String(anyData):StringObject
let courseName=new String("JavaScript");//boxing
console.dir(courseName);

// 4.template literals:string
let webDevelopmentDescription=`The process of
"designing" and "developing" front-end of the web
pages by using HTML, CSS, JavaScript and
ReactJavaScript`;
console.log(webDevelopmentDescription, typeof webDevelopmentDescription);

function getAvailableAccountBalance(withDrawAmount){
    let totalAccountBalance=53755;
    let minimumBalance=1000;
    let totalAvailableAmount=totalAccountBalance-minimumBalance;
    let availableAccountBalance;
    while(true){
        if(withDrawAmount<=totalAvailableAmount){
            availableAccountBalance=totalAccountBalance-withDrawAmount;
            break;
        }
        else{
            withDrawAmount=window.prompt("Re-enter the valid withdrawal amount");
        }
    }
    return availableAccountBalance;
}
document.getElementById("sbi_transaction_summary").innerHTML='Your A/C no. <b>XXXXXXXX184</b> was debited with ₹' + withDrawAmount +". Your Account Available balance : ₹"+getAvailableAccountBalance(1000)+" at SBI HadapsarBranch ATM on "+Date();
// string interpolation[ `${variableName | functionName | constructorName | objectReferenceVariableName}` ]
document.getElementById("icici_transaction_summary").innerHTML=`Your A/C no. <b>XXXXXXXX184</b> was debited with ₹1000. Your Account Available balance : ₹${getAvailableAccountBalance(1000)} at ICICI HadapsarBranch ATM on ${Date()}`;

let colorName=window.prompt("Enter ColorName");
let carName=window.prompt("Enter CarName");
document.getElementById("customer_feedback_statement").innerHTML=`I love <span style="color:${colorName};">${colorName}</span> color <span style="color:${colorName};">${carName}</span> car.`;
