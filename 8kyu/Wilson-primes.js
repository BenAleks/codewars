//
// Wilson primes satisfy the following condition. Let P represent a prime number.
//
//     Then,
//
//     ((P-1)! + 1) / (P * P)
// should give a whole number.
//
//     Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    return ((factorial(p-1) + 1) % (p*p)===0)
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x-1);
}

console.log(amIWilson(563))