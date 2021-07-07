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
    .setImage(`https://media.discordapp.net/attachments/854347466429038603/856560310646603836/ezgif.com-video-to-gif_14.gif`)
    .setTitle(`**Pop Music Help**`)
    .setDescription(`
*** Prefix bot ***
***__,__***
<a:emoji_17:855062869934080030> | **User Commands**
\`invite\` - \`support\` - \`about\`
\`ping\` - \`prefix\` - \`uptime\`
\`tinvites\` - \`sug\` - \`roleuser\`
\`report\`
 
<a:emoji_16:855060728779374652> | **Music Commands**
\`play\` - \`skip\` - \`skipto\`
\`stop\` - \`volume\` - \`nowplaying\`
\`shuffle\` - \`search\` - \`resume\`
\`remove\` - \`queue\` - \`loop\`
\`lyrics\` - \`radio\`

<a:emoji_19:855064009639329812> | **Moderation Commands**
\`ban\` - \`unban\` - \`setnick\`
\`roleadd\` - \`roleremove\` - \`vkick\`
\`setprefix\` - \`clear\` - \`close\`
\`open\` - \`senddm\`
 
<a:emoji_33:856616986422935583> | **Gif Commands**
\`boy\` - \`girl\` - \`couple\`
\`sad\` - \`cartoon\` - \`anime\`
\`neon\`

**Text Commands**
\`Comming Soon\`

 **Game Commands**
\`kiss\` - \`slap\` - \`hug\`

**Economy Commands**
\`Comming Soon\`

**Links**
[**Support**](https://discord.gg/wTESwYkdwY) | [**Invite**](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
