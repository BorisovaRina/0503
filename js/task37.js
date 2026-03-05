function getPrimes(n) {
    const primes = [];
    
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }
    
    return primes;
}

const n = 50;
console.log(`Простые числа до ${n}:`);
console.log(getPrimes(n));
