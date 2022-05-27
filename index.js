const TelegramApi = require('node-telegram-bot-api')
const token = '5212759231:AAEfLTwnqJ2KfJ0n089El8pBObN8Pjr-QNk';


const bot = new TelegramApi(token, { polling: true })



const start = () => {
bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    



    bot.setMyCommands([
        { command: '/start', description: 'начальное приветсвие' },
        { command: '/info', description: 'получить информацию о пользователе' }
    ])



    switch (text.toLowerCase().trim()) {
        case '/start':
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4a4/f28/4a4f2880-e005-3f8f-ab47-2bb189e7d263/1.webp')
            await bot.sendMessage(chatId, 'Приветсвтую!! давай создадим живое общение');
            await bot.sendMessage(chatId, 'И еще.. пока надо мной работают, попрошу тебя писать все с маленькой буквы. А я постараюсь понять');
            break;
        case '/info' :
            await bot.sendMessage(chatId, `юзер ${msg.from.first_name} ${msg.from.username}`);
            break;
        case 'ты знаешь мое имя?':
            await bot.sendMessage(chatId, `Да... Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
            break;
        case 'неправда':
            await bot.sendMessage(chatId, `не пизди мне`);
            break;
        case 'блядь':
            await bot.sendMessage(chatId, 'Нельзя так ругаться!!')
            break;
        case 'как дела?':
            await bot.sendMessage(chatId, 'в принципе норм, хочу шпротиков')
            break;
        case 'как твое настроение?':
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4a4/f28/4a4f2880-e005-3f8f-ab47-2bb189e7d263/192/8.webp');
            await bot.sendMessage(chatId, 'Ты знаешь, замечательно... хотя тебя спрашивать не буду. Не люблю банальных вопросов');
            break;
        case 'расскажи анекдот':
            await bot.sendMessage(chatId, 'Жил-был царь. И было у него косоглазие. Пошёл он однажды куда глаза глядят и порвался.');
            break;
        case 'пошел нахуй':
            await bot.sendMessage(chatId, 'зачем обзываешься?? я уйду сейчас');
            break;
        case 'пока':
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4a4/f28/4a4f2880-e005-3f8f-ab47-2bb189e7d263/192/30.webp');
            await bot.sendMessage(chatId, 'Всего хорошего');
            break;
        default:
            await bot.sendMessage(chatId, 'давай поговорим,спроси меня что нибудь адекватное ?)')

    }



})
}

start();