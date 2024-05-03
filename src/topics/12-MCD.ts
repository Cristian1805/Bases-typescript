function encontrarMCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1: number = 48;
const num2: number = 36;
const mcd: number = encontrarMCD(num1, num2);
console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
