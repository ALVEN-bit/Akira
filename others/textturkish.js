const Discord = require("discord.js");

module.exports = {
  name: `textturk`,
  description: "🎸",
  aliases: ["tt"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

let replies = ["Sadece ölüm kavuşmamamız için sebeptir...!","Anlamam nedeni ki hiç söylemedi ki sadece öyle bıraktı..","Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin","Ay dünyaya, ben sana tutulmuşum..","Ben seni sevdiğim kadar bir duvarı sevseydim, şimdiye çiçek açardı","Tüm yazdıklarım seni övmek içindir, Sen de her zamanki gibi evrenin en güzelisin ..","Bi mutlu olamadım bu hayata","Yaşamak Istediğim Dünya Sensin","Adini kalbimi yazdim","Anlamam nedeni ki hiç söylemedi ki sadece öyle bıraktı..","Sen Seviyorun O Anlamiyor Değil O Başkasini Seviyor Sen Anlamiyorsun","Bir fotoğrafına saatlerce bakakaldığımı bilmiyorsun"];

 let result = Math.floor((Math.random() * replies.length));


 message.channel.send(replies[result]).then(message => {
 			message.react('<a:alven:871381046007050253>').then(r => {
 				message.react('<a:alven:871381176928059412>');
            });
           });
       }
 }
