const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "icon",
  aliases: ["ic","IC","Ic","Icon","ICON"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle("**Icon Server**")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("YELLOW")
    .setImage(message.guild.iconURL())
    .setFooter(message.author.username,message.author.avatarURL())
    .setTimestamp()

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
