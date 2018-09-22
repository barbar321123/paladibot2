const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('BOT {client.user.tag} ADI İLE GİRİŞ YAPTI!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Sunucunun Ping Değeri! ' + client.ping + ' ms');
  	}
    
        // If the message is "what is my avatar"
        if (message.content === 'avatarim') {
          // Send the user's avatar URL
          message.reply(message.author.avatarURL);
        }
      


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
