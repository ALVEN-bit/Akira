client.on("message", message => {
  if (message.content.startsWith(prefix + "delete")) {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = message.content.split(" ").slice(1);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message
        .reply("**There is not Found room Please mention channel**")
        .catch(console.error);
    channel.delete();
  message.author.send("**Done check✅**")
  }
});
