function factorial(n, acc = 1) {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

console.log("Факториал с оптимизацией хвостовой рекурсии:");
console.log("factorial(5) =", factorial(5));
console.log("factorial(10) =", factorial(10));
console.log("factorial(20) =", factorial(20));
