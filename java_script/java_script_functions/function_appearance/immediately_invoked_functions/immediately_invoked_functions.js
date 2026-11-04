/*
immediately invoked functions appearance
  1.immediately invoked higher order function
  2.immediately invoked callback function
*/
((anotherFunction)=>{
  if(typeof anotherFunction=="function"){
    console.log(anotherFunction);
  }
})(_=>"ImmediatelyInvokedCallBackFunctions");
