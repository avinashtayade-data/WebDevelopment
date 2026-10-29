// /*
//  looping statements
//  1.for loop
//  2.while loop
//  3.do while loop
// */
// // 1.for loop
// for(printedTimes=1;printedTimes<=100;printedTimes++){
//     console.log("Guru is always Guru...");
// }

// // 2.while loop
// let password="sai12334#";
// while(password.length<8){
//     password=window.prompt("Re-enter password");
//     if(password.length>=8){
//         console.log("Password '"+password+"' generated successfully.");
//     }
// }

// // 3.do while loop
// let userEnteredPassword=window.prompt("Enter Password");
// let userPasswordGenerationStatus=false;
// do{
//     if(userEnteredPassword.length>=8){
//         console.log("Password '"+userEnteredPassword+"' generated successfully.");
//         userPasswordGenerationStatus=true;
//     }
//     else{
//         userEnteredPassword=window.prompt("Re-enter password");
//     }
// }while(!userPasswordGenerationStatus);



























// let password=window.prompt("Password Taak Re!!")
// do{
//     if(password.length>8){
//         console.log("password "+ password+" Generated Succesfully"); 
//     }
//     else{
//         window.alert("Password Cannot Contain Less Than 8 characters")
//         password=window.prompt("Re-Enter Password")
//         // console.log("password "+ password+" Generated Succesfully"); 
//     }
// }while(password.length<=8)


// let password = window.prompt("Password Taak Re!!");
// let isValid = false;

// do {
//     // 1. Handle Cancel button right away
//     if (password === null) {
//         console.log("Password generation cancelled.");
//         break; 
//     }

//     // 2. Validate length (using >= so exactly 8 characters is allowed)
//     if (password.length >= 8) {
//         console.log("Password " + password + " Generated Successfully");
//         isValid = true; // This will exit the loop naturally
//     } else {
//         // 3. Handle invalid input
//         window.alert("Password Cannot Contain Less Than 8 characters");
//         password = window.prompt("Re-Enter Password");
//     }

// } while (!isValid);
