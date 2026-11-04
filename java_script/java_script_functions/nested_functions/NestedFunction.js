/*
nested functions
   1.not recommended approach
   2.recommended approach
*/
// 1.not recommended approach
function grandFatherFunction(){
    console.log("GrandFatherFunction");
    function fatherFunction(){
        console.log("FatherFunction");
        function childFunction(){
            console.log("ChildFunction");
        }
        childFunction();
    }
    fatherFunction();
}
grandFatherFunction();

// 2.recommended approach
function grandFatherFunction(){
    console.log("GrandFatherFunction");
    return function fatherFunction(){
        console.log("FatherFunction");
        return function childFunction(){
            console.log("ChildFunction");
        }
    }
}
// function currying
grandFatherFunction()()();
