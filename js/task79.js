function getAnimalSound(animal) {
    switch(animal.toLowerCase()) {
        case 'cat':
            return 'Мяу';
        case 'dog':
            return 'Гав';
        case 'cow':
            return 'Му';
        case 'duck':
            return 'Кря';
        case 'sheep':
            return 'Бее';
        case 'pig':
            return 'Хрю';
        default:
            return '???';
    }
}

console.log("Звуки животных:");
['cat', 'dog', 'cow', 'duck', 'elephant'].forEach(animal => {
    console.log(`${animal}: ${getAnimalSound(animal)}`);
});
