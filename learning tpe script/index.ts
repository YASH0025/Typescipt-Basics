// types and variable declaration in ts
var message  : string= "hello";
console.log(message); // prints the value of "message" variable which is number type and its value is 1



Objects creation and method declration
class Greeting{
    greet():void{
        console.log("Namastey");

    }
}
var obj = new Greeting();
obj.greet()



type assertion in typescipt

let str = '1';
let num1:number = <number> <any> str;

console.log(typeof(num1));


let num = 25;
let str1:string = <string><any> num
str1  = "kdgsd"
console.log(typeof(str1));
console.log(str1);


global ,class and local scope;
var globalVeriable = "hello"

class Scope{
    class_veriable = "hi i am class scope"
    static c_veriable ="hi i am second class scope";

    localscope():void{
        var local = "hi am am local scope"
    }
}

console.log(globalVeriable);
console.log(Scope.c_veriable);
let obj1 = new Scope()
console.log(obj1.class_veriable);


Functions in ts
const Testing = (id:number, name:string, maidid?:string)=>{
    console.log(id);
    console.log(name);
    if(maidid !=undefined){
        console.log(maidid);

    }   

}

Testing(2,"Bhupendra Jogi");
Testing(3,'Puneet Superstar', "moutkakhel@gmail.com")


//rest perameter in ts

const Sum = (...num:number[])=>{
    return num.reduce((a,b)=> a+b,0)


}


let add = Sum(5,2,3,4,56,8,6,7,7)
console.log(add);



InterFace in ts

interface Person{
    firstName:string,
    lastName: string,
    country:string
    SayHi:()=> string
}

var Man:Person={
    firstName:"Bhupendra",
    lastName:"Jogi",
    country:"usa",
    SayHi:()=>{return "bhupendra jogi"}
}
console.log(Man.firstName);
console.log(Man.lastName);
console.log(Man.SayHi());


creating the class in ts

 class Car{
    engine:string;
    constructor(engine:string){
        this.engine = engine
        console.log(engine);

    }
    model():void{
        console.log("model of car is Tesla Model 3" ,this.engine);
    }
 }
 let myCar= new Car('Turbo');
 myCar.engine
 myCar.model()
 console.log(myCar);

/ method everriding in the ts


class Parent{
   print():void{
    console.log('print called Parent');

   }
}

class Child extends Parent{
   print():void{
    super.print()
    console.log('printing child ');

    }
}

let objChild =new Child();
objChild.print();


// /classes and interace in ts
interface Model {
    name: string,
    price: number,

}

class Car implements Model {
    name: string
    price: number
    year: number
    constructor(name: string, price: number, year: number) {
        this.name = name
        this.price = price
        this.year = year
    }
}

let obj = new Car("urus", 20000000, 2019)
console.log(obj.name, obj.price, obj.year);




