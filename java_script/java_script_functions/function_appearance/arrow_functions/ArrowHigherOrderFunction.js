/*
arrrow functions appearance
  1.arrow higher order function
  2.arrow callback function
*/
let arrowHigherOrderFunction=(anotherFunction)=>{
  if(typeof anotherFunction=="function"){
    console.log(anotherFunction);
  }
}
arrowHigherOrderFunction(_=>"ArrowCallBackFunction");


