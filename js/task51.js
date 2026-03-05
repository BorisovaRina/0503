function getDayName(day) {
    switch(day) {
        case 1: return 'Понедельник';
        case 2: return 'Вторник';
        case 3: return 'Среда';
        case 4: return 'Четверг';
        case 5: return 'Пятница';
        case 6: return 'Суббота';
        case 7: return 'Воскресенье';
        default: return 'Неверный день';
    }
}

console.log("Дни недели:");
for (let i = 1; i <= 7; i++) {
    console.log(`${i} - ${getDayName(i)}`);
}
