const currency = document.getElementById("currency");

const productCost = document.getElementById("productCost");
const shippingCost = document.getElementById("shippingCost");
const duty = document.getElementById("duty");
const vat = document.getElementById("vat");
const otherFees = document.getElementById("otherFees");
const quantity = document.getElementById("quantity");
const sellingPrice = document.getElementById("sellingPrice");

const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

const resultButtons = document.getElementById("resultButtons");

calculateBtn.addEventListener("click", () => {

const product = Number(productCost.value);
const shipping = Number(shippingCost.value);
const customsRate = Number(duty.value);
const vatRate = Number(vat.value);
const fees = Number(otherFees.value);

const qty = Number(quantity.value || 1);

const sellPrice = Number(sellingPrice.value);

const subtotal = product + shipping;

const customs = subtotal * (customsRate / 100);

const vatAmount =
(subtotal + customs) * (vatRate / 100);

const total =
subtotal +
customs +
vatAmount +
fees;

const costPerItem = total / qty;

const revenue = sellPrice * qty;

const profit = revenue - total;

const profitPerItem = profit / qty;

const profitMargin =
revenue > 0
? (profit / revenue) * 100
: 0;

const roi =
total > 0
? (profit / total) * 100
: 0;

const isProfit = profit >= 0;

const status = isProfit
? "🟢 Profitable"
: "🔴 Loss";

const symbol = currency.value;

result.innerHTML = `

<h2>${status}</h2>

<h3>Total Import Cost</h3>

<p><strong>${symbol}${total.toFixed(2)}</strong></p>

<hr>

<p>

Cost per Item

<br>

<strong>${symbol}${costPerItem.toFixed(2)}</strong>

</p>

<p>

Revenue

<br>

<strong>${symbol}${revenue.toFixed(2)}</strong>

</p>

<p>

Total Profit

<br>

<strong>${symbol}${profit.toFixed(2)}</strong>

</p>

<p>

Profit per Item

<br>

<strong>${symbol}${profitPerItem.toFixed(2)}</strong>

</p>

<p>

Profit Margin

<br>

<strong>${profitMargin.toFixed(2)}%</strong>

</p>

<p>

ROI

<br>

<strong>${roi.toFixed(2)}%</strong>

</p>

`;

resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

productCost.value = "";

shippingCost.value = "";

duty.value = "";

vat.value = "";

otherFees.value = "";

result.innerHTML =
"Enter your import details, then tap Calculate.";

resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", () => {

navigator.clipboard.writeText(result.innerText);

alert("Result copied!");

});

shareBtn.addEventListener("click", async () => {

if(navigator.share){

await navigator.share({

title:"Import Cost Calculator",

text:result.innerText

});

}else{

alert("Sharing is not supported on this device.");

}

});