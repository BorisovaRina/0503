console.log("Бесконечный цикл с условным выходом:");
let counter = 0;
while (true) {
    counter++;
    console.log(`Итерация ${counter}`);
    if (counter >= 5) {
        console.log("Условие выполнено, выход из цикла");
        break;
    }
}
