const { buildInputs } = require("../html");
const { buildJSInputs } = require("../javascript");
const { buildParser } = require("../parser");
const { getFormula } = require("../formulas");

function buildCalculator(data) {

    return {

        html: buildInputs(data.inputs),

        jsInputs: buildJSInputs(data.inputs),

        parser: buildParser(data.inputs),

        formula: getFormula(
            data.calculationType,
            data.inputs
        )

    };

}

module.exports = {
    buildCalculator
};
