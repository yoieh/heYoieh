
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '>',
    unknownCommandResponse: false,
    owner: '303212873314992128',
    disableEveryone: true
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
    client.user.setGame('Game');
});

client.login('MzQzNTc2NzE5NjQ0NDI2MjUw.DGiy3Q.BLYpGI4e28MPDuAt-8qsU29uEYM');
