const fs = require("fs");

function buildSitemap() {

    const tools = JSON.parse(
        fs.readFileSync("generator/data/tools.json", "utf8")
    );

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;

    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    xml += `
<url>
<loc>https://haeyago.com/</loc>
</url>
`;

    tools.forEach(tool => {

        xml += `
<url>
<loc>https://haeyago.com/tools/${tool.slug}/</loc>
</url>
`;

    });

    xml += `</urlset>`;

    fs.writeFileSync(
        "dist/sitemap.xml",
        xml,
        "utf8"
    );

}

module.exports = {
    buildSitemap
};
