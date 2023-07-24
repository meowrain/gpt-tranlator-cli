const axios = require('axios');
const readline = require('readline')
const { OPENAI_API_URL, OPENAI_API_KEY } = require('./config/openai_config.json')

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
};

const data = {
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'system', content: `You are an amazing translation AI. If I provide you with Chinese, you will give me its English translation. However, if I give you English, please provide me with all the possible Chinese meanings along with some examples. You don't need to explicitly state "The word xxx in Chinese..." Just provide its Chinese meaning and an example sentence. When I give you English words or phrases, simply give me their meanings.` },
    ],
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
const getUserInput = () => {
    return new Promise((resolve) => {
        rl.question('User:', (userInput) => {
            resolve(userInput);
        });
    });
};
const printLoadingAnimation = () => {
    const frames = ['-', '\\', '|', '/'];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r${frames[i]} 加载中...`);
        i = (i + 1) % frames.length;
    }, 100);
};
const printMessageCharacterByCharacter = async (message) => {
    for (const char of message) {
        process.stdout.write('\x1b[33m' + char + '\x1b[0m');
        await sleep(30); // Adjust the delay time (in milliseconds) as per your preference
    }
    process.stdout.write('\n');
};
const getBotReply = async () => {
    try {
        const userInput = await getUserInput();
        data.messages.push({ role: 'user', content: `Translate the word or sentence "${userInput}"` });
        const loadingAnimation = printLoadingAnimation(); // 开始加载动画
        const response = await axios.post(OPENAI_API_URL, data, { headers });
        clearInterval(loadingAnimation); // 停止加载动画
        const botReply = response.data.choices[0].message.content;
        await printMessageCharacterByCharacter('Bot: ' + botReply);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
};

getBotReply();




