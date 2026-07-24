function id(name) {

    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");

}

function buildParser(inputs) {

    let code = "";

    inputs.forEach(input => {

        const variable = id(input);

        code += `
const ${variable}_value = parseFloat(${variable}.value);

`;

    });

    return code;

}

module.exports = {
    buildParser
};