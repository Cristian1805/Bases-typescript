interface Product {
    description: String,
    price: number
}

const phone: Product = {
    description: 'Nokia',
    price: 15000
}

const tablet: Product = {
    description: 'iPad Apple',
    price: 30000
}

interface impuestoCalculadoOptions {
    impuesto: number;
    products: Product[];
}

//Funcion que permite calcular el impuesto
const impuestoCalculado = (options: impuestoCalculadoOptions): number[] => {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.impuesto];
};


const shoppintCart = [phone, tablet]
const impuesto = 0.25;

const result = impuestoCalculado({
    products: shoppintCart,
    impuesto, 
});

console.log('Total', result[0]);
console.log('Tax', result[1]);


//Tarea: Aplicar la desestructuracion en los objetos y arreglos creados arriba

export {};