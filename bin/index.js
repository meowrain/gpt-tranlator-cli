const { getUserInput } = require('./utils/user_input');
const { translateUserInput } = require('./utils/openai');
const {printMessageCharacterByCharacter} = require('./utils/msg_display')

const getBotReply = async () => {
    try {
        const userInput = await getUserInput();
        const botReply = await translateUserInput(userInput);
        await printMessageCharacterByCharacter('Bot: ' + botReply);
        process.exit(1);
    } catch (error) {
        console.error(error);
    }
    
};

getBotReply();
