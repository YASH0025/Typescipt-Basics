// types and variable declaration in ts
var message = "hello";
console.log(message); // prints the value of "message" variable which is number type and its value is 1
//Objects creation and method declration
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Namastey");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
 

