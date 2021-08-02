client.on("message", Zeuz => {
  if (!Zeuz.guild) return;
  if (Zeuz.content.startsWith(prefix + "wara")) {
    if (Zeuz.member.voiceChannel) {
      Zeuz.member.voiceChannel
        .join()
        .then(connection => {
          Zeuz.reply(" جـۆیـنـم کـرد ");
        })
        .catch(console.log);
    } else {
      Zeuz.reply(" لـەڤـۆیـس نـیـت ");
    }
  }
}); 
