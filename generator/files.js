const fs = require("fs");
const path = require("path");

function createToolFolder(slug) {

    const folder = `tools/${slug}`;

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }

    return folder;
}

function copyTemplateFiles(folder) {

    const template = "tools/_template";

    fs.copyFileSync(
        path.join(template, "index.html"),
        path.join(folder, "index.html")
    );

    fs.copyFileSync(
        path.join(template, "style.css"),
        path.join(folder, "style.css")
    );

    fs.copyFileSync(
        path.join(template, "script.js"),
        path.join(folder, "script.js")
    );

}

module.exports = {
    createToolFolder,
    copyTemplateFiles
};