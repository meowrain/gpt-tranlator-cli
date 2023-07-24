// openai.js
const axios = require('axios');
const { OPENAI_API_URL, OPENAI_API_KEY } = require('../config/openai_config.json');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
};

const data = {
    model: 'gpt-3.5-turbo',
    messages: [
        {
            role: 'system',
            content: `You are an amazing translation AI. If I provide you with Chinese, you will give me its English translation. However, if I give you English, please provide me with all the possible Chinese meanings along with some examples. You don't need to explicitly state "The word xxx in Chinese..." Just provide its Chinese meaning and an example sentence. When I give you English words or phrases, simply give me their meanings.`,
        },
    ],
};

const translateUserInput = async (userInput) => {
    data.messages.push({ role: 'user', content: `Translate the word or sentence "${userInput}"` });
    const response = await axios.post(OPENAI_API_URL, data, { headers });
    return response.data.choices[0].message.content;
};

module.exports = { translateUserInput };
