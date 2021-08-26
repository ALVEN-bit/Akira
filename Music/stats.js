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
<a:emoji_82:836363781378408489> **__OWNER BOT__** <@!680407776593182735> <a:emoji_82:836363781378408489>

[**__GITHUP__**](https://github.com/ALVEN-bit)

[**__SERVER EDITOR ALVEN__**](https://discord.gg/am8FpWt3Yh)

[**__TGF SQWAD SERVER__**](https://discord.gg/tgf)

[**__Invite Bot You server__**](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
