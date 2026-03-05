console.log("Нечётные числа от 1 до 10 (с continue):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
