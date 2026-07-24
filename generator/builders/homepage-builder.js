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

const navigation = buildNavigation();

function buildHomepage() {

    const tools = JSON.parse(
        fs.readFileSync("generator/data/tools.json", "utf8")
    );
    
    const totalTools = tools.length;

const totalCategories =
    new Set(tools.map(tool => tool.category)).size;

    const homepageTemplate = fs.readFileSync(
        "generator/templates/homepage.html",
        "utf8"
    );
    
    const layoutTemplate = fs.readFileSync(
    "generator/templates/layout.html",
    "utf8"
);

    const cardTemplate = fs.readFileSync(
        "generator/templates/tool-card.html",
        "utf8"
    );

    let recentCards = "";

const recent = [...tools]
.sort((a, b) => new Date(b.created) - new Date(a.created))
.slice(0, 4);

recent.forEach(tool => {

    recentCards += renderTemplate(cardTemplate, {

        TITLE: tool.title,

        DESCRIPTION: tool.description,

        URL: paths.tool(tool.slug)

    }) + "\n";

});

let featuredCards = "";

const featured = tools
.filter(tool => tool.featured)
.slice(0, 4);

if (featured.length === 0) {

featured.push(...recent.slice(0,4));

}

featured.forEach(tool => {

    featuredCards += renderTemplate(cardTemplate, {

        TITLE: `${tool.icon} ${tool.title}`,

        DESCRIPTION: tool.description,

        URL: paths.tool(tool.slug)

    }) + "\n";

});

let categoryCards = "";

const categories = {};

tools.forEach(tool => {

    if (!categories[tool.category]) {

        categories[tool.category] = 0;

    }

    categories[tool.category]++;

});

Object.entries(categories).forEach(([name,count])=>{

    categoryCards += `

<div class="card">

<h3>${name}</h3>

<p>${count} Tool${count>1?"s":""}</p>

<a class="btn-secondary"

href="/categories/${name.toLowerCase().replace(/\s+/g,"-")}.html">

Browse

</a>

</div>

`;

});

    const homepageContent = renderTemplate(homepageTemplate,{

    HEADER: header.replace(
    "{{NAVIGATION}}",
    navigation
),

    FOOTER: footer,

    CURRENT_YEAR: new Date().getFullYear(),
    
    TOTAL_TOOLS: totalTools,

TOTAL_CATEGORIES: totalCategories,

    RECENT_TOOLS: recentCards,

FEATURED_TOOLS: featuredCards,

POPULAR_CATEGORIES: categoryCards

});

const html = renderTemplate(layoutTemplate,{

TITLE:"HaeyaGo Calculators",

DESCRIPTION:"HaeyaGo Online Calculators",

KEYWORDS:"business tools, online calculators",

CANONICAL:"https://haeyago.com/",

HEADER:header.replace(
    "{{NAVIGATION}}",
    navigation
),

CONTENT:homepageContent,

FOOTER:footer.replace(
    "{{CURRENT_YEAR}}",
    new Date().getFullYear()
),

SCRIPTS:""

});

    fs.writeFileSync(

    "index.html",

    html,

    "utf8"

);

    console.log("Homepage rebuilt.");

}

module.exports = {
    buildHomepage
};