const tools = require("../data/tools.json");

function buildRelated(currentSlug, category) {

    return tools
        .filter(t => t.slug !== currentSlug && t.category === category)
        .slice(0, 6)
        .map(t =>
            `<a href="/tools/${t.slug}/">${t.title}</a>`
        )
        .join("\n");

}

module.exports = {
    buildRelated
};