function getTimeOfDay(hour) {
    switch(true) {
        case (hour >= 0 && hour < 6):
            return 'Ночь';
        case (hour >= 6 && hour < 12):
            return 'Утро';
        case (hour >= 12 && hour < 18):
            return 'День';
        case (hour >= 18 && hour < 24):
            return 'Вечер 🌆';
        default:
            return 'Неверное время';
    }
}

console.log("Время суток по часам:");
[3, 8, 14, 20].forEach(h => {
    console.log(`${h}:00 - ${getTimeOfDay(h)}`);
});
