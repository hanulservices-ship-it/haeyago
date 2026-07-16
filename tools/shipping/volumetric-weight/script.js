const length = document.getElementById("length");
const width = document.getElementById("width");
const height = document.getElementById("height");

const actualWeight = document.getElementById("actualWeight");

const dimensionUnit = document.getElementById("dimensionUnit");
const weightUnit = document.getElementById("weightUnit");

const divisor = document.getElementById("divisor");
const customDivisor = document.getElementById("customDivisor");
const customDivisorGroup = document.getElementById("customDivisorGroup");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");

const result = document.getElementById("result");
const resultButtons = document.getElementById("resultButtons");

divisor.addEventListener("change", () => {

    customDivisorGroup.style.display =
        divisor.value === "custom"
            ? "block"
            : "none";

});

calculateBtn.addEventListener("click", () => {

    let l = parseFloat(length.value);
    let w = parseFloat(width.value);
    let h = parseFloat(height.value);
    let aw = parseFloat(actualWeight.value);

    if (
        isNaN(l) ||
        isNaN(w) ||
        isNaN(h) ||
        isNaN(aw)
    ) {

        result.innerHTML =
            "⚠️ Please complete all fields.";

        resultButtons.style.display = "none";

        return;

    }

    if (dimensionUnit.value === "in") {

        l *= 2.54;
        w *= 2.54;
        h *= 2.54;

    }

    if (weightUnit.value === "lb") {

        aw *= 0.45359237;

    }

    let d =
        divisor.value === "custom"
            ? parseFloat(customDivisor.value)
            : parseFloat(divisor.value);

    if (isNaN(d) || d <= 0) {

        result.innerHTML =
            "⚠️ Invalid shipping divisor.";

        resultButtons.style.display = "none";

        return;

    }

    const volumetric = (l * w * h) / d;

    const chargeable =
        Math.max(volumetric, aw);

    result.innerHTML = `
<h3>Calculation Result</h3>

<p><strong>Volumetric Weight:</strong>
${volumetric.toFixed(2)} kg</p>

<p><strong>Actual Weight:</strong>
${aw.toFixed(2)} kg</p>

<p><strong>Chargeable Weight:</strong>
${chargeable.toFixed(2)} kg</p>

<p><strong>Formula:</strong>

(${l.toFixed(2)} × ${w.toFixed(2)} × ${h.toFixed(2)}) ÷ ${d}

</p>
`;

    resultButtons.style.display = "flex";

});

resetBtn.addEventListener("click", () => {

    length.value = "";
    width.value = "";
    height.value = "";

    actualWeight.value = "";

    dimensionUnit.value = "cm";
    weightUnit.value = "kg";

    divisor.value = "5000";

    customDivisor.value = "";

    customDivisorGroup.style.display = "none";

    result.innerHTML =
        "Enter your package dimensions and weight, then tap Calculate.";

    resultButtons.style.display = "none";

});

copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(
            result.innerText
        );

        alert("Result copied!");

    } catch {

        alert("Unable to copy.");

    }

});

shareBtn.addEventListener("click", async () => {

    const text = result.innerText;

    if (navigator.share) {

        navigator.share({

            title: "Volumetric Weight Calculator",

            text

        });

    } else {

        try {

            await navigator.clipboard.writeText(text);

            alert("Sharing not supported. Result copied instead.");

        } catch {

            alert("Sharing not supported.");

        }

    }

});