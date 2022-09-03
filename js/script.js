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
