

function leapYear(year){
    
    if((year % 4 == 0) && (year % 100 != 0)  || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }

}

const myYear = leapYear(2018);

console.log(myYear);

