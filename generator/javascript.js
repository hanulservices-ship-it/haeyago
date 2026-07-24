function buildJSInputs(inputs) {

    let js = "";

    for (const label of inputs) {

        const id = label
            .toLowerCase()
            .replace(/\s+/g, "-");

        const variable = id.replace(/-/g, "_");

        js += `const ${variable} = document.getElementById("${id}");\n`;

    }

    return js;

}

module.exports = {
    buildJSInputs
};