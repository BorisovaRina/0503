function getNoteFrequency(note) {
    switch(note) {
        case 'C':
            return 261.63;
        case 'D':
            return 293.66;
        case 'E':
            return 329.63;
        case 'F':
            return 349.23;
        case 'G':
            return 392.00;
        case 'A':
            return 440.00;
        case 'B':
            return 493.88;
        default:
            return 0;
    }
}

console.log("Частоты музыкальных нот (Гц):");
['C', 'D', 'E', 'F', 'G', 'A', 'B'].forEach(note => {
    console.log(`${note}: ${getNoteFrequency(note)} Гц`);
});
