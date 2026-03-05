console.log("Преобразование if-else в switch(true):\n");

function getGradeIfElse(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}

function getGradeSwitch(score) {
    switch(true) {
        case (score >= 90): return 'A';
        case (score >= 80): return 'B';
        case (score >= 70): return 'C';
        case (score >= 60): return 'D';
        default: return 'F';
    }
}

const scores = [95, 85, 75, 65, 55];
console.log("Оценки (if-else):", scores.map(getGradeIfElse));
console.log("Оценки (switch):", scores.map(getGradeSwitch));
