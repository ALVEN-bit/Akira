const fs = require("fs");
const Discord = require("discord.js"), 
      fetch = require("node-fetch"),
      backup = require("discord-backup"),
      Sentry = require("@sentry/node");
module.exports = {
  name: "backup",
  aliases: ["serverbackup","Backup"],
  description: "create server backup.",
  usage: ["backup create", "backup load <backupID>", "backup info <backupID>"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES","MANAGE_GUILD" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "ADMINISTRATOR" ],
  ownerOnly: false,
  cooldown: 2000,
  run: async (client, message, args, dev,dev2) => {
		const status = args[1];
		if(!status){
			return message.reply(" Select an action between: `create`,`load` and `info`!");
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
		} /*else if (status === "info"){
			const backupID = args[1];
			if(!backupID){
				return message.error("administration/backup:MISSING_BACKUP_ID");
			}
			backup.fetch(backupID).then(async (backupInfos) => {
				const embed = new Discord.MessageEmbed()
					.setAuthor(message.translate("administration/backup:TITLE_INFOS"))
					// Display the backup ID
					.addField(message.translate("administration/backup:TITLE_ID"), backupInfos.id, true)
					// Displays the server from which this backup comes
					.addField(message.translate("administration/backup:TITLE_SERVER_ID"), backupInfos.data.guildID, true)
					// Display the size (in mb) of the backup
					.addField(message.translate("administration/backup:TITLE_SIZE"), backupInfos.size+" mb", true)
					// Display when the backup was created
					.addField(message.translate("administration/backup:TITLE_CREATED_AT"), message.printDate(new Date(backupInfos.data.createdTimestamp)), true)
					.setColor(data.config.embed.color)
					.setFooter(data.config.embed.footer);
				message.channel.send(embed);
			}).catch(() => {
				// if the backup wasn't found
				return message.error("administration/backup:NO_BACKUP_FOUND", {
					backupID
				});
			});
		} else {
			return message.error("administration/backup:MISSING_STATUS");
		}*/
        
	}
}
