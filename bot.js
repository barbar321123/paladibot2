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
        if (message.content === prefix + 'reboot') {
        
        if (message.author.id === '492951512730042369') {
            message.channel.send('[BOT] Yeniden Başlatılıyor...').then (msg => {
                console.log('Bot Yeniden Başlıyor');
            process.exit(0)
            });
        }else {
            message.channel.send('Bu Yetkiye Sahip Değilsiniz!!');
        }
            client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('Reklam Engellendi');
  }
});
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
