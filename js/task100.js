class VirtualMachine {
    constructor() {
        this.stack = [];
        this.memory = new Array(256).fill(0);
        this.ip = 0;
        this.halted = false;
    }

    run(bytecode) {
        this.ip = 0;
        this.halted = false;

        while (this.ip < bytecode.length && !this.halted) {
            const opcode = bytecode[this.ip];

            switch (opcode) {
                case 0x01: // PUSH <value>
                    this.stack.push(bytecode[++this.ip]);
                    break;

                case 0x02: // POP
                    this.stack.pop();
                    break;

                case 0x03: // ADD
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    this.stack.push(a + b);
                    break;

                case 0x04: // SUB
                    const sub_b = this.stack.pop();
                    const sub_a = this.stack.pop();
                    this.stack.push(sub_a - sub_b);
                    break;

                case 0x05: // MUL
                    const mul_b = this.stack.pop();
                    const mul_a = this.stack.pop();
                    this.stack.push(mul_a * mul_b);
                    break;

                case 0x06: // DIV
                    const div_b = this.stack.pop();
                    const div_a = this.stack.pop();
                    this.stack.push(Math.floor(div_a / div_b));
                    break;

                case 0x07: // PRINT
                    console.log("OUTPUT:", this.stack[this.stack.length - 1]);
                    break;

                case 0x08: // STORE <addr>
                    const addr = bytecode[++this.ip];
                    this.memory[addr] = this.stack.pop();
                    break;

                case 0x09: // LOAD <addr>
                    const load_addr = bytecode[++this.ip];
                    this.stack.push(this.memory[load_addr]);
                    break;

                case 0xFF: // HALT
                    this.halted = true;
                    break;

                default:
                    console.error("Неизвестный опкод:", opcode);
                    this.halted = true;
            }

            this.ip++;
        }
    }
}

console.log("Виртуальная машина с байткодом:\n");

const vm = new VirtualMachine();

console.log("Программа 1: 5 + 3");
vm.run([0x01, 5, 0x01, 3, 0x03, 0x07, 0xFF]);

console.log("\nПrogramma 2: 10 * 2");
vm.run([0x01, 10, 0x01, 2, 0x05, 0x07, 0xFF]);

console.log("\nПrogramma 3: (15 - 5) / 2");
vm.run([0x01, 15, 0x01, 5, 0x04, 0x01, 2, 0x06, 0x07, 0xFF]);
