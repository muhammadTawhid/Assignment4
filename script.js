// First Class Btn 
document.getElementById('first-increase-btn').addEventListener('click', function () {
    quantityIncrease  ('First-class', 'increase')
})

document.getElementById('first-decrease-btn').addEventListener('click', function () {
    quantityIncrease ('First-class', 'decrease')
})

// Economy Btn
document.getElementById('economy-increase-btn').addEventListener('click', function () {
    quantityIncrease ('economyInput', 'increase')
})

document.getElementById('economy-decrease-btn').addEventListener('click', function () {
    quantityIncrease ('economyInput', 'decrease')
})

// Quantity
function quantityIncrease(quantityId, isIncrease) {
    let Quantity = getInputQuantity(quantityId)
    let newQuantity = 0;
    if (isIncrease == 'increase') {
        newQuantity = Quantity + 1;
    }
    else if (isIncrease == 'decrease' && Quantity > 0) {
        newQuantity = Quantity - 1;
    }
    document.getElementById(quantityId).value = newQuantity;
    if (quantityId == 'First-class') {
        document.getElementById('conformation-first-ticket').innerText = newQuantity;
    }
    else if (quantityId == 'economyInput') {
        document.getElementById('conformation-economy-ticket').innerText = newQuantity;
    }
    calculateTotal()
}

//Total Price
function calculateTotal() {
    const firstQuantity = getInputQuantity('First-class')
    const economyQuantity = getInputQuantity('economyInput')

    const subTotal = (firstQuantity * 150) + (economyQuantity * 100);
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('conformation-subtotal').innerText = subTotal;

    const VAT = (subTotal * 0.1);
    document.getElementById('VAT').innerText = VAT;
    document.getElementById('conformation-vat').innerText = VAT;

    const total = subTotal + VAT;
    document.getElementById('total').innerText = total;
    document.getElementById('conformation-total').innerText = total;
}

//Input Quantity
function getInputQuantity(quantityId) {
    const inputQuantity = parseInt(document.getElementById(quantityId).value);
    return inputQuantity;
}

// Popup Message 
document.getElementById('bookButton').addEventListener('click', function () {
    document.getElementById('conformation-message').style.display = 'block';
})

// OK Button 
document.getElementById('okButton').addEventListener('click', function () {
    document.getElementById('conformation-message').style.display = 'none';
})