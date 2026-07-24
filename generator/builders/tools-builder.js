const fs = require("fs");

const { renderTemplate } = require("../core/template");
const { buildNavigation } = require("./nav-builder");

const paths = require("../core/paths");

const header = fs.readFileSync(
    "generator/templates/components/header.html",
    "utf8"
);

const footer = fs.readFileSync(
    "generator/templates/components/footer.html",
    "utf8"
);

const template = fs.readFileSync(
    "generator/templates/tools.html",
    "utf8"
);

const cardTemplate = fs.readFileSync(
    "generator/templates/tool-card.html",
    "utf8"
);

const navigation = buildNavigation();

function buildToolsPage(){

    const tools = JSON.parse(
        fs.readFileSync(
            "generator/data/tools.json",
            "utf8"
        )
    );
    
    tools.sort((a, b) => a.title.localeCompare(b.title));

    let cards = "";

    tools.forEach(tool=>{

        cards += renderTemplate(cardTemplate,{
            TITLE:tool.title,
            DESCRIPTION:tool.description,
            URL: paths.tool(tool.slug)
        }) + "\n";

    });

    const html = renderTemplate(template,{
        HEADER:header.replace(
            "{{NAVIGATION}}",
            navigation
        ),
        FOOTER:footer.replace(
            "{{CURRENT_YEAR}}",
            new Date().getFullYear()
        ),
        TOOLS:cards
    });

    fs.mkdirSync("tools",{
        recursive:true
    });

    fs.writeFileSync(
        "tools/index.html",
        html,
        "utf8"
    );

    console.log("Generated Tools Index.");

}

module.exports = {
    buildToolsPage
};