// intro

document.getElementById("heading").innerHTML="Hello Zahid";
document.getElementById("heading").style.color="red";
document.getElementById("heading").style.backgroundColor="yellow";

// Write Method

document.write("Thank you for comming Here");

// Alert Method

window.alert("Do you really want to see this ??");

// Functiion

// sum
const sum = ()=>{
    var a = 7.5;
    var b = 5;
    var c = a + b;
    console.log("The value of a+b is: " ,c);
};

// arrow function
 const display = ()=>(
    document.getElementById("title").innerHTML="Yo Hoo!"
 );

 const back = ()=>(
    document.getElementById("title").style.display="none"
 );


 // Functiion
 function MyFunction(a, b){
   return a * b
 };

 document.getElementById("func").innerHTML= MyFunction(2,3);


//  Object

const person = {
   firstName : "Zahid",
   lastName : "Hossain",
   age : 23,
   gmail: "zahid10397@gmail.com",
   fullDetails: function (){
      return this.firstName+" "+this.lastName+" "+this.age+" "+this.gmail;
   }
};

document.getElementById("obj").innerHTML = "My details is: " + person.fullDetails();


// Arrays
const fruit = [
   "Banana",
   "Apple",
   "Mango",
   "Lichi"
];

document.getElementById("arrays").innerHTML= `The fruits are: ${fruit}`;


// Class
class MyClass{
   constructor(name, age){
      this.name = name;
      this.age = age;
   };
   year(x){
      return x - this.age;
   };
};

let date = new Date();  
let age = date.getFullYear();

let myClass = new MyClass("Zahid Hossain", 1999);

document.getElementById("cls").innerHTML= "My name is: "+ myClass.name ;
document.getElementById("cls1").innerHTML= "I am only "+ myClass.year(age)+ " years old.";
