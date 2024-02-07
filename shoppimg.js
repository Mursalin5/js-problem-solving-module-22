const products = [
    {name: 'shompoo', price: 300, quantity:2},
    {name: 'saban', price: 500, quantity:3},
    {name: 'shirt', price: 700, quantity:1},
    {name: 'fji', price: 1200, quantity:2},
]
function cartTotal(products){
    let total = 0 ;
    for(const product of products){
        total = total + product.price * product.quantity;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);
