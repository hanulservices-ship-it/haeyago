const costInput = document.getElementById("cost");
const sellingInput = document.getElementById("selling");
const currency = document.getElementById("currency");

const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

calculateBtn.addEventListener("click", () => {

    const cost = parseFloat(costInput.value);
    const selling = parseFloat(sellingInput.value);

    if (isNaN(cost) || isNaN(selling) || cost <= 0) {

        result.innerHTML = "Please enter valid values.";

        return;

    }

    const profit = selling - cost;

    const margin = (profit / selling) * 100;

    const markup = (profit / cost) * 100;

    result.innerHTML = `
        <strong>Profit</strong><br>
        ${currency.value}${profit.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
})}
        <br><br>

        <strong>Profit Margin</strong><br>
        ${margin.toFixed(2)}%
        <br><br>

        <strong>Markup</strong><br>
        ${markup.toFixed(2)}%
    `;

});

resetBtn.addEventListener("click", () => {

    costInput.value = "";

    sellingInput.value = "";

    result.innerHTML = "Enter values then tap Calculate.";

});