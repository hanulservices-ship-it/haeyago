const currency = document.getElementById("currency");
const originalPrice = document.getElementById("originalPrice");
const discount = document.getElementById("discount");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const resultButtons = document.getElementById("resultButtons");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

calculateBtn.addEventListener("click", () => {

const price = parseFloat(originalPrice.value);
const percent = parseFloat(discount.value);

if (isNaN(price) || isNaN(percent)) {

result.innerHTML = "Please enter all values.";

resultButtons.style.display = "none";

return;

}

if (percent < 0 || percent > 100) {

result.innerHTML = "Discount must be between 0 and 100.";

resultButtons.style.display = "none";

return;

}

const discountAmount = price * (percent / 100);
const finalPrice = price - discountAmount;

result.innerHTML = `

<h3>Results</h3>

<p><strong>Original Price:</strong> ${currency.value}${price.toFixed(2)}</p>

<p><strong>Discount:</strong> ${percent.toFixed(2)}%</p>

<p><strong>You Save:</strong> ${currency.value}${discountAmount.toFixed(2)}</p>

<p><strong>Final Price:</strong> ${currency.value}${finalPrice.toFixed(2)}</p>

`;

resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

originalPrice.value = "";
discount.value = "";

result.innerHTML =
"Enter the Original Price and Discount Percentage, then tap Calculate.";

resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", () => {

navigator.clipboard.writeText(result.innerText);

alert("Result copied!");

});

shareBtn.addEventListener("click", () => {

if (navigator.share) {

navigator.share({

title: "Discount Calculator",

text: result.innerText

});

} else {

alert("Sharing is not supported on this device.");

}

});