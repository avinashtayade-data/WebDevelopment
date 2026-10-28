/*
 looping statements
 1.for loop
 2.while loop
 3.do while loop
*/
// 1.for loop
for(printedTimes=1;printedTimes<=100;printedTimes++){
    console.log("Guru is always Guru...");
}

// 2.while loop
let password="sai12334#";
while(password.length<8){
    password=window.prompt("Re-enter password");
    if(password.length>=8){
        console.log("Password '"+password+"' generated successfully.");
    }
}

// 3.do while loop
let userEnteredPassword=window.prompt("Enter Password");
let userPasswordGenerationStatus=false;
do{
    if(userEnteredPassword.length>=8){
        console.log("Password '"+userEnteredPassword+"' generated successfully.");
        userPasswordGenerationStatus=true;
    }
    else{
        userEnteredPassword=window.prompt("Re-enter password");
    }
}while(!userPasswordGenerationStatus);
