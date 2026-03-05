function getPrice(product) {
    const price = (() => {
        switch(product) {
            case 'apple': return 50;
            case 'banana': return 30;
            case 'orange': return 40;
            case 'grape': return 80;
            default: return 0;
        }
    })();
    
    return price;
}

console.log("Цены на фрукты (руб/кг):");
['apple', 'banana', 'orange', 'grape', 'melon'].forEach(fruit => {
    console.log(`${fruit}: ${getPrice(fruit)} руб.`);
});

console.log("\nМожно использовать IIFE для возврата значения из switch");
