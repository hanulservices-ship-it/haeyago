const marketplace = document.getElementById("marketplace");
const currency = document.getElementById("currency");

const sellingPrice = document.getElementById("sellingPrice");
const productCost = document.getElementById("productCost");
const feeRate = document.getElementById("feeRate");

const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

const resultButtons = document.getElementById("resultButtons");

// Default fee presets
marketplace.addEventListener("change", () => {

const fees = {
shopee: 5,
lazada: 5,
tiktok: 4,
ebay: 13,
etsy: 6.5,
custom: 0
};

feeRate.value = fees[marketplace.value];

});

// Set initial fee
marketplace.dispatchEvent(new Event("change"));

calculateBtn.addEventListener("click", () => {

const sell = Number(sellingPrice.value);
const cost = Number(productCost.value);
const fee = Number(feeRate.value);

const marketplaceFee = sell * (fee / 100);

const netRevenue = sell - marketplaceFee;

const profit = netRevenue - cost;

const margin =
sell > 0
? (profit / sell) * 100
: 0;

const roi =
cost > 0
? (profit / cost) * 100
: 0;

const symbol = currency.value;

const status =
profit >= 0
? "🟢 Profitable"
: "🔴 Loss";

result.innerHTML = `

<h2>${status}</h2>

<p>
Marketplace Fee<br>
<strong>${symbol}${marketplaceFee.toFixed(2)}</strong>
</p>

<p>
Net Revenue<br>
<strong>${symbol}${netRevenue.toFixed(2)}</strong>
</p>

<p>
Profit<br>
<strong>${symbol}${profit.toFixed(2)}</strong>
</p>

<p>
Profit Margin<br>
<strong>${margin.toFixed(2)}%</strong>
</p>

<p>
ROI<br>
<strong>${roi.toFixed(2)}%</strong>
</p>

`;

resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

sellingPrice.value = "";
productCost.value = "";
marketplace.dispatchEvent(new Event("change"));

result.innerHTML =
"Enter your values, then tap Calculate.";

resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", () => {

navigator.clipboard.writeText(result.innerText);

alert("Result copied!");

});

shareBtn.addEventListener("click", async () => {

if (navigator.share) {

await navigator.share({
title: "Marketplace Fee Calculator",
text: result.innerText
});

} else {

alert("Sharing is not supported on this device.");

}

});