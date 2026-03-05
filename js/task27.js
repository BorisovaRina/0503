console.log("Использование меток и break:");

outerLoop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log(`Найдено условие при i=${i}, j=${j}, выход из обоих циклов`);
            break outerLoop;
        }
        console.log(`i=${i}, j=${j}`);
    }
}

console.log("Продолжение выполнения после break outerLoop");
