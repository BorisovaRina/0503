function getGradeDescription(grade) {
    switch(grade) {
        case 'A':
            return 'Отлично - 90-100%';
        case 'B':
            return 'Хорошо - 80-89%';
        case 'C':
            return 'Удовлетворительно - 70-79%';
        case 'D':
            return 'Плохо - 60-69%';
        case 'F':
            return 'Неудовлетворительно - 0-59%';
        default:
            return 'Неверная оценка';
    }
}

console.log("Система оценок:");
['A', 'B', 'C', 'D', 'F'].forEach(grade => {
    console.log(`${grade}: ${getGradeDescription(grade)}`);
});
