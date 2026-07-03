import { taxCalculation, type Product } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Samsung',
        price: 333
    }
]

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log("total: ", total)
console.log("tax: ", tax)