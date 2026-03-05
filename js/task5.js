console.log("Цикл с break при i === 5:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log(`Достигнуто i = ${i}, выход из цикла`);
        break;
    }
    console.log(i);
}
