const readline = require("readline");

function ask(question) {

    const rl = readline.createInterface({

        input: process.stdin,

        output: process.stdout

    });

    return new Promise(resolve => {

        rl.question(question, answer => {

            rl.close();

            resolve(answer);

        });

    });

}

async function developerMenu() {

    console.log("");

    console.log("========================================");

    console.log("HaeyaGo Developer Console");

    console.log("========================================");

    console.log("");

    console.log("1. Create Calculator");

    console.log("2. Rebuild Website");

    console.log("3. Exit");

    console.log("");

    return await ask("Choose: ");

}

module.exports = {

    developerMenu

};
