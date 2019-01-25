const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
     console.log('Я готов!');
     });
     
     client.on('message', message => {
         if (message.content === 'help') {
           messega.reply('/mute [участник] [причина] /ban [участник] [причина] /kick [участник] [причина] /send [текст] /serverinfo /prune [число](очищает чат)');
                });
                
                
                
                clitent.login(process.env.BOT_TOKEN);
