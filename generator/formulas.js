function id(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
}

function getFormula(type, inputs) {

    const vars = inputs.map(id);
    
    const values = vars.map(v => `${v}_value`);

    switch (type) {

    case "1":

        return `
const total = ${values[0]} + ${values[1]};

result.innerHTML = \`
<h3>Result</h3>
<p><strong>\${total}</strong></p>
\`;
`;

    case "2":

        return `
const total = ${values[0]} - ${values[1]};

result.innerHTML = \`
<h3>Result</h3>
<p><strong>\${total}</strong></p>
\`;
`;

    case "3":

        return `
const total = ${values[0]} * ${values[1]};

result.innerHTML = \`
<h3>Result</h3>
<p><strong>\${total}</strong></p>
\`;
`;

    case "4":

        return `
const total = ${values[0]} / ${values[1]};

result.innerHTML = \`
<h3>Result</h3>
<p><strong>\${total}</strong></p>
\`;
`;

    case "5":

        return `
const total = ((${values[0]} - ${values[1]}) / ${values[0]}) * 100;

result.innerHTML = \`
<h3>Profit Margin</h3>
<p><strong>\${total.toFixed(2)}%</strong></p>
\`;
`;

    case "6":

        return `
const total = (${values[1]} / ${values[0]}) * 100;

result.innerHTML = \`
<h3>ROI</h3>
<p><strong>\${total.toFixed(2)}%</strong></p>
\`;
`;

    case "7":

        return `
const total = ${values[0]} / ${values[1]};

result.innerHTML = \`
<h3>ROAS</h3>
<p><strong>\${total.toFixed(2)}x</strong></p>
\`;
`;

    default:

    return `
result.innerHTML = "<p>Formula not implemented.</p>";
`;

    }

}

module.exports = {
    getFormula
};