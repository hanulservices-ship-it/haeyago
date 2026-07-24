const fs = require("fs");
const { renderTemplate } = require("../core/template");

function buildToolPage(folder, data, calculatorForm, content, related) {

    const template = fs.readFileSync(
        "generator/templates/tool-page.html",
        "utf8",
    );
    
    const header = fs.readFileSync(
    "generator/templates/components/header.html",
    "utf8"
);

const footer = fs.readFileSync(
    "generator/templates/components/footer.html",
    "utf8"
);

    const html = renderTemplate(template, {

        HEADER: header,

FOOTER: footer,

CURRENT_YEAR: new Date().getFullYear(),
        
        TOOL_NAME: data.toolName,

        CATEGORY: data.category,

        META_DESCRIPTION: data.description,

        META_KEYWORDS: data.keywords,

        CANONICAL_URL: `https://haeyago.com/tools/${data.slug}/`,

        CALCULATOR_FORM: calculatorForm,

        TOOL_INTRO: content.intro,

HOW_TO_USE: "",

FAQ: "",

FORMULA: "",

RELATED_TOOLS: related,

    });

    fs.writeFileSync(
        `${folder}/index.html`,
        html,
        "utf8"
    );

}

module.exports = {
    buildToolPage
};