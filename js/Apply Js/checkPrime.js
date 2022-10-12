

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return 'Not a Prime number.'
        }
        return 'The number is Prime.'
    }
}

var num = isPrime(144);
console.log(num);