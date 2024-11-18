const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 },
];

let totalPrice = 0;

for (int i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total Price: ${totalPrice}`);

totalPrice = 0;
cart.forEach(good => totalPrice += good.price * good.quantity);
console.log(`Total Price: ${totalPrice}`);

totalPrice = cart.reduce((a, goods) => (a + goods.price * goods.quantity));
console.log(`Total Price: ${totalPrice}`);

const itemTotals = cart.map(goods => ({
    item: goods.item,
    total: goods.price * goods.quantity
}));
console.log(`제품별 금액: ${totalPrice}`);

const names = ['alice', 'bob', 'charlie'];

const upperCasedNames = names.map(n => n.toUpperCase());
console.log(`upperCaseNames = ${upperCasedNames}`);

const captialStartNames = names.map (n => n[0].toUpperCase() + );
console.log(`upperCasedNames = ${captialStartnames}`);
