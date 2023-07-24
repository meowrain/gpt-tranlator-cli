// message_display.js
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
const printMessageCharacterByCharacter = async (message) => {
    for (const char of message) {
        process.stdout.write('\x1b[33m' + char + '\x1b[0m');
        await sleep(30); // Adjust the delay time (in milliseconds) as per your preference
    }
    process.stdout.write('\n');
};

module.exports = { printMessageCharacterByCharacter };
