function analyzeFallthrough(code) {
    console.log("Анализ fall-through в switch:\n");
    
    function example1(x) {
        switch(x) {
            case 1:
                console.log('Один');
                // FALLTHROUGH - отсутствует break
            case 2:
                console.log('Два');
                break;
            case 3:
                console.log('Три');
                break;
        }
    }
    
    console.log("Пример 1 (с fallthrough):");
    example1(1);
    
    console.log("\nПример 2 (без fallthrough):");
    function example2(x) {
        switch(x) {
            case 1:
                console.log('Один');
                break;
            case 2:
                console.log('Два');
                break;
        }
    }
    example2(1);
    
    console.log("\nFall-through может быть:");
    console.log("- Намеренным (intentional) - для группировки case");
    console.log("- Ошибкой - забыли break");
    console.log("\nРекомендуется добавлять комментарий // FALLTHROUGH");
}

analyzeFallthrough();
