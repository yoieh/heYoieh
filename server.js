
const Discord = require("discord.js");
const client = new Discord.Client();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
response.send("Hello from Firebase!");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
        
    console.log(msg);

    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(process.env.TOKEN);

