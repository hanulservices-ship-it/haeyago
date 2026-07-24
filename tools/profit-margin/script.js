const revenue = document.getElementById("revenue");
const cost = document.getElementById("cost");


const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");

const resultButtons = document.getElementById("resultButtons");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

let resultText = "";

calculateBtn.addEventListener("click", () => {

    resultText = "Profit Margin Calculator";

    
const revenue_value = parseFloat(revenue.value);


const cost_value = parseFloat(cost.value);



    
const total = ((revenue_value - cost_value) / revenue_value) * 100;

result.innerHTML = `
<h3>Profit Margin</h3>
<p><strong>${total.toFixed(2)}%</strong></p>
`;


    resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

    result.innerHTML =
    "Enter the required values, then tap Calculate.";

    resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(resultText);

        alert("Result copied!");

    } catch {

        alert("Unable to copy.");

    }

});

shareBtn.addEventListener("click", async () => {

    if (navigator.share) {

        await navigator.share({

            title: document.title,

            text: resultText

        });

    } else {

        try {

            await navigator.clipboard.writeText(resultText);

            alert("Sharing isn't supported. Result copied instead.");

        } catch {

            alert("Unable to share.");

        }

    }

});