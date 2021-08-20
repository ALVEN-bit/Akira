const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("ODI4MzA4OTkzMTcyMDQ1ODQ1.YGns3Q.FsN2G59sIkuDE8Rm76ivZ9u6C9k");
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pemoji")) {
    let man = [
  "https://cdn.discordapp.com/attachments/697145837062455411/815574681695813671/wb9Wj5v4GuuAAAAABJRU5ErkJggg-1.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/815618512189259826/MerryPout.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813485553852743700/770384677516869674.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/816040220570812496/ezgif-7-8b79fe63818a.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813306632041529405/yesil.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/816024441464684574/589052320743030795-1.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/815670250052780042/KannaWhat.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813345325288390656/759612770105819167.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813306442328178698/krmz.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814827424713015297/766264844532842506.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814787498983161906/paint_2.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814044877594820628/806914453966684162.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814883041515798558/edaa_siyah_kalp.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/816040153092063232/ezgif-7-97386b81853c.png",
  "https://cdn.discordapp.com/attachments/772470455457808414/783062484583841832/77.gif",
  "https://cdn.discordapp.com/attachments/772470455457808414/796071782808682586/gazete.png",
  "https://cdn.discordapp.com/attachments/772470455457808414/796065095247593512/744218474112483358.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814075336891170846/20210218_165037.jpg",
  "https://cdn.discordapp.com/attachments/772470455457808414/775802273926348830/image0.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814883042346270750/edaa_kirmizi_kalp.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813331078471221268/800481130456285254.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/815618571236540446/nitro_boost.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813474982545457192/Zeyrox_2.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/816075147912019968/793465624831590409.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813345331630702622/764095917657161749-1.png",
  "https://cdn.discordapp.com/attachments/772470455457808414/796065063647313950/788493009653071912.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813859181740163113/808715822226079794.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814885397917597736/586175476721254437.png",
  "https://cdn.discordapp.com/attachments/772470455457808414/776481707099422770/image1.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813773768627322890/1614084232776.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/814883041347371029/edaa_sari_kalp.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/813707238673088542/okk.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/815693103226552340/e8.png",
  "https://cdn.discordapp.com/attachments/697145837062455411/815943754841981009/image0.png",
  "https://cdn.discordapp.com/attachments/772470455457808414/782274541920583720/image0.png"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ** Picture Emoji **`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pcouple")) {
    let man = [
 "https://cdn.discordapp.com/attachments/764935873526628462/802051099745845288/The_One.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041449927278592/image6.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/803987556303765534/image5.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/804086013550264380/Hoslandiginiz_kisiyi_baskasiyla_gormeye_dayanabilir_misiniz_.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/804086017450704916/DUYGUSUZ_MELODI_-_1_Esmer_Oglan.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041796497768448/image7.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/803987607087611944/image7.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041555119767612/image5.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041836330942504/image0.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041814920069120/image2.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802051098621509652/b59f9753c350fad0.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/803987578906476564/image7.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/793530490102480916/d24.PNG",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041815494033419/image5.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041555355172864/image6.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802051095743954944/vinnie_hacker_imagines_-_what_to_expect_.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802051101977346058/Piccoletta-_Jaden_Hossler.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/802041765040357376/image9.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/813878398170038353/YILDIZLARA_FISILDAMAK_Masal__Meric_2.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/803987536543612968/image6.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/793828180577222666/d68.PNG",
  "https://cdn.discordapp.com/attachments/764935873526628462/803987577958695022/image3.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/803987515882602516/image1.jpg",
  "https://cdn.discordapp.com/attachments/764935873526628462/813878402637234176/instagram__CameronDallas.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ** Picture Couple ❤️**`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pboy")) {
    let man = [
  "https://cdn.discordapp.com/attachments/737803397314510849/803985963235672064/image3.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/793394353758273536/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/798112393078112327/image6.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/793394311101415424/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/770004598941286460/image1.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/779543791912222731/a_a5120861c963a11a99754db495c83301.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/802038664917811220/image3.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/747403876768153610/image1.png",
  "https://cdn.discordapp.com/attachments/752914781941268563/825347159624908810/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/814868383911903232/f25dfd17cbeb23206a98a5e3b5d23ae0.jpg",
  "https://cdn.discordapp.com/attachments/694694407278034944/815996273584635904/epp6.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/803985247040438292/image7.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/770010518063677440/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/802038565701156894/image3.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/777145825884110859/IMG_20200708_222808_444.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/786194717855055872/0c1654499892da483eec68504da9da90.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/790958148911104020/image6.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/780805237010989056/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/780805389029081118/image0.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/783984442803748884/image1.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/814868474005422090/5483ba848ee0b78f749fe5a578a4c222.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/788442185049178122/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/801421780388282388/ICON_.jpg",
  "https://cdn.discordapp.com/attachments/694694407278034944/815864151703683072/ba2ef6925d984790baa67a118f85b6cd.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/791936576552173569/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/802038857452486656/image1.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/798112416905953340/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/803985248534790164/image9.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/773938278201556992/image6.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/790958718094671892/image9.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/798112355379838996/image7.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/793394249504260116/image0.jpg",
  "https://cdn.discordapp.com/attachments/694694407278034944/815641038512980008/81ea521b5816b8a3a0712791b3fcacd2.png",
  "https://cdn.discordapp.com/attachments/737803397314510849/803455129093275678/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/803985207333748776/image1.png",
  "https://cdn.discordapp.com/attachments/752914781941268563/825347284506116116/image0.jpg",
  "https://cdn.discordapp.com/attachments/737803397314510849/798112373508407316/image5.jpg"
     ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ** Picture Boy**`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});



client.on("message", message => {
  if (message.content.startsWith(PREFIX + "baby")) {
    let man = [
        "https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif", 
        "https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif",
        "https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif"
     ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **Baby GIF**`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});



