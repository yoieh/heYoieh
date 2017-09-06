const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'night',
            group: 'fun',
            memberName: 'night',
            description: 'Replies with a Message.',
            examples: ['night']
        });
    }

    async run(msg) {
        return msg.say('Goodnight and sleep tight! Don\'t let Ryuk bite!',{
            tts:true
        });
    }
};