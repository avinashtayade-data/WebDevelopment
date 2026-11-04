/*
anonymous functions appearance
  1.anonymous higher order functions
  2.anonymous callback functions
*/
let anonymousHigherOrderFunction=function (anotherFunction){
  if(typeof anotherFunction=="function"){
    console.log(anotherFunction());
  }
}
anonymousHigherOrderFunction(function (){
  return "AnonymousCallBackFunction";
});
