function turingMachine(tape, rules, initialState = 'q0') {
    let state = initialState;
    let head = 0;
    let steps = 0;
    const maxSteps = 100;
    
    while (state !== 'HALT' && steps < maxSteps) {
        const symbol = tape[head] || '_';
        
        switch(state) {
            case 'q0':
                if (symbol === '0') {
                    tape[head] = '1';
                    head++;
                    state = 'q1';
                } else if (symbol === '1') {
                    head++;
                    state = 'q0';
                } else {
                    state = 'HALT';
                }
                break;
                
            case 'q1':
                if (symbol === '0') {
                    head++;
                    state = 'q1';
                } else {
                    state = 'HALT';
                }
                break;
        }
        
        steps++;
    }
    
    return tape.join('');
}

const tape = ['0', '0', '1', '0'];
console.log("Машина Тьюринга:");
console.log("Начальная лента:", tape.join(''));
console.log("Конечная лента:", turingMachine([...tape]));
