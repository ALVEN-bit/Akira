const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "serverinfo",
  aliases: ["sifo"],
  cooldown: 5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor("#FF0000")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
    .addField('🆔 Server ID :',`\`${message.guild.id}\``,true)
    .addField('<a:B87D9C669D284BF7B28B5E977A0098AE:835478046043406376> Created On :',message.guild.createdAt.toLocaleString())
    .addField('<a:emoji_25:856308975648636968> Owner Server :',`<@${message.guild.ownerID}>`,true)
    .addField('<a:emoji_17:855062869934080030> Members :',`\`${message.guild.memberCount}\``,true)
    .addField('<:B5D91755F8604C90B8D2A958E717A451:871399268374691840> Channels :',`\`${message.guild.channels.cache.size}\``,true)
    .addField('<a:emoji_38:861586153638985728> Region :',`\`${message.guild.region}\``,true)
    .addField('<a:emoji_43:871399621853859840> Roles :', `\`${message.guild.roles.cache.size}\``, true)
    .addField('<a:emoji_30:856567109986418749> Total Boost :',`\`${message.guild.premiumSubscriptionCount} Boost\``,true)
    .addField('<a:emoji_26:856315988819312670> Emojis :',`\`${message.guild.emojis.cache.size}\``,true)
   helpEmbed
   message.react("<a:emoji_34:861583854947401730>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
