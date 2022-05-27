const Discord = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Discord.Client({
    intents: 32767
});
const discordModals = require('discord-modals')
discordModals(client);

module.exports = client;
client.config = require('./config/config.json');
client.slash = require('./config/slash.json');
client.commands = new Collection();
require("./handler")(client);


client.login(client.config.token);