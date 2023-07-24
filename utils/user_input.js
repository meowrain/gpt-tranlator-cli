const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const getUserInput = () => {
    return new Promise((resolve) => {
        rl.question('User:', (userInput) => {
            resolve(userInput);
        });
    });
};
module.exports = { getUserInput };