const { buildSite } = require("./site-builder");

async function runCommand(choice) {

    switch (choice) {

        case "1":
            return "create";

        case "2":

            buildSite();

            console.log("\nWebsite rebuilt.");

            return "done";

        case "3":

            console.log("\nGoodbye!");

            return "exit";

        default:

            console.log("\nInvalid option.");

            return "done";

    }

}

module.exports = {
    runCommand
};
