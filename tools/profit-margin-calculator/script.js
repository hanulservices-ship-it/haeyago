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

    const symbol = currency.value;

    result.innerHTML = `
<div class="result-card">

<div class="result-item">

<h4>Profit</h4>

<p>${symbol}${profit.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
})}</p>

</div>

<div class="result-item">

<h4>Profit Margin</h4>

<p>${margin.toFixed(2)}%</p>

</div>

<div class="result-item">

<h4>Markup</h4>

<p>${markup.toFixed(2)}%</p>

</div>

</div>
`;

});

resetBtn.addEventListener("click",()=>{

    costInput.value="";
    sellingInput.value="";
    currency.selectedIndex=0;

    result.innerHTML="Enter values then tap Calculate.";

});