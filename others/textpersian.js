const Discord = require("discord.js");

module.exports = {
  name: `textpersian`,
  description: "🎸",
  aliases: ["tp"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

let replies = ["کاش یه ربطه بسازن همش روزای اول باشه","اونی که صورتش مثل فرشته ها بود یه قلب لاشی داشت!","بعضیام مث رمز پویا هستن هر دو دیقه عوض میشن!.","هرکی از زندگیم حذف شده خودش قیچیو داده دستم ، از چی شاکی اید الان","ب بعضیا باس گفت: تو با کی نبودی؟ اینو بگو؟(:","من شاید عالی نباشم اما حداقل جعلی نیستم!","راه خودتونو با ذهن خودتون بسازید!","احمق بودن از اونجایی شروع میشه که میگی این با بقیه فرق داره!"];

 let result = Math.floor((Math.random() * replies.length));


 message.channel.send(replies[result]).then(message => {
 			message.react('<a:alven:871381046007050253>').then(r => {
 				message.react('<a:alven:871381176928059412>');
            });
           });
       }
 }