client.on("message", message => {
  if (message.content.startsWith(PREFIX + "smoking")) {
    let man = [
        "https://media.discordapp.net/attachments/843655098559102987/872858478744600576/image3.gif",
        "https://media.discordapp.net/attachments/843655098559102987/871477603482091550/image2.gif",
        "https://media.discordapp.net/attachments/843655098559102987/871477406999908362/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/870954847019614208/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/864924035360096276/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/863418172001746964/image1.gif",
        "https://media.discordapp.net/attachments/843655098559102987/862366248038039552/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/858672155414757376/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/857215168010649600/image1.gif",
        "https://media.discordapp.net/attachments/843655098559102987/857205996937019412/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/857205981477339146/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/857205961936732170/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/856932164552359966/image6.gif",
        "https://media.discordapp.net/attachments/843655098559102987/855802519887937576/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/854455178325262356/image1.gif",
        "https://media.discordapp.net/attachments/843655098559102987/854374960696131624/image9.gif",
        "https://media.discordapp.net/attachments/843655098559102987/854374959861858314/image7.gif",
        "https://media.discordapp.net/attachments/843655098559102987/854374959282388992/image6.gif",
        "https://media.discordapp.net/attachments/843655098559102987/854374958927052830/image5.gif",
        "https://media.discordapp.net/attachments/843655098559102987/854366894035173416/image2.gif",
        "https://media.discordapp.net/attachments/843655098559102987/852749248311459860/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/852749188965990430/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/852749068601524254/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/851835779343712266/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/851604134826475550/image0.gif",
        "https://media.discordapp.net/attachments/843655098559102987/846715929789857813/image0-1.gif",
      ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **Smoking GIF**`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});



client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **BOY GIF**`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **GIRL GIF**`,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "couple")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username}   **❤️  Couple Gif**`,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let man = [
      "https://media.discordapp.net/attachments/608711485849337856/855998757451989002/image0-2.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856002084461084682/image0-4.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856046302302044190/RAGE.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064006099959838/sword_in.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064373285322772/brur.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856078080513671218/main-qimg-9b85288a288ad40533d86370edc2f861.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856082677124038706/243b546d229fecd75d49dfa96fa7d3af.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083458426273852/1359536E-4B2C-46FD-B4C0-991DEDD90DB6.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083601376673812/tumblr_n8afdsLdj31tgrxjfo1_400.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855944540519399454/a_ebfe24c4bd0d9ccfdfbb26e9c211616b.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855941510633619496/a_5079b0989b9b5957008426c949ada083.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855934815643762718/SPOILER_bcfd0735832eb9c8908fb09b3bbd76f7.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924849976541214/a_2b58061e423d0ed65d2e1a3e77ed61f8.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924705320239114/Anime_PP_Gif_64.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924615573143582/Anime_PP_Gif_46.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924558700085248/a_3bf21d37deefcf4cd1dcab780aab846c.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **ANIME GIF**  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cartoon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755169627872428134/855635705242058752/g0yPLFTYpr283dUJBs.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855792117719498752/video0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855557742349516800/a_b027a915823dbd68a6648b5349421ae6.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556838929203200/p_22.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556777230860288/Miraculous_Love_Square.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556717030014976/Chat_noir_Adrien_one_shots_-_Date_Night_Chat_Noir_X_Reader.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855377737668624384/a_f2755cac40daeae8d10949c7dd36b90e.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855377707852365844/49e7d6354158e18ba31dbc337d5c7e66.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854647156845445140/image0-1.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854446592169082940/1.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854406402884501534/a_6f8657f88ea0baf2cb1535e0e7d1099c.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249305011257364/21.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249288825831455/17.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249260668289044/12.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249216691535882/6.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249208872435732/4.gif",
    ];

        message.channel
      .send({
        embed: {
          description: `${message.author.username} **CARTOON GIFS**`,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("877604742560370738");
  let embed = new MessageEmbed().setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✔️ Join Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("877604742560370738");
  let embed = new MessageEmbed()
  .setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "neon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755890505681731714/856207944953233439/a_08ca790f778a7ee65184020eb2c85124.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856212748844007454/image4.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856203154143313970/hhhh.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856200984888082472/Comp_105.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856145244059729920/uurekzneon_17.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856138999771693076/a_0163926dade85d15a4c7e9f90bd9905c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856137212385951744/image0.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856134635972591636/Comp_22.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856094705813422090/a_a46b7692563509a4a7332280f8aed01f-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856066337788133377/neon_1-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856039171788767292/sol._of.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856034861047480320/Nice_gif_pfp.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855995485688954900/a_4f85b11851dd2fd40c275af63e24ca9c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855901403768029255/Gif8.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855894776896159804/a_622822eb42bf3c49c83f342290a304b6.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855841642979786752/826380519012565012.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855788419716218890/image0.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} NEON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on('message', async message=>{
  if(message.content.startsWith(PREFIX +'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo unban krdn')
const reason = args[1] || "be hokar"
let unban = await client.users.fetch(args[0])
 
message.guild.members.unban(unban,reason)
const qala = new Discord.MessageEmbed()
 
  .setTitle('unBan')  
    .addField('kase unban kraw ',unban)
 
.addField('un ban kra la layan',message.author)
 
.addField('ba hokare',reason)
.setFooter('')
message.channel.send(qala)
 
  }})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "vkick")) { 
   if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
 
    if (!message.mentions.members.first())
      return message.channel.send(
        `kasek mention bka bo kick voice!`
      );
 
    let { channel} = message.mentions.members.first().voice;
 
    if (!channel)
      return message.channel.send(`am kasa la voice niya`);
 
    message.mentions.members.first().voice.kick();
 
    message.channel.send(`kick kra la voice !`)
  }
})

client.on("message", message => {
if(message.content.startsWith(PREFIX + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`
\`\`\`js
Command: setnick
 
Nickname:
+setnick (name)
+setnick (user}) (nick)
 
\`\`\`
 
`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}** `);
}
});

client.on("message", msg => {
if(msg.content.startsWith(PREFIX +"clear")) {
 let args = msg.content.split(" ").slice(1);
 if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleadd")) { 
 
if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} added ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.roles.add(shla)
 
  }
})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleremove")) { 
 
if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} removed ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.roles.remove(shla)
 
  }
})

client.on("message", async message => {
  if (message.content.startsWith(PREFIX + "tinvites")) {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply(" Error : ` Server Command `");
 
    var invites = await message.guild.fetchInvites();
    invites = invites.array();
    invites, "uses", { reverse: true };
    let possibleInvites = ["User Invited |  Uses "];
    invites.forEach(i => {
      if (i.uses === 0) {
        return;
      }
      possibleInvites.push([
        "\n " + "<@" + i.inviter.id + ">" + "  :  " + i.uses
      ]);
    });
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Top Invites.", `${possibleInvites}`);
 
    message.channel.send(embed);
  }
});

client.on('message', function(message) {
    if(message.content.startsWith(PREFIX  + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
   let mUser = message.mentions.members.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.MessageEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("If the reporting was a joke, the person reporting would be subject to penalties")
message.channel.send(Rembed)
message.channel.send("Sended Your report to  report Channel").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on("message", message => {
  if (!message.content.startsWith(PREFIX)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(PREFIX.length);
  if (command === "g") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit('    **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 1000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 2000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 3000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 4000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <:slots2:421472583347732511> <:slots1:421472583410515969> <:slots3:421472582924238869>                                                                               `|         ||         |` ');
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleuser")) { 
 
let member_r = message.mentions.members.first() || message.member,
  user = member_r.user;
let bawan= new Discord.MessageEmbed()
  .addField('this member have this Roles:', member_r.roles.cache.map(r => `${r}`).join(', '), true)
 
message.channel.send(bawan)
}})

let Prefix = "+"; 

client.on("message", async message => {
let prefix2 = await db.fetch(`prefix_${message.guild.id}`);
if (prefix2 === null) prefix2 = Prefix;
const prefix = prefix2;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
if (cmd === "prefix" || cmd === "setprefix") {
if (!message.guild) return;
if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
return message.reply("**- You Don't Have `ADMINISTRATOR` Permission.**");
if (!args[0]) return message.channel.send(`**- Please tell me what a prefix !!**`);
if (args[0].length > 3) {
  return message.channel.send("**Please tell me prefix under 3 numbers!!**")
}
db.set(`prefix_${message.guild.id}`, args[0]);
message.channel.send(`**✅ Done, Set New Prefix \`[${args[0]}]\` From Your Server.**`);
}
if (cmd === "test") { // كود test للتجربة
message.reply("**Set Prefix Working ✅**")
}
});

  client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "sug")) {
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
 
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
 
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
 
 
    let embed = new Discord.MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
 
 
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
 
 
 
  
 
 
 
    message.channel.send("Sended Your Suggestion to  Suggestions Channel")
 
  }
})

