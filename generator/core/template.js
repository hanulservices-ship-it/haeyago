function renderTemplate(template, variables) {

    let output = template;

    for (const key in variables) {

        output = output.replace(
            new RegExp(`{{${key}}}`, "g"),
            variables[key]
        );

    }

    return output;

}

module.exports = {
    renderTemplate
};
