var age =18;
var exam = true;


if (age > 18 && exam == true){
    console.log("Perfect candidate");
}
else if(age == 18 && exam == true){
    console.log("Under age & please try Next year");
}
else if(age > 18 && exam == false){
    console.log("Exam resukt is no with you so try Next year")
}
else{
    console.log("Not a perfect match.");
}