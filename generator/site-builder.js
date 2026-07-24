const { buildHomepage } = require("./builders/homepage-builder");
const { buildCategories } = require("./builders/category-builder");
const { buildToolsPage } = require("./builders/tools-builder");
const { buildSitemap } = require("./builders/sitemap-builder");

function buildSite() {

    buildHomepage();

    buildToolsPage();

    buildCategories();

    buildSitemap();

}

module.exports = {
    buildSite
};