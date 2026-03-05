console.log("Обработка undefined в switch:");

function checkValue(value) {
    switch(value) {
        case undefined:
            console.log("Значение undefined");
            break;
        case null:
            console.log("Значение null");
            break;
        case '':
            console.log("Пустая строка");
            break;
        default:
            console.log("Значение:", value);
    }
}

checkValue(undefined);
checkValue(null);
checkValue('');
checkValue(0);
checkValue('hello');

console.log("\nSwitch использует строгое сравнение (===)");
console.log("undefined !== null в switch");
