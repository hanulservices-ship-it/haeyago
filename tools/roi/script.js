const investment = document.getElementById("investment");
const profit = document.getElementById("profit");


const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");

const resultButtons = document.getElementById("resultButtons");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

let resultText = "";

calculateBtn.addEventListener("click", () => {

    resultText = "ROI Calculator";

    
const investment_value = parseFloat(investment.value);


const profit_value = parseFloat(profit.value);



    
const total = (profit_value / investment_value) * 100;

result.innerHTML = `
<h3>ROI</h3>
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