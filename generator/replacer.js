const fs = require("fs");

function replacePlaceholders(file, data) {

    let content = fs.readFileSync(file, "utf8");

    for (const key in data) {

        const placeholder = `{{${key}}}`;

        content = content.split(placeholder).join(data[key]);

    }

    fs.writeFileSync(file, content);

}

module.exports = {
    replacePlaceholders
};