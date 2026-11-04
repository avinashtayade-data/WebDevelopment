/*
java script objects
  1.object literals{key:value,key:value}
  2.ObjectConstructors
     2.1.Object():Object
     2.2.new Object():Object
  3.ConstructorFunctions
  4.class declarations[class ClassName{}]
*/

// 1.object literals{key:value,key:value}
let trainerObject={
    firstName:"Yashwanth",
    lastName:"Rudhraa",
    mobileNumber:9597170631,
    age:28,
    isTrainerMarried:false,
    isTrainerAvailableONline:false,
    trainingCourse:"WebDevelopment",
    trainingCourseOrder:{
        1:"HTML",
        2:"CSS",
        3:"JavaScript",
        4:"ReactJavaScript",
        5:"ReactNative"
    },
    salary:"11LPA",
    jobLocation:"QspidersHadapsar",
    residentialAddress:{
        flatName:"WingA902",
        apartmentName:"DhanashreeAangan",
        area:"Handewadi",
        city:"Pune",
        state:"Maharashtra",
        country:"India",
        countryCode:"IN",
        postalCode:411028
    },
    getFullName:function (){
        return `FullName : ${this.firstName} ${this.lastName}`;
    }
}

console.dir(trainerObject);
console.log(trainerObject.trainingCourseOrder[3]);
console.log(trainerObject.getFullName());

