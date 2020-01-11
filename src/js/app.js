const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';

const purchases = [{
    sum: 500,
    category: REGULAR_CATEGORY,
}, {
    sum: 7000,
    category: INCREASED_CATEGORY,
}, {
    sum: 8540,
    category: SPECIAL_CATEGORY,
}];

let cashback=0;
const regularPurchasePercentage = 0.01;
const increasedPurchasePercentage = 0.05;
const specialPurchasePercentage = 0.3;

for (const purchase of purchases) {
    if (purchase.category === REGULAR_CATEGORY) {
        cashback += purchase.sum * regularPurchasePercentage;
    } else if (purchase.category === INCREASED_CATEGORY) {
        cashback += purchase.sum * increasedPurchasePercentage;
    } else if (purchase.category === SPECIAL_CATEGORY) {
        cashback += purchase.sum * specialPurchasePercentage;
    }
}

const cashbackLimit = 3000;
if (cashback > cashbackLimit) {
    cashback = cashbackLimit;
}

console.log(cashback);