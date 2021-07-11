const fs = require("fs");
const Discord = require("discord.js"), 
      fetch = require("node-fetch"),
      backup = require("discord-backup"),
      Sentry = require("@sentry/node");

module.exports = {
name: "backup",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start
   
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
		const status = args[0];
		if(!status){
			return message.reply(" Select an action between: `create`,`load`!");
		}
    
		if(status === "create"){
			const m = await message.channel.send("⚠️ wait for loding `backup` file.")
			backup.create(message.guild,{
				       jsonBeautify: true
				      }).then((backup) => {
				m.delete();
				message.reply("✅ Backup successfully created! The backup ID has been sent to you in private messages!");
				message.author.send(`Here's your backup ID: \`${backup.id}\`, use it to load your backup on an another server!`).catch(() => {
					backup.remove(backup.id);
					message.reply("> ❌ I don't have permission to send you private messages... Please update your privacy settings!");
				});
			}).catch((err) => {
      console.log(err);
				return message.error("Something went wrong... Please retry again later!");
			});
		} else if (status === "load"){
			const backupID = args[2];
			if(!backupID){
				return message.reply("> ❌ Please enter a backup ID!");
			}
			backup.fetch(backupID).then(async () => {
				message.channel.send(":warning: | **Loading a backup will replace the actual server with the saved one.**\n\n:arrow_right_hook: **Answer by sending `confirm` to confirm this action!**");
				await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "confirm"), {
					max: 1,
					time: 20000,
					errors: ["time"]
				}).catch(() => {
					// if the author of the commands does not confirm the backup loading
					return message.reply(" Time's up! Cancelled backup loading!");
				});
				// When the author of the command has confirmed that he wants to load the backup on his server
				message.author.send("⚠️ Backup loading started!");
				// Load the backup
				backup.load(backupID, message.guild).then(() => {
					// When the backup is loaded, delete them from the server
					backup.remove(backupID);
					message.author.send("✅ Backup successfully loaded!");
				}).catch((err) => {
					Sentry.captureException(err);
					// If an error occurenced
					return message.reply(" Something went wrong... Please retry again later!");
				});
			}).catch(() => {
				// if the backup wasn't found
				return message.reply(`No backup found for \`${backupID}\``)
			});
		}
        
	}
}
