function getZodiacSign(month, day) {
    switch(month) {
        case 1:
            return day <= 20 ? 'Козерог' : 'Водолей';
        case 2:
            return day <= 19 ? 'Водолей' : 'Рыбы';
        case 3:
            return day <= 20 ? 'Рыбы' : 'Овен';
        case 4:
            return day <= 20 ? 'Овен' : 'Телец';
        case 5:
            return day <= 21 ? 'Телец' : 'Близнецы';
        case 6:
            return day <= 21 ? 'Близнецы' : 'Рак';
        case 7:
            return day <= 22 ? 'Рак' : 'Лев';
        case 8:
            return day <= 23 ? 'Лев' : 'Дева';
        case 9:
            return day <= 23 ? 'Дева' : 'Весы';
        case 10:
            return day <= 23 ? 'Весы' : 'Скорпион';
        case 11:
            return day <= 22 ? 'Скорпион' : 'Стрелец';
        case 12:
            return day <= 21 ? 'Стрелец' : 'Козерог';
        default:
            return 'Неверная дата';
    }
}

console.log("Знаки зодиака:");
console.log("15 марта:", getZodiacSign(3, 15));
console.log("25 июля:", getZodiacSign(7, 25));
console.log("10 декабря:", getZodiacSign(12, 10));
