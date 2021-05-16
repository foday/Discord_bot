require('dotenv').config();

const { Client } = require('discord.js');
// create a client object from a Client class
const client = new Client();

// referenceing the login method from the Client class
client.login(process.env.DISCORDJS_BOT_TOKEN);
