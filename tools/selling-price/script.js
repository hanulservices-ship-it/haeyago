const costInput = document.getElementById("cost");
const markupInput = document.getElementById("selling");
const currency = document.getElementById("currency");

const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const resultButtons = document.getElementById("resultButtons");

let lastResult = "";

calculateBtn.addEventListener("click", () => {

    const cost = parseFloat(costInput.value);
    const markup = parseFloat(markupInput.value);

    if (isNaN(cost) || isNaN(markup) || cost <= 0 || markup < 0) {

        result.innerHTML = `
        <div class="result-item">
            <h4>Invalid Input</h4>
            <p>Please enter a valid Cost Price and Markup percentage.</p>
        </div>`;

        resultButtons.style.display = "none";
        lastResult = "";
        return;

    }

    const profit = cost * (markup / 100);
    const sellingPrice = cost + profit;
    const symbol = currency.value;

    lastResult =
`Cost Price: ${symbol}${cost.toFixed(2)}
Markup: ${markup.toFixed(2)}%
Profit: ${symbol}${profit.toFixed(2)}
Selling Price: ${symbol}${sellingPrice.toFixed(2)}`;

    result.innerHTML = `
<div class="result-card">

<div class="result-item">
<h4>Selling Price</h4>
<p>${symbol}${sellingPrice.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
})}</p>
</div>

<div class="result-item">
<h4>Profit</h4>
<p>${symbol}${profit.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
})}</p>
</div>

<div class="result-item">
<h4>Markup</h4>
<p>${markup.toFixed(2)}%</p>
</div>

</div>`;

    resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

    costInput.value = "";
    markupInput.value = "";
    currency.selectedIndex = 0;

    lastResult = "";

    result.innerHTML = "Enter your Cost Price and Desired Markup, then tap Calculate.";

    resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", async () => {

    if (!lastResult) {

        alert("Nothing to copy.");
        return;

    }

    await navigator.clipboard.writeText(lastResult);

    alert("Result copied!");

});

shareBtn.addEventListener("click", async () => {

    if (!lastResult) {

        alert("Nothing to share.");
        return;

    }

    if (navigator.share) {

        try {

            await navigator.share({

                title: "Selling Price Calculator",
                text: lastResult

            });

        } catch (e) {}

    } else {

        alert("Sharing is not supported on this device.");

    }

});

[costInput, markupInput].forEach(input => {

    input.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            calculateBtn.click();

        }

    });

});