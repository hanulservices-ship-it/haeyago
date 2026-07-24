const fs = require("fs");

function buildCategories() {

    const tools = JSON.parse(
        fs.readFileSync("generator/data/tools.json", "utf8")
    );

    const categories = {};

    tools.forEach(tool => {

        if (!categories[tool.category]) {

            categories[tool.category] = [];

        }

        categories[tool.category].push(tool);

    });

    Object.keys(categories).forEach(category => {

        let html = "";

        categories[category].forEach(tool => {

            html += `
<div class="tool-card">

<h2>${tool.title}</h2>

<p>${tool.description}</p>

<a href="/tools/${tool.slug}/">

Open Calculator

</a>

</div>

`;

        });

        const filename = category
            .toLowerCase()
            .replace(/\s+/g, "-");

        fs.writeFileSync(
    `dist/categories/${filename}.html`,
    html,
    "utf8"
);

    });

}

module.exports = {
    buildCategories
};
