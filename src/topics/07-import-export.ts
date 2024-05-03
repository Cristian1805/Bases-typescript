import { Product, impuestoCalculado } from './06-function-desestructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Motorola',
        price: 450
    },
];

//Tax 0.15%
const [total, tax] = impuestoCalculado({
    products: shoppingCart,
    tax: 0.15
});


console.log('Total', total);
console.log('Tax', tax); 