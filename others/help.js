const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/827288710265045053/879419178933694504/image0.gif`)
    .setTitle(`**Akira Help**`)
    .setDescription(`


◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_17:855062869934080030> | **User Commands**
> \`invite\` • \`support\` • \`about\`
> \`ping\` • \`prefix\` • \`uptime\`
> \`tinvites\` • \`sug\` • \`roleuser\`
> \`se\` • \`avatar\` • \`sifo\`
> \`chinfo\` • \`listemoji\` • \`stats\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_39:862473578799955969> | **Music Commands**
> \`play\` • \`skip\` • \`skipto\`
> \`stop\` • \`volume\` • \`nowplaying\`
> \`shuffle\` • \`search\` • \`resume\`
> \`remove\` • \`queue\` • \`loop\`
> \`lyrics\` • \`radio\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_19:855064009639329812> | **Moderation Commands**
> \`ban\` • \`unban\` • \`setnick\`
> \`roleadd\` • \`roleremove\`
> \`setprefix\` • \`clear\` • \`lock\`
> \`unlock\` • \`embed\` • \`vkick\`
> \`chcreate\` • \`chdelete\`
> \`addemoji\` • \`banner\` • \`say\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_33:856616986422935583> | **Gif Commands**
> \`boy\` • \`girl\` • \`couple\`
> \`sad\` • \`cartoon\` • \`anime\`
> \`neon\` • \`smoking\` • \`baby\`
> \`animal\` 

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_37:861585747219841074> | **Picture Command **
> \`pboy\` • \`pgirl\` • \`pcouple\`
> \`pemoji\` • \`panime\` • \`meme\`


◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_40:862473590213705768> | **Text Commands**
> \`textkurd\` • \`textengli\`
> \`textarab\` • \`textturk\`
> \`textpers\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_41:863748588915523604> | **Game Commands**
> \`kiss\` • \`slap\` • \`hug\`
> \`feed\` • \`cuddle\` • \`pat\`
> \`poke\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

<a:emoji_24:856306109940629544> | **Links**
[__**Support**__](https://discord.gg/wTESwYkdwY) | [__**Invite**__](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("BLACK");
   message.react("<a:emoji_84:836364501308669974>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
