var PORT = process.env.PORT || 5000;
require('dotenv').config();

const { Client } = require('discord.js');
// create a client object from a Client class
const client = new Client();

client.on('ready', () => {
    console.log(client.user.tag+' has logged in.');
});

client.on('message', (message) => {
 console.log(message.author.tag + message.content);
 if (message.content === 'hello') {
     message.reply('Ahoy');
}
});
// referenceing the login method from the Client class
client.login(process.env.DISCORDJS_BOT_TOKEN);
