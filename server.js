const Discord = require("discord.js");
const Commando = require('discord.js-commando');

//const sqlite = require('sqlite');
const path = require('path');

//const client = new Discord.Client();
const client = new Commando.Client({
    owner: '343576719644426250'
});

client.setProvider('!');

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['fun', 'Fun commands'],
        ['some', 'Some group'],
        ['other', 'Some other group']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
/*
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
        
    console.log(msg);

    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
*/

client.login(process.env.TOKEN);

