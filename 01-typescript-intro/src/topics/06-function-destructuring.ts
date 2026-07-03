
export interface Product {
    description: string;
    price: number;

}


const phone: Product = {
    description: 'Nokia 01',
    price: 200
}

const tablet: Product = {
    description: 'Samsung 01',
    price: 122.0
}

const shoppingCart = [phone, tablet]

const tax = 0.13;

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

export function taxCalculation({tax, products}: TaxCalculationOptions): number[] {
    let total = 0;
    products.forEach(({price}) => { total += price });
    return [total, total * tax];
}

const [total, taxResult] = taxCalculation({ products: shoppingCart, tax })

console.log('total: ', total)
console.log('tax: ', taxResult)
