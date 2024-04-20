export interface Product {
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
    tax: number;
    products: Product[];
}

//Funcion que permite calcular el impuesto
export const impuestoCalculado = (options: impuestoCalculadoOptions): number[] => {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
};


const shoppintCart = [phone, tablet]
const tax = 0.50;

const [total, taxTotal] = impuestoCalculado({
    products: shoppintCart,
    tax: tax, 
});

console.log('Total', total);
console.log('Tax', taxTotal);


//Tarea: Aplicar la desestructuracion en los objetos y arreglos creados arriba



export {};