const readline = require("readline");
const { presets } = require("./presets");

function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}

async function startWizard() {

    console.log("");
    console.log("========================================");
    console.log("HaeyaGo Calculator Wizard");
    console.log("========================================");
    console.log("");

    console.log("========================================");
    console.log("Calculator Types");
    console.log("========================================");
    console.log("");

    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Profit Margin");
    console.log("6. ROI");
    console.log("7. ROAS");
    console.log("8. Commission");
    console.log("9. Discount");
    console.log("10. VAT");
    console.log("11. Selling Price");
    console.log("12. Break-even");
    console.log("13. Currency Spread");
    console.log("14. Shipping Cost");
    console.log("15. Packaging Cost");
    console.log("16. Currency Converter");
    console.log("17. Custom Formula");

    const calculationType = await ask("Calculator Type: ");

    let toolName;
    let slug;
    let category;
    let description;
    let keywords;
    let inputs = [];

    if (presets[calculationType]) {

        const preset = presets[calculationType];

        toolName = preset.title;
        slug = preset.slug;
        category = preset.category;
        description = preset.description;
        keywords = preset.keywords;
        inputs = preset.inputs;

        console.log("");
        console.log("Using preset:");
        console.log("Title:", toolName);
        console.log("Slug :", slug);

        console.log("");
        console.log("Using preset inputs:");

        inputs.forEach(input => {
            console.log("- " + input);
        });

    } else {

        toolName = await ask("Tool Name: ");
        slug = await ask("Slug: ");
        category = await ask("Category: ");
        description = await ask("Description: ");
        keywords = await ask("SEO Keywords: ");

        const inputCount = Number(await ask("How many inputs? "));

        for (let i = 1; i <= inputCount; i++) {

            const label = await ask(`Input #${i}: `);

            inputs.push(label);

        }

    }

    return {
        toolName,
        slug,
        category,
        description,
        keywords,
        calculationType,
        inputs
    };

}

module.exports = {
    startWizard
};