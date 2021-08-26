const Discord = require('discord.js');
module.exports = {
    name: "say",
    description: "Says a Message",
    async execute(message, args){
     if(message.author.id !== '680407776593182735') return message.channel.send('You aren\'t allowed to run this command.') 
        var say = args.slice(0).join(" ");
                if (!args[0]) {
                    return message.channel.send('Please include what you want me to say.')
                }
                await message.delete();
                message.channel.send(say);
            }
        }
