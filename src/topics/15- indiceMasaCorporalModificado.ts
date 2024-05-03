const calcularIMC = (peso: number, altura: number): { imc: number, estado: string } => {
    
    // Convertir altura de metros a metros cuadrados
    const alturaMetrosCuadrados = altura * altura;
    
    // Calcular IMC
    const imc = peso / alturaMetrosCuadrados;

    // Determinar el estado según el IMC
    let estado = '';
    if (imc < 18.5) {
        estado = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        estado = 'Peso normal';
    } else if (imc >= 24.9 && imc < 29.9) {
        estado = 'Sobrepeso';
    } else if (imc >= 29.9 && imc < 34.9) {
        estado = 'Obesidad grado I (Moderada)';
    } else if (imc >= 34.9 && imc < 39.9) {
        estado = 'Obesidad grado II (Severa)';
    } else {
        estado = 'Obesidad grado III (Mórbida)';
    }

    return { imc, estado };
};

//import * as readlineSync from 'readline-sync';
import * as readlineSync from 'readline-sync';

const peso: number = parseFloat(readlineSync.question('Ingresa tu peso en kilogramos: '));
const altura: number = parseFloat(readlineSync.question('Ingresa tu altura en metros: '));

const { imc, estado } = calcularIMC(peso, altura);

console.log(`Tu IMC es: ${imc.toFixed(2)}`);
console.log(`Estado: ${estado}`); 
