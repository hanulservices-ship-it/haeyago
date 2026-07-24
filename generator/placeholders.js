const fs = require("fs");

function replacePlaceholders(file, replacements) {

    let content = fs.readFileSync(file, "utf8");

    for (const key in replacements) {

        const value = replacements[key];

        content = content.replaceAll(`{{${key}}}`, value);

    }

    fs.writeFileSync(file, content);

}

module.exports = {
    replacePlaceholders
};