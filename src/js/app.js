const purchases = [{
    sum: 500,
    category: 'regular',
}, {
    sum: 7000,
    category: 'increased',
}, {
    sum: 8540,
    category: 'special',
}];

let cashback=0;
const regularPurchasePercentage = 0.01;
const increasedPurchasePercentage = 0.05;
const specialPurchasePercentage = 0.3;

for (const purchase of purchases) {
    if (purchase.category === 'regular') {
        cashback += purchase.sum * regularPurchasePercentage;
    } else if (purchase.category === 'increased') {
        cashback += purchase.sum * increasedPurchasePercentage;
    } else if (purchase.category === 'special') {
        cashback += purchase.sum * specialPurchasePercentage;
    }
}

console.log(cashback);