client.on('message', msg => {
 if (msg.content.startsWith(PREFIX + 'senddm')) {
 
   if(!msg.member.hasPermission('ADMINISTRATOR')) return
   let args = msg.content.split(' ').slice(1)
 
 
      if (!args[0]) return msg.channel.send(``)
      if (!args[1]) return msg.channel.send(``)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.channel.send()
      let alphaEmbed = new Discord.MessageEmbed()
      .setTitle('ALVEN is here')
      .setDescription(args.join(" "))
 
      client.users.cache.get(`${alpha.id}`).send(alphaEmbed)
      msg.channel.send('```DONE```')
    }
});

  
  client.on("message", message => {
  if (message.content === PREFIX + "unlock") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unhided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔓");
    });
  }
});

client.on("message", message => {
  if (message.content === PREFIX + "lock") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel hided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔒");
    });
  }
});



client.on(`ready`, () => {	
//////////////

////////
   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      
    client.user.setActivity(`Type: ${PREFIX}help `, { type: "PLAYING"});
    client.user.setActivity(`Type: ${PREFIX}help | ${client.guilds.cache.size} Server, | Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} `, { type: "PLAYING"});
   
  
      }, (5000));
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 


//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("About Akira Bot", "")
    .setThumbnail(``)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

[{Support}](https://discord.gg/wTESwYkdwY)

[{Invite}](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)

**My Devloper :**
<@!680407776593182735>
<@!716796150656794645>

**Akira Bot**
\`Music\`
 
**Servers **
\`${client.guilds.cache.size}\`

**Channels ** 
\`${client.channels.cache.size}\` 

**My Name **
\`${client.user.tag}\`

**My ID **
\`${client.user.id}\`

**My Ping **
\`${client.ws.ping}\`

**Version **
\`V2\`

`)

    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  } 

