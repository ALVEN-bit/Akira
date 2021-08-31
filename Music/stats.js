const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "stats",
  aliases: ["stats"],
  cooldown: 8,
  description: "** Invite pore bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/848815969233403934/850660018532777984/emoji_17.gif `)
    .setTitle(`Akira is One`)
    .setDescription(`
 {__**Developer Bot**__}
 <@!680407776593182735>

[__**GITHUP**__](https://github.com/ALVEN-bit)

[__**EDITOR ALVEN**__](https://discord.gg/am8FpWt3Yh)

[__**Black Hat Staff**__](https://discord.gg/tgf)

[__**Invite Bot**__](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("BLACK")
   message.react("<a:emoji_34:813753858710175745>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
