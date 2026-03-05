console.log("Демонстрация fallthrough в switch:");

function checkNumber(num) {
    switch(num) {
        case 1:
        case 2:
            console.log(`${num} - это 1 или 2 (fallthrough)`);
            break;
        case 3:
            console.log(`${num} - это 3`);
            break;
        default:
            console.log(`${num} - другое число`);
    }
}

checkNumber(1);
checkNumber(2);
checkNumber(3);
checkNumber(5);
