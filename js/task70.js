function trafficLight(color) {
    switch(color) {
        case 'red':
            return 'green';
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            return 'red'; // По умолчанию красный
    }
}

console.log("Симуляция светофора:");
let current = 'red';
for (let i = 0; i < 10; i++) {
    console.log(`${i + 1}. ${current === 'red' ? '🔴' : current === 'yellow' ? '🟡' : '🟢'} ${current}`);
    current = trafficLight(current);
}
