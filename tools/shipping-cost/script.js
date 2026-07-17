const currency = document.getElementById("currency");
const weight = document.getElementById("weight");
const rate = document.getElementById("rate");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const resultButtons = document.getElementById("resultButtons");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

let resultText = "";

function formatMoney(symbol, amount) {
    return `${symbol}${amount.toLocaleString(undefined,{
        minimumFractionDigits:2,
        maximumFractionDigits:2
    })}`;
}

calculateBtn.addEventListener("click", () => {

    const w = parseFloat(weight.value);
    const r = parseFloat(rate.value);

    if (isNaN(w) || w <= 0) {
        alert("Please enter a valid package weight.");
        weight.focus();
        return;
    }

    if (isNaN(r) || r < 0) {
        alert("Please enter a valid shipping rate.");
        rate.focus();
        return;
    }

    const total = w * r;

    const money = formatMoney(currency.value, total);
    const rateMoney = formatMoney(currency.value, r);

    resultText =
`Shipping Cost

Total Shipping Cost:
${money}

Package Weight:
${w} kg

Shipping Rate:
${rateMoney}/kg`;

    result.innerHTML = `
<h3>Total Shipping Cost</h3>

<p><strong>${money}</strong></p>

<p><strong>Weight:</strong> ${w} kg</p>

<p><strong>Rate:</strong> ${rateMoney}/kg</p>
`;

    resultButtons.style.display = "flex";
});

resetBtn.addEventListener("click", () => {

    weight.value = "";
    rate.value = "";

    result.innerHTML =
        "Enter the package weight and shipping rate, then tap Calculate.";

    resultButtons.style.display = "none";

    resultText = "";

    weight.focus();

});

copyBtn.addEventListener("click", async () => {

    await navigator.clipboard.writeText(resultText);

    alert("Result copied successfully.");

});

shareBtn.addEventListener("click", async () => {

    if (navigator.share) {

        await navigator.share({
            title: "Shipping Cost Calculator",
            text: resultText
        });

    } else {

        await navigator.clipboard.writeText(resultText);

        alert("Sharing isn't supported on this device.\nResult copied instead.");

    }

});