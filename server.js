
require('dotenv').config()
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: process.env.PREFIX,
    unknownCommandResponse: false,
    owner: process.env.OWNER,
    disableEveryone: true,
    clientPermissions: ['MANAGE_MESSAGES']
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['fun', 'Just For fun!']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, '/commands'));

client.on('ready', () => {
    console.log('Logged in!');
});

client.login(process.env.TOKEN);
