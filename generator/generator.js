const { buildJSInputs } = require("./javascript");

const { buildInputs } = require("./html");

const { buildParser } = require("./parser");

const { replacePlaceholders } = require("./replacer");

const { updateRegistry } = require("./registry");

const { buildSite } = require("./site-builder");

const { buildToolPage } = require("./builders/tool-builder");

const { developerMenu } = require("./menu");

const { buildRelated } = require("./builders/related-builder");

const { buildCalculator } = require("./builders/calculator-builder");

const { buildContent } = require("./builders/content-builder");

const { startWizard } = require("./wizard");
const { createToolFolder, copyTemplateFiles } = require("./files");

const { getFormula } = require("./formulas");

async function main() {

    const choice = await developerMenu();

if (choice === "3") {

    console.log("\nGoodbye!");

    return;

}

if (choice === "2") {

    buildSite();

    console.log("\nWebsite rebuilt.");

    return;

}

const data = await startWizard();

    console.log("");
    console.log("========================================");
    console.log("Calculator Summary");
    console.log("========================================");
    
    console.log("Calculation Type :", data.calculationType);

    console.log("Tool Name :", data.toolName);
    console.log("Slug      :", data.slug);
    console.log("Category  :", data.category);
    console.log("Description:", data.description);
    console.log("Keywords  :", data.keywords);
    
    console.log("Inputs:");

data.inputs.forEach((input, index) => {
    console.log(`${index + 1}. ${input}`);
});

    const folder = createToolFolder(data.slug);

copyTemplateFiles(folder);

const calculator = buildCalculator(data);

const content = buildContent(data);

const related = buildRelated(
    data.slug,
    data.category
);

buildToolPage(
    folder,
    data,
    buildInputs(data.inputs),
    content,
    related
);

replacePlaceholders(`${folder}/script.js`, {

    JS_INPUTS: calculator.jsInputs,

    PARSER: calculator.parser,

    RESULT_TITLE: data.toolName,

    FORMULA: calculator.formula

});

    updateRegistry(data);

buildSite();

console.log("");
console.log("Folder created:");
console.log(folder);

}

main();