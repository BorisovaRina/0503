function throttle(fn, delay) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
}

let counter = 0;
const throttled = throttle(() => {
    console.log(`Вызов ${++counter}`);
}, 100);

console.log("Демонстрация throttle (задержка 100ms):");
for (let i = 0; i < 10; i++) {
    throttled();
}
