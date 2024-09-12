function findPrimeFactors(N) {
    let factors = [];
    while (N % 2 === 0) {
        factors.push(2);
        N = N / 2;
    }
    
    for (let i = 3; i <= Math.sqrt(N); i = i + 2) {
        while (N % i === 0) {
            factors.push(i);
            N = N / i;
        }
    }
    
    if (N > 2) {
        factors.push(N);
    }
    
    return factors;
}

function calculateSumBasedOnPrimeFactors(array, N) {
    const primeFactors = findPrimeFactors(N);
    let sum = 0;

    primeFactors.forEach(factor => {
        if (factor - 1 < array.length) { 
            sum += array[factor - 1];
        }
    });
    
    return sum;
}

const array = [5, 8, 9, 12, 3];
const N = 12;
const result = calculateSumBasedOnPrimeFactors(array, N);
console.log("The sum is:", result);