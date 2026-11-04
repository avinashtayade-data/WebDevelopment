/*
named functions appearance
  1.named higher order functions
  2.named callback functions
*/
function namedHigherOrderFunction(anotherFunction){
   console.log(anotherFunction);
}
function namedCallBackFunction(){
   return "NamedCallBackFunction";
}
namedHigherOrderFunction(namedCallBackFunction);
