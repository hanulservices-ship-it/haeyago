const { buildFormula } = require("./formula-engine");

const formula = "Profit/Investment*100";

const inputs = [
    "Investment",
    "Profit"
];

console.log(buildFormula(formula, inputs));
