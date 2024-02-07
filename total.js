const products = [
    {name: 'shompoo', price: 300},
    {name: 'saban', price: 500},
    {name: 'shirt', price: 700},
    {name: 'fji', price: 1200},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total money of the products', total);