function buildFormula(formula, inputs) {

    let output = formula;

    inputs.forEach(input => {

        const variable = input
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");

        output = output.replaceAll(
            input,
            `${variable}_value`
        );

    });

    return output;

}

module.exports = {
    buildFormula
};