//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription (`
{Links}

[{Support}](https://discord.gg/wTESwYkdwY)
-
[{Invite}](https://discord.com/api/oauth2/authorize?client_id=828308993172045845&permissions=8&scope=bot)`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setImage(``)
    .setTitle(`**{Support Akira Bot }**`) 
    .setThumbnail(``)
    .setTimestamp()
    
    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  }

  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(saymsg)
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }


//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(`Please wait\` \`${timeLeft.toFixed(1)} seconds\` \`before reusing the\` \`${prefix}${command.name}\` `);
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("RANDOM")
   .setTitle(`There was an error executing that command.`)).catch(console.error);
 }


});
function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}

client.on("message",message => {
  if (message.content.startsWith(PREFIX + "chcreate")) {
    var BlackJack = "Black Hat"
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return
    let args = message.content.split(" ").slice(1)
    var channel = args.join(" ")
        message.guild.channels.create(channel, {type: "text",})
    message.channel.send("Done Created Channel✅")

  }
  if (message.content.startsWith(PREFIX + "vcreate")) {
    let args = message.content.split(" ").slice(1)
        var channel = args.join(" ")
    message.guild.channels.create(channel, {type: "voice",})
  message.channel.send("Done Created Channel Voice✅")
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "chdelete")) {
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
 

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.member.hasPermission("BAN_MEMBERS")) return;
  if (message.content === ",ban") {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[1]);
    if (!args) return message.reply("**Please Mention**");
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!reason) return message.reply("**Write Reason For Ban Member**");
    if (!user) return message.reply("**I cant Find Member**");
    if (!user.bannable)
      return message.channel.send("**I cant Ban This Member**");
    const emb = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle("Done Chek Has Been Banned✅")
      .setDescription(":white_check_mark:  banned from the server! :airplane:")
      .addField("**Member Banned**", user)
      .addField("**Moderation**", message.author.username)
      .addField("**Reason", reason)
      .setFooter(
        `Requested | ${message.author.tag}`,
        message.author.avatarURL()
      )
      .setTimestamp();
    message.channel.send(emb);
    message.guild.member(user).ban({ reason: reason });
  }
});



client.on('ready', () => {
var channel = client.channels.cache.get('877596742567215124');
    if (channel) channel.join();
});

//
