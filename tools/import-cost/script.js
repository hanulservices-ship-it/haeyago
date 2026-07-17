const currency = document.getElementById("currency");

const productCost = document.getElementById("productCost");
const shippingCost = document.getElementById("shippingCost");
const tax = document.getElementById("tax");
const customs = document.getElementById("customs");
const otherFees = document.getElementById("otherFees");
const quantity = document.getElementById("quantity");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const resultButtons = document.getElementById("resultButtons");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

let resultText = "";

calculateBtn.addEventListener("click", () => {

    const product = parseFloat(productCost.value) || 0;
    const shipping = parseFloat(shippingCost.value) || 0;
    const importTax = parseFloat(tax.value) || 0;
    const customsFee = parseFloat(customs.value) || 0;
    const other = parseFloat(otherFees.value) || 0;
    const qty = parseInt(quantity.value);

    if (qty <= 0 || isNaN(qty)) {

        result.innerHTML = "Please enter a valid quantity.";

        resultButtons.style.display = "none";

        return;

    }

    const total =
        product +
        shipping +
        importTax +
        customsFee +
        other;

    const perItem = total / qty;

    resultText =
`Total Import Cost: ${currency.value}${total.toFixed(2)}

Cost Per Item: ${currency.value}${perItem.toFixed(2)}

Quantity: ${qty}`;

    result.innerHTML = `
<h3>Total Import Cost</h3>

<p><strong>${currency.value}${total.toFixed(2)}</strong></p>

<hr>

<p>Cost Per Item: <strong>${currency.value}${perItem.toFixed(2)}</strong></p>

<p>Quantity: ${qty}</p>
`;

    resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

    productCost.value = "";
    shippingCost.value = "";
    tax.value = "";
    customs.value = "";
    otherFees.value = "";
    quantity.value = "";

    result.innerHTML =
        "Enter all import costs, then tap <strong>Calculate</strong>.";

    resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(resultText);

    alert("Result copied.");

});

shareBtn.addEventListener("click", async () => {

    if (navigator.share) {

        await navigator.share({

            title: "Import Cost Calculator",

            text: resultText

        });

    } else {

        navigator.clipboard.writeText(resultText);

        alert("Sharing isn't supported. Result copied instead.");

    }

});