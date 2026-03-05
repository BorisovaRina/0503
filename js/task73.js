function categorizeAge(age) {
    switch(true) {
        case (age < 0):
            return 'Некорректный возраст';
        case (age < 13):
            return 'Ребёнок';
        case (age < 20):
            return 'Подросток';
        case (age < 60):
            return 'Взрослый';
        case (age >= 60):
            return 'Пожилой';
        default:
            return 'Неизвестно';
    }
}

console.log("Категории по возрасту:");
[5, 15, 30, 65, -1].forEach(age => {
    console.log(`${age} лет → ${categorizeAge(age)}`);
});
