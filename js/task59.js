console.log("Разница между return и break в switch:\n");

function withReturn(value) {
    switch(value) {
        case 1:
            return "Один";
        case 2:
            return "Два";
        default:
            return "Другое";
    }
    console.log("Эта строка никогда не выполнится");
}

function withBreak(value) {
    let result;
    switch(value) {
        case 1:
            result = "Один";
            break;
        case 2:
            result = "Два";
            break;
        default:
            result = "Другое";
    }
    console.log("Эта строка выполнится после switch");
    return result;
}

console.log("return сразу выходит из функции");
console.log(withReturn(1));

console.log("\nbreak только выходит из switch");
console.log(withBreak(2));
