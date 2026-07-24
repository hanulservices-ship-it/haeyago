const first_number = document.getElementById("first-number");
const second_number = document.getElementById("second-number");


const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");

const resultButtons = document.getElementById("resultButtons");

const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

let resultText = "";

calculateBtn.addEventListener("click", () => {

    resultText = "Addition Calculator";
    
    const formula = "{{FORMULA_JS}}";

    result.innerHTML = `
<h3>Result</h3>

<p>
Replace this calculator logic.
</p>
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