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
    .setImage(`https://images-ext-1.discordapp.net/external/8dnWClB7RQReD53qvyYe09bdJMAmXP3q-4cAthMuI5c/https/media.discordapp.net/attachments/827288710265045053/879419178933694504/image0.gif`)
    .setTitle(`**Akira Help**`)
    .setDescription(`


◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 | User Commands**
> \`invite\` • \`support\` • \`about\`
> \`ping\` • \`prefix\` • \`uptime\`
> \`tinvites\` • \`sug\` • \`roleuser\`
> \`se\` • \`avatar\` • \`sifo\` • \`user\`
> \`chinfo\` • \`listemoji\` • \`stats\`
> \`allbots\` 

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 | **Music Commands**
> \`play\` • \`skip\` • \`skipto\`
> \`stop\` • \`volume\` • \`nowplaying\`
> \`shuffle\` • \`search\` • \`resume\`
> \`remove\` • \`queue\` • \`loop\`
> \`lyrics\` • \`radio\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 |** Moderation Commands**
> \`ban\` • \`unban\` • \`setnick\`
> \`roleadd\` • \`roleremove\`
> \`setprefix\` • \`clear\` • \`lock\`
> \`unlock\` • \`embed\` • \`vkick\`
> \`chcreate\` • \`chdelete\` • \`slowmode\`
> \`addemoji\` • \`banner\` • \`say\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 | **Gif Commands**
> \`boy\` • \`girl\` • \`couple\`
> \`sad\` • \`cartoon\` • \`anime\`
> \`neon\` • \`smoking\` • \`baby\`
> \`animal\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 | **Picture Command **
> \`pboy\` • \`pgirl\` • \`pcouple\`
> \`pemoji\` • \`panime\` • \`meme\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 | **Text Commands**
> \`textkurd\` • \`textengli\`
> \`textarab\` • \`textturk\`
> \`textpers\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈

 | **Game Commands**
> \`kiss\` • \`slap\` • \`hug\`
> \`feed\` • \`cuddle\` • \`pat\`
> \`poke\`

◈ ━━━━━━━━ ● ━━━━━━━━ ◈
 
| **Links**

[__**Support**__](https://discord.gg/wTESwYkdwY) | [**Invite**](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("BLACK");
   message.reply
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

