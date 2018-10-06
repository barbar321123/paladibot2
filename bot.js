const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '?'

client.on('ready', () => {
    console.log('BOT {client.user.tag} ADI İLE GİRİŞ YAPTI!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Sunucunun Ping Değeri! ' + client.ping + ' ms');
  	}
    
        // If the message is "what is my avatar"
        if (message.content === prefix + 'avatarım') {
          // Send the user's avatar URL
          message.reply(message.author.avatarURL);
        }
        if (message.content === prefix + 'davetlinki') {
          message.reply('https://discordapp.com/oauth2/authorize?client_id=492398392253612073&scope=bot&permissions=2146958847');
        }
        if (msg.content === 'discord.gg') {
           msg.delete(30)
         msg.reply('Reklam Engellendi');
      }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
