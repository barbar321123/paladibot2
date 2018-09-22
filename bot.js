const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('BOT {client.user.tag} ADI İLE GİRİŞ YAPTI!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong' + client.ping + 'ms');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
