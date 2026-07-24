const fs = require("fs");
const paths = require("../core/paths");

function buildNavigation() {

    const items = JSON.parse(
        fs.readFileSync("generator/data/nav.json","utf8")
    );

    return items.map(item => {

        let url = item.url;

        switch(item.title){

            case "Tools":
                url = paths.tools();
                break;

            case "Categories":
                url = paths.categories();
                break;

            case "About":
                url = paths.about();
                break;

            case "Contact":
                url = paths.contact();
                break;

        }

        return `<a href="${url}">${item.title}</a>`;

    }).join("\n");

}

module.exports = {
    buildNavigation
};