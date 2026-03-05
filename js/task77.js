console.log("Использование пустых case:\n");

function isWeekend(day) {
    switch(day) {
        case 'Saturday':
        case 'Sunday':
            return true;
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            return false;
        default:
            return null;
    }
}

const days = ['Monday', 'Saturday', 'Sunday', 'Friday'];
days.forEach(day => {
    console.log(`${day}: ${isWeekend(day) ? 'Выходной' : 'Рабочий день'}`);
});

console.log("\nПустые case используются для группировки условий");
