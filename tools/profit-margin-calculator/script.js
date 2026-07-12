const costInput = document.getElementById("cost");
const sellingInput = document.getElementById("selling");
const currency = document.getElementById("currency");

const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const resultButtons = document.getElementById("resultButtons");

let lastResult = "";

function money(value, symbol) {
    return symbol + value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

calculateBtn.addEventListener("click", () => {

    const cost = parseFloat(costInput.value);
    const selling = parseFloat(sellingInput.value);

    if (costInput.value === "" || sellingInput.value === "") {

        result.innerHTML = `
<div class="result-item">
<h4>Missing Information</h4>
<p>Please enter both Cost Price and Selling Price.</p>
</div>`;

        resultButtons.style.display = "none";
        lastResult = "";
        return;

    }

    if (cost <= 0 || selling <= 0) {

        result.innerHTML = `
<div class="result-item">
<h4>Invalid Value</h4>
<p>Values must be greater than zero.</p>
</div>`;

        resultButtons.style.display = "none";
        lastResult = "";
        return;

    }

    const symbol = currency.value;

    const profit = selling - cost;
    const margin = (profit / selling) * 100;
    const markup = (profit / cost) * 100;
    const roi = (profit / cost) * 100;

    lastResult =
`Cost Price: ${money(cost,symbol)}
Selling Price: ${money(selling,symbol)}
Profit: ${money(profit,symbol)}
Profit Margin: ${margin.toFixed(2)}%
Markup: ${markup.toFixed(2)}%
ROI: ${roi.toFixed(2)}%`;

    result.innerHTML = `

<div class="result-card">

<div class="result-item">
<h4>Cost Price</h4>
<p>${money(cost,symbol)}</p>
</div>

<div class="result-item">
<h4>Selling Price</h4>
<p>${money(selling,symbol)}</p>
</div>

<div class="result-item">
<h4>Profit</h4>
<p>${money(profit,symbol)}</p>
</div>

<div class="result-item">
<h4>Profit Margin</h4>
<p>${margin.toFixed(2)}%</p>
</div>

<div class="result-item">
<h4>Markup</h4>
<p>${markup.toFixed(2)}%</p>
</div>

<div class="result-item">
<h4>ROI</h4>
<p>${roi.toFixed(2)}%</p>
</div>

</div>
`;

    resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

    costInput.value = "";
    sellingInput.value = "";
    currency.selectedIndex = 0;

    lastResult = "";

    result.innerHTML = "Enter values then tap Calculate.";

    resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", async () => {

    if (lastResult === "") {
        alert("Nothing to copy.");
        return;
    }

    await navigator.clipboard.writeText(lastResult);

    alert("Result copied!");

});

shareBtn.addEventListener("click", async () => {

    if (lastResult === "") {
        alert("Nothing to share.");
        return;
    }

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Profit Margin Calculator",
                text: lastResult
            });

        } catch (err) {}

    } else {

        alert("Sharing is not supported on this device.");

    }

});

[costInput, sellingInput].forEach(input => {

    input.addEventListener("keydown", e => {

        if (e.key === "Enter") {
            calculateBtn.click();
        }

    });

});