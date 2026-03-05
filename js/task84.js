console.log("Тест производительности: switch vs if-else\n");

const testValue = 5;
const iterations = 1000000;

// Switch
const startSwitch = Date.now();
for (let i = 0; i < iterations; i++) {
    switch(testValue) {
        case 1: break;
        case 2: break;
        case 3: break;
        case 4: break;
        case 5: break;
        case 6: break;
        case 7: break;
        case 8: break;
        case 9: break;
        case 10: break;
    }
}
const timeSwitch = Date.now() - startSwitch;

// If-else
const startIfElse = Date.now();
for (let i = 0; i < iterations; i++) {
    if (testValue === 1) {}
    else if (testValue === 2) {}
    else if (testValue === 3) {}
    else if (testValue === 4) {}
    else if (testValue === 5) {}
    else if (testValue === 6) {}
    else if (testValue === 7) {}
    else if (testValue === 8) {}
    else if (testValue === 9) {}
    else if (testValue === 10) {}
}
const timeIfElse = Date.now() - startIfElse;

console.log(`${iterations.toLocaleString()} итераций:`);
console.log(`Switch: ${timeSwitch}ms`);
console.log(`If-else: ${timeIfElse}ms`);
console.log(`\nРазница: ${Math.abs(timeSwitch - timeIfElse)}ms`);
console.log(`Быстрее: ${timeSwitch < timeIfElse ? 'switch' : 'if-else'}`);
