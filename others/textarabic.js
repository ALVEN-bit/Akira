const Discord = require("discord.js");

module.exports = {
  name: `textarabic`,
  description: "🎸",
  aliases: ["ta"],
  cooldown: 3,
  edesc: `Type this Command, to set a server specific Prefix! Usage:`,
 async execute(message, args, client) {

let replies = ["هيه حظوظ والطيب يرد خسران من ذيچ الاحلام الچان بانيها:herb:","إذا زارتک شدّه فاعلم أنّها سحابه صیف عن قلیل تقشع، ولا یخیفک رعدها، ولا یرهبک برقها، فربّما کانت محمّلهً بالغیث","چنت اعاتب بالوكت عرفني بيك :broken_heart: :exclamation:","أخاف أفگد طعم باچر يالمتانيك:wilted_rose:","اسألني واني اختصر لعيونك المده :wilted_rose:","وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهيت :wilted_rose:","ما خربتني وياك غير اليكولون:wilted_rose:","شگلّك يالعلي تسأل.. انا التيهت كلشي وكلشي ما اندل:wilted_rose:","هي مسؤولية من تحبلك انسان :broken_heart: "];

 let result = Math.floor((Math.random() * replies.length));


 message.channel.send(replies[result]).then(message => {
 			message.react('<a:alven:871381046007050253>').then(r => {
 				message.react('<a:alven:871381176928059412>');
            });
           });
       }
 }
