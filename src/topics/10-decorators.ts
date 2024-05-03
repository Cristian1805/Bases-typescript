
//Decorador: Una simple funcion que permite modificar el comportamiento de clases, propiedades y métodos.
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}



@classDecorator
export class SuperClass {


    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}


//Imprimir definición de la clase
console.log( SuperClass );

//Imprimir instacia de la clase
const myClass = new SuperClass();
console.log( myClass );