const fs = require("fs");

function updateRegistry(data) {

    const path = "generator/data/tools.json";

    let tools = [];

    if (fs.existsSync(path)) {

        tools = JSON.parse(fs.readFileSync(path, "utf8"));

    }

    const exists = tools.find(tool => tool.slug === data.slug);

    if (!exists) {

        tools.push({

    title: data.toolName,

    slug: data.slug,

    category: data.category,

    description: data.description,

    keywords: data.keywords,

    created: new Date().toISOString(),

    featured: false,

    icon: "🧮"

});

    }

    fs.writeFileSync(
    path,
    JSON.stringify(tools, null, 4),
    "utf8"
);

}

module.exports = {
    updateRegistry
};