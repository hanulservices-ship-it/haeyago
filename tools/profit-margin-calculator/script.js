const costInput = document.getElementById("cost");
const sellingInput = document.getElementById("selling");
const currency = document.getElementById("currency");

const result = document.getElementById("result");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

let lastResult = "";

calculateBtn.addEventListener("click", () => {

    const cost = parseFloat(costInput.value);
    const selling = parseFloat(sellingInput.value);

    if (isNaN(cost) || isNaN(selling) || cost <= 0 || selling <= 0) {

        result.innerHTML = "Please enter valid values.";

        lastResult = "";

        return;

    }

    const profit = selling - cost;
    const margin = (profit / selling) * 100;
    const markup = (profit / cost) * 100;

    const symbol = currency.value;

    lastResult =
`Profit: ${symbol}${profit.toLocaleString(undefined,{
minimumFractionDigits:2,
maximumFractionDigits:2
})}

Profit Margin: ${margin.toFixed(2)}%

Markup: ${markup.toFixed(2)}%`;

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

</div>`;

});

resetBtn.addEventListener("click",()=>{

    costInput.value="";
    sellingInput.value="";
    currency.selectedIndex=0;

    lastResult="";

    result.innerHTML="Enter values then tap Calculate.";

});

copyBtn.addEventListener("click",async()=>{

    if(lastResult===""){

        alert("Nothing to copy.");

        return;

    }

    await navigator.clipboard.writeText(lastResult);

    alert("Result copied!");

});

shareBtn.addEventListener("click", async () => {

    if(lastResult===""){

        alert("Nothing to share.");

        return;

    }

    if(navigator.share){

        try{

            await navigator.share({

                title:"Profit Margin Calculator",

                text:lastResult

            });

        }catch(err){}

    }else{

        alert("Sharing is not supported on this device.");

    }

});