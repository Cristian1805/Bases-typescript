/*
    ===== Código de TypeScript =====
*/

interface SuperHero {

    name: String;
    age: number;
    address: Address

    showAddress: () => string;

}

interface Address {

    street: String;
    country: String;
    city: String;

}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'Nueva York'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};