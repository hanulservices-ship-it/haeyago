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

calculateBtn.addEventListener("click", () => {

    const investment = parseFloat(costInput.value);
    const revenue = parseFloat(sellingInput.value);

    if (isNaN(investment) || isNaN(revenue) || investment <= 0 || revenue <= 0) {

        result.innerHTML = `
        <div class="result-item">
            <h4>Invalid Input</h4>
            <p>Please enter valid Investment and Revenue values.</p>
        </div>`;

        resultButtons.style.display = "none";
        lastResult = "";
        return;
    }

    const profit = revenue - investment;
    const roi = (profit / investment) * 100;
    const symbol = currency.value;

    lastResult =
`Investment: ${symbol}${investment.toFixed(2)}
Revenue: ${symbol}${revenue.toFixed(2)}
Profit: ${symbol}${profit.toFixed(2)}
ROI: ${roi.toFixed(2)}%`;

    result.innerHTML = `
<div class="result-card">

<div class="result-item">
<h4>ROI</h4>
<p>${roi.toFixed(2)}%</p>
</div>

<div class="result-item">
<h4>Profit</h4>
<p>${symbol}${profit.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
})}</p>
</div>

</div>`;

    resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

    costInput.value = "";
    sellingInput.value = "";
    currency.selectedIndex = 0;

    result.innerHTML = "Enter values then tap Calculate.";

    lastResult = "";

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

                title: "ROI Calculator",
                text: lastResult

            });

        } catch (e) {}

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