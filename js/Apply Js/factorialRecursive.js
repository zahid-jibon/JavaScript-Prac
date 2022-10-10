

// Recursive Factorial = n * (n-1)


function recursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * recursive(n-1);
    }
}

let num = recursive(0);

console.log(num);