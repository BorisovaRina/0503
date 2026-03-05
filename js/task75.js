function getOrdinal(n) {
    switch(n) {
        case 1:
            return `${n}-й (первый)`;
        case 2:
            return `${n}-й (второй)`;
        case 3:
            return `${n}-й (третий)`;
        default:
            return `${n}-й`;
    }
}

console.log("Порядковые числительные:");
for (let i = 1; i <= 10; i++) {
    console.log(getOrdinal(i));
}
