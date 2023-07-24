const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const setConfig = () => {
    rl.question('Enter your OpenAI API URL: ', (apiUrl) => {
        rl.question('Enter your OpenAI API Key: ', (apiKey) => {
            const configData = {
                OPENAI_API_URL: apiUrl + "/v1/chat/completions",
                OPENAI_API_KEY: apiKey,
            };

            const configPath = '../config/openai_config.json';

            try {
                fs.writeFileSync(configPath, JSON.stringify(configData, null, 4));
                console.log('Config updated successfully!');
            } catch (error) {
                console.error(error);
            }

            rl.close();
        });
    });
};
setConfig();