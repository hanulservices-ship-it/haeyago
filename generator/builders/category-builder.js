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

const layout = fs.readFileSync(
    "generator/templates/layout.html",
    "utf8"
);

const cardTemplate = fs.readFileSync(
    "generator/templates/tool-card.html",
    "utf8"
);

const navigation = buildNavigation();

function buildCategories(){

const tools = JSON.parse(

fs.readFileSync(

"generator/data/tools.json",

"utf8"

)

);

tools.sort((a, b) => a.title.localeCompare(b.title));

const categories = {};

tools.forEach(tool=>{

if(!categories[tool.category]){

categories[tool.category]=[];

}

categories[tool.category].push(tool);

});

Object.keys(categories).forEach(category=>{

let cards="";

categories[category].forEach(tool=>{

cards+=renderTemplate(cardTemplate,{

TITLE:tool.title,

DESCRIPTION:tool.description,

URL: paths.tool(tool.slug)

})+"\n";

});

const slug = category
.toLowerCase()
.replace(/\s+/g,"-");

const content = `
<main class="container">

<section>

<h1>${category} Calculators</h1>

<div class="grid">

${cards}

</div>

</section>

</main>
`;

const html = renderTemplate(layout,{

TITLE:`${category} Calculators | HaeyaGo`,

DESCRIPTION:`Browse ${category} calculators on HaeyaGo.`,

KEYWORDS:`${category.toLowerCase()} calculators`,

CANONICAL:`https://haeyago.com/categories/${slug}.html`,

HEADER:header.replace(
"{{NAVIGATION}}",
navigation
),

CONTENT:content,

FOOTER:footer.replace(
"{{CURRENT_YEAR}}",
new Date().getFullYear()
),

SCRIPTS:""

});

fs.mkdirSync("categories",{
recursive:true
});

fs.writeFileSync(

`categories/${slug}.html`,

html,

"utf8"

);

console.log(`Generated category: ${category}`);

});

}

module.exports = {
    buildCategories
};