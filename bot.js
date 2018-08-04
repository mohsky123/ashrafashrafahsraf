const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {
    if (message.content === "-help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`** السيرفر الرسمي للبوت : __ :dove:  https://discord.gg/uazkYsk :scroll: __

:hearts: الموقع الرسمي للبوت :__ https://mohamedtar5.wixsite.com/dzgaming __ :hearts: **
            `)


        message.author.sendEmbed(embed)

    }
});

client.on("message", message => {
    if (message.content === "-help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
   **:man_in_tuxedo::skin-tone-1: الترحيب و المغادره :man_in_tuxedo::skin-tone-1:
   ============
   انشئ شات من الثلاثه دول بأسم
    1/ join
    2/ wel
   و سوف يرحب البوت ب الأشخاص الجدد   
   :sleuth_or_spy::skin-tone-1: اوامر الأداره :sleuth_or_spy::skin-tone-1:
   ============
   -cr-colors | عمل ألوان بالعدد اللي تبيه
   
   -role bots < لإعطاء البوتات الرتبه اللي تبيها | < أسم الرتبه

   -role hummans < لإعطاء الأعضاء الرتبه اللي تبيها | < أسم الرتبه
   
   -role {@user} {role} | لإعطاء شخص الرتبه اللي تبيها
   
   -kick {@user} {reason} | لطرد العضو :outbox_tray:
   
   -ban {@user} {reason} | لحظر العضو :no_entry:
   
   -mute {@user} {reason} | أسكات العضو :mute:
   
   -unmute {@user} |  لفك الميوت عن العضو :loud_sound:

   -perm | لعرض برمشناتك
   
   -mct | لقفل الشات :no_entry:
   
   -unmct | لفتح الشات :on:
   
   -ct | يسوي روم كتابي :rolling_eyes:
   
   -cv | يسوي روم صوتي :crown:
   
   -bc {text} | ليرسل رساله لكل أعضاء السيرفر :mega:
   
   -bc2 {text} | ليرسل رساله لكل أعضاء السيرفر :mega: < نعم | لا >
   
   -sg | لعرض أقتراح للسيرفر يجب ان يكون فيه روم بأسم __suggest__ :)
   
   -clear {__NUMBER__} | ليمسح البوت الشات برقم الذي كتبته

   -deleteroles | مسح كل الرتب
   
   -deletechannels | مسح كل القنوات
**`)


        message.author.sendEmbed(embed)

    }
});

client.on("message", message => {
    if (message.content === "-help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            
            .setDescription(`
  ** :kaaba:  القرآن الكريم :kaaba: 
   ============
   __سوي أمر ^-قران^ وبيجيلك كل أوامر القرآن الكريم وانت أختار أي رياكشن__
   
   :regional_indicator_a: القرآن كاملاً ماهر المعيقلي
   
   :regional_indicator_b: سورة البقرة كاملة للشيخ مشاري العفاسي
   
   :regional_indicator_c: سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
   
   
   
   :stop_button: لإيقاف القرآن الكريم
   
 
   
   :regional_indicator_d: القرآن كاملاً عبدالباسط عبدالصمد
   
   :regional_indicator_e: القرآن كاملاً ياسر الدوسري
   
   :regional_indicator_f: سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي
   
  ======:blossom:نــتــمــنــآ لــكــم آســتــمـــتــآع :blossom:======**
   `)


        message.author.sendEmbed(embed)

    }
});



client.on("message", message => {
    if (message.content === "-help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
  ** :video_game: الألعاب :video_game:
   ============
   -te | تحويل الكلام ألي إيموجيز :video_game:
   
   -rps | لعبه : حجره , ورقه , مقص :video_game:
   
   -marry | للعب لعبه الزواج :video_game:
   
   -mcskin | لعرض سكنك في ماين كرافت :video_game:
   
   -un | للعب لعبه عكس الكلام :video_game:
   
   -hack | للعب لعبه الهاكر :video_game:

   -sar7 | لمصارحه شخص :video_game:

   -لمصارحه شخص بالعربيه | صارح :video_game:
   
   -للعب لعبه اعلام | اعلام :video_game:
   
   -لعبه عواصم | عواصم :video_game: __تصليـــح__

   -يعطيك عمليه حسابيه وانت تحسبها | احسب :video_game:

   -roll | لأختار واحد من أي رقم تبيه :video_game:
   
   -gif | لعرض الصور المتحركه ^GIF^ :video_game:

   -animal | لعرض صور حيوانات :video_game:

   -achieve | لعرض الكلمه اللي تكتبها علي هيئه انجاز في ماين كرافت :video_game:

   -micr | للعب لعبه ماين كرافت :video_game:

   -حب :video_game:
   
   -كت تويت :video_game:
   
   -صراحه :video_game:
   
   -خواطر :video_game:
   
   -مريم :video_game:
   
   -عقاب :video_game:
   
   -لو خيروك :video_game:
   
  ======:blossom:نــتــمــنــآ لــكــم آســتــمـــتــآع :blossom:======**
   `)


        message.author.sendEmbed(embed)

    }
});

client.on("message", message => {
        const embed = new Discord.RichEmbed()
    if (message.content === "-help") {
			        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
  
  ** :earth_africa: الأوامر العامه :earth_africa: 
   ============
   -color __<NUMBER>__ | لأختيار لك لون محدد من السيرفر
   
   -invites | لمعرفه انت جبت كم للسيرفر :sparkles: 
   
   -contact | لإرسال رساله لصاحب البوت :envelope_with_arrow: 

   -time | لمعرفه الوقت بالدول العربيه :watch: 
   
   -inv | لكي تدعو البوت الى سيرفرك :sparkles: 
   
   -el | ليعرض كل الإيموجيات اللي بالسيرفر :joy:
   
   -id | عرض معلومات حسابك :bust_in_silhouette: 
   
   -ping | لعرض سرعه اتصال البوت :spy: 
   
   -bot | لعرض البوت في كم سيرفر و كم مستخدم و كم روم  :robot: 
   
   -info | ليظهر معلومات البوت :thinking: 
   
   -server | لكي يظهر معلومات السيرفر :no_mouth: 
   
   -mb | لكي يظهر كل حالات الأعضاء في السيرفر :heart: : :green_heart: : :yellow_heart: 
   
   -tag | لجعل الكلمه اللي تبيها مزخرفه :dragon_face:
   
   -avatar  , -avatar {@user} | لعرض صورتك الشخصيه او صوره الذي منشنته :selfie: 
   
   -image | لعرض صوره السيرفر :cherry_blossom: 

   -ts | لترجمه لغه لـ لغه أخري :hearts:

  ======:blossom:نــتــمــنــآ لــكــم آســتــمـــتــآع :blossom:======**
   `)


        message.author.sendEmbed(embed)

    }
});





client.on("message", message => {

    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.content === prefix + "image") {
      if (!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
        const embed = new Discord.RichEmbed()

            .setAuthor(message.author.username, message.guild.iconrURL)
            .setColor("RANDOM")
            .setImage(message.guild.iconURL)
            .setURL(message.guild.iconrURL)
            .setTimestamp()

        message.channel.send({ embed });
    }
});

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
 
	
if(message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.RichEmbed()
            .setColor("#00FFFF")
            .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)
        message.channel.sendEmbed(embed);
    }

});

 client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "DzGaMing-bc";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

client.on('message', message => {

   if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

 if(message.content.startsWith(prefix + 'kick')) {

        if (!message.channel.guild) return message.reply('** This command only for servers**');

        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        /*let b5bzlog = client.channels.find("name", "5bz-log");

        if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
        if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!reason) return message.reply("**اكتب سبب الطرد**");
        if (!message.guild.member(user)
            .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

        message.guild.member(user).kick();

        const kickembed = new Discord.RichEmbed()
            .setAuthor(`KICKED!`, user.displayAvatarURL)
            .setColor("RANDOM")
            .setTimestamp()
            .addField("**User:**", '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
        message.channel.send({
            embed: kickembed
        })
    }
  
});

client.on('message', message => {
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لايوجد لديك ` BAN_MEMBERS ` صلاحية**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحيات لتبنيد العضو **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mb')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
      
    if (message.content.startsWith(prefix + 'server')) {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();

        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**🆔 سيـرفر ايــدي**", "**" + message.guild.id + "**", true)
            .addField("**👑 سيــرفر اونـر**", "**" + message.guild.owner + "**", true)
            .addField("**✅ الشــات الاســاســي**", "**" + message.guild.DefaultChannel + "**", true)
            .addField("**🌍 المـوقع**", "**" + message.guild.region + "**", true)
            .addField('**💬 عدد الرومــات الكتابيــة**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**👔 الــرتــب**", `**[${message.guild.roles.size}]** Role `, true)
            .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `, true)

        .addField("👥عدد الاعضــاء", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
        message.channel.sendEmbed(embed)

    }
  
});

          client.on('message', message => {

               if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'id')) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
     var args = message.content.split(" ").slice(2);
     let men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(``)
                  .setThumbnail(message.author.avatarURL)
    .addField(':تآريخ انضمامك للسيرفر ', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .setFooter(`${message.guild.name} Server`)
   .setThumbnail(`${message.author.avatarURL}`)
    message.channel.send(id)
}   
          
});

client.on('message', message => {

    let args = message.content.split(" ").slice(1);
    if (message.author.bot) return;
    if (!message.channel.guild) return;
 
    if (message.content.startsWith(prefix + 'clear')) {

        if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
        if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
                timeout: 5000
            })))
    }
});

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
        var x5bzm;
        if (mentionned) {
            var x5bzm = mentionned;
        } else {
            var x5bzm = message.author;

        }
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${x5bzm.avatarURL}`)
        message.channel.sendEmbed(embed);
    }
    
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

client.on("message", message => {

     if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'ping')) {
        const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
	.setTitle('**Pong ! **')
  .addField(`**My Ping Is**` , `**__${Date.now() - message.createdTimestamp}__ MS :watch:**`)
  message.channel.sendEmbed(embed);
}
});

client.on("message",function(message) {
    if(message.content.startsWith(prefix + "info")) {
           let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
let ms = 1000;
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("${client.user.username}") 
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)
.addField("MyPrefix :",`**[ ${prefix} ]**`,true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("DzGAMing-info")
  message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
    }
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

client.on("message", message => {

  if (!message.channel.guild) return;
    if (message.author.bot) return;
    let command = message.content.split(" ")[0];
    if (message.content.startsWith(prefix + 'mute')) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).roles.has(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
        } else {
            message.guild.member(user).addRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
            });
        }

    };

});

client.on("message", message => {

    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (message.content.startsWith(prefix + 'unmute')) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'اسكت/احكي')
            .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).removeRole(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
        } else {
            message.guild.member(user).removeRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
            });
        }

    };
});

    client.on('guildCreate', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك :blush:**`)
            guild.owner.send(embed)
      });

      client.on('guildDelete', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**نتمى انكم استمتعتم ب البوت :wink:**`)
            guild.owner.send(embed)
      });

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;

if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '389755149939113987') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'streaming')) {
if (message.author.id !== '389755149939113987') return message.reply('** هذا ا��أمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'setname')) {
if (message.author.id !== '389755149939113987') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
    
if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '389755149939113987') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
} else

if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '389755149939113987') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
 });

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار بك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضررية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  تى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صرا��ه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith(prefix + 'صراحة')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});

const Za7f = [
   "**صورة وجهك او رجلك او خشمك او يدك**.",
   "**اصدر اي صوت يطلبه منك الاعبين**.",
   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
   "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
   "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
   "**ذي المرة لك لا تعيدها**.",
   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
   "**صور اي شيء يطلبه منك الاعبين**.",
   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
   "**سو مشهد تمثيلي عن مصرية بتولد**.",
   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
   "**ذي المرة لك لا تعيدها**.",
   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
   "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
   "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
   "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
   "**اتصل على امك و قول لها انك تحبها :heart:**.",
   "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
   "**قل لواحد ماتعرفه عطني كف**.",
   "**منشن الجميع وقل انا اكرهكم**.",
   "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
   "**روح المطبخ و اكسر صحن او كوب**.",
   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
   "**قول لاي بنت موجود في الروم كلمة حلوه**.",
   "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
   "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
   "**قول قصيدة **.",
   "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
   "**اول واحد تشوفه عطه كف**.",
   "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
   "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
   "**تاخذ عقابين**.",
   "**قول اسم امك افتخر بأسم امك**.",
   "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
   "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
   "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
   "**تتصل على الوالده  و تقول لها خطفت شخص**.",
   "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
   "**تصل على الوالده  و تقول لها  احب وحده**.",
     "**تتصل على شرطي تقول له عندكم مطافي**.",
     "**خلاص سامحتك**.",
     "** تصيح في الشارع انا  مجنوون**.",
     "** تروح عند شخص تقول له احبك**.",
 
]

client.on('message', message => {
if (message.content.startsWith(prefix + 'عقاب')) {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('DzGaMing-Games' ,
 `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: عقاب , Send By: ' + message.author.username)
   }
    
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
   client.on('message', message => {

       var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'لو خيروك')) {
        var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
   }
});

const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {

   if(message.content.startsWith(prefix + 'كت تويت')) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: كت تويت , Send By: ' + message.author.username)
   }
   
});

const secreT = [
 "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
 "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
 "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
 "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
 "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
 "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
 "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
 "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
 "**المناقشات العقيمة لا تنجب افكارا**.", 
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]

client.on('message', message => {

   if(message.content.startsWith(prefix + 'خواطر')) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
 `${secreT[Math.floor(Math.random() * secreT.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: خواطر , Send By: ' + message.author.username)
   }
    
});

const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت د��عة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيون��**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. هم��ة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]

client.on('message', message => {
   if(message.content.startsWith(prefix + 'حب')) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('DzGaMing-Games' ,
 `${Love[Math.floor(Math.random() * Love.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('Game: حب , Send By: ' + message.author.username)
   }
   
});

client.on('ready', () => {
 console.log(`im ready`);
});
const zead = [
  '*** انا اسمي مريم ***',
  '*** مرحباَ ماهو اسمك ؟ ***',
  `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
  '*** هل تود مساعدتي ؟ ***',
  '*** لماذا هل انت قاسي القلب ؟ ***',
  '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
  '*** ابتعد عني قليل انني متعبة ***',
  '*** هل انت نادم على ماقلت ؟ ***',
  '*** ابتعد عني قليل انني متعبة ***',
  '*** هل انت نادم على ماقلت ؟ ***',
  '*** هل تود مساعدتي ؟ ***',
  '*** واو اشكرك انك شخصاَ رائع ! ***',
  '*** ابحث ��عي عن منزلي لقد كان قريباَ من هنا ***',
  '*** ولاكن عندما حل ��لليل لم اعد ارى اي شيء ***',
  '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
  '*** هيا اذاَ ***',
  '*** اود ان اسئلك سؤال ونحن في الطريق ***',
  '*** هل تراني فتاة لطيفة ام مخيفة ***',
  '*** اشكرك !  ***',
  '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ��واني وسوف اعود ***',
  '*** هل انت جاهز ؟ ***',
  '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
  '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
  '*** انا لست كاذبة صدقني***',
  '*** لماذا ارى في عينيك الخوف ؟ ***',
  '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
  '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
  '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
  '*** لماذا لم تدخل الغرفة ؟ ***',
  '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
  '*** لن تخرج حتى اعود لك بعد قليل ***',
  '*** المفتاح معك ! اك��ب .مريم  ***',
  '*** مفتاح احمر , هل حصلت عليه ؟ ***',
  '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
  '*** مفتاح اسود . هل حصلت عليه ؟ ***',
  '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
  '*** لقد عادت من جديد الى المنزل ***',
  '*** لا تصدر اي صوت ! ***',
  '*** مريم : لقد عدت ***',
  '*** مريم : يا ايها المخادع اين انت ***',
  '*** مريم : اعلم انك هنا في المنزل ***',
  '*** مريم : ماذا تريد ان تسمع ***',
  '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
  '*** احد ما خرج من المنزل ***',
]
client.on('message', message => {
   if(message.content.startsWith(prefix + 'مريم')) {
 var mariam= new Discord.RichEmbed()
 .setTitle("لعبة مريم ..")
 .setColor('RANDOM')
 .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
 .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
  message.channel.sendEmbed(mariam);
  message.react("??")
 }
 
});

      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا , غلا بك :raised_hand::skin-tone-1: :smiley: :wink:`)
        .setDescription(`اهلاً بك في سيرفر  :blush:`)
        .addField(' :bust_in_silhouette:  انت عضو رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'wel')
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'wel')
    if (!channel) return;
    channel.send({embed : embed});
    }) 

 client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'join')
    if (!channel) return;
    channel.send({embed : embed});
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'join')
    if (!channel) return;
    channel.send({embed : embed});
    }) 

      client.on('message', message => {
   if(message.content.startsWith(prefix + 'inv')) {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond:اضغط هنا `)
        .setURL(`https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=410835593451405312`)
        .setThumbnail("https://images-ext-2.discordapp.net/external/dgcnt05ZbaN52KTCKjEYt5MtV7JqJz2Yxn8GCPFeOjw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/410835593451405312/c7735abad2cab67cf68bd854685914ca.png?width=80&height=80")
        .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
     message.channel.sendEmbed(embed);
       }
     
   });

client.on('message' , message => {
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;

let args = message.content.split(" ").slice(1).join(' ');

client.users.get("389755149939113987").send(
    "\n" + "**" + " ● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
                                                .setThumbnail(message.author.avatarURL)
                                                .setFooter(message.author.username, message.author.avatarURL)
                                                message.channel.sendEmbed(embed);


}
    
});

const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}


var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
          
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }

});

//----------------------------- ��سم السيرفر والاونر ما ينضاف 
//------------------------ اسم السيرفر والاونر ما ينضاف 
//----------------------------- كود الوقت
client.on('message', message => {

    if (message.content.startsWith(prefix + "time")) {
let user = message.mentions.users.first();
var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN'); //TN
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
.setDescription([`**${moment().format('HH:mm:ss A')} <-- __Time__
${moment().format('YYYY/M/D')} <-- __Day__
${moment().format('dddd')} <-- __Date__**`])
message.channel.send(id) //By:MohamedTarek#0849ه��هههههههههههههههههه
};
});
//------------------------------------- كود الوقت 
//-------------------------------------  كود الرابط
client.on('message', message => {

    if (message.content.startsWith("رابط")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("**| :white_check_mark:  | :heart:  تم ��رسال الرابط على الخاص**  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
 :kissing_closed_eyes:  -هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: -هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
 
});
//------------------------------------ فتح وتقفيل الشات
client.on('message', message => {

    if (message.content.startsWith(prefix + "mct")) {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم تقفيل الروم , الأن لا يمكن الكتابه :wink: :no_entry: **")
           });
             }
//MohamedTarek#0849
    if (message.content.startsWith(prefix + "unmct")) {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**تم فتح الروم , الأن يمكن الكتابه :wink: :on: **")
           });
             }



});

client.on('message', message => {
  if(message.content.startsWith(`${prefix}invites`)) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`** :heart: __${user}__ Has __${inviteCount}__ Invites. :heart: **`);
});
  }
});
 
let points = {}
,spee={};
 
const type = [
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
       "answers": ["البرازيل"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
       "answers": ["السعودية"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
       "answers": ["القسطنطينية"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
       "answers": ["النهاية"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
       "answers": ["امازون"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
       "answers": ["جافاسكربت"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
       "answers": ["سهله مو صعبه"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
       "answers": ["طبق رطب مرق بقر"]
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
       "answers": ["متجر"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
       "answers": ["شجرة الأوغيري"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
       "answers": ["عش العصفور"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
       "answers": ["قم بكتابة"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
       "answers": ["كانيكي"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
       "answers": ["ليوبليانا"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
       "answers": ["هواوي"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
       "answers": ["ياخرا"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
       "answers": ["يوم الخميس"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
       "answers": ["DO YOU KNOW THE WAY"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
       "answers": ["الأرض"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
       "answers": ["البوابة"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
       "answers": ["الجمل ابو راسين"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
       "answers": ["الحوت الأزرقء"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
       "answers": ["القارب المكسور"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
       "answers": ["المدرسة"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
       "answers": ["اليابان"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
       "answers": ["بلايستايشن"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
       "answers": ["جزر القمر"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
       "answers": ["حشيش"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
       "answers": ["سوبراشي"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
       "answers": ["قوتشي"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
       "answers": ["ايفون"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
       "answers": ["تيستا لاغوسا"]
 
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
       "answers": ["بسكوت ابو ولد"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
       "answers": ["تكأكأتم"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
       "answers": ["الجملة المفيدة"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
       "answers": ["الأوسكار"]
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
       "answers": ["كنت امشي وأمشي"]
 
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
       "answers": ["لااااق بوتء"]
 
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
       "answers": ["ابو ناصر سرى ليله"]
 
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
       "answers": ["عدد اللي برمجوني 2"]
 
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
       "answers": ["Dark_Neet"]
 
         },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
       "answers": ["بابا سنفور متعاطي"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
       "answers": ["ميرندا حمضيات يلد"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
       "answers": ["هل الدمع من عينه"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
       "answers": ["طارت الطياره طارت"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
       "answers": ["أنا فوق راسي ريشه"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
       "answers": ["فريق النجمة"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
       "answers": ["خالد عبدالرحمن"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
       "answers": ["حبيت مره من قلبي"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
       "answers": ["كرستيانو يزق"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
       "answers": ["أنت قمر يا قمر"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
       "answers": ["انا اجمل مخلوق"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
       "answers": ["دونت تاتش"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
       "answers": ["توم وجيري"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
       "answers": ["دباب اربع كفرات"]
 
             },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
       "answers": ["القرش الأسودد"]
 
             },
   {
 
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
       "answers": ["ددسن موديل 85"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
       "answers": ["الحارثيء"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
       "answers": ["عزازي مسرع"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
       "answers": ["جاكي شاان"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
       "answers": ["دارك نت"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
       "answers": ["فانتاستيك"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
       "answers": ["زباله متنقل"]
 
   },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
       "answers": ["اكس بوكس يلد"]
 
       },
   {
           "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
       "answers": ["بكسل يالوصخخ"]
 
   }
]
 

 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
   points: 0,
 };
 if(!message.guild) return;
   let id = message.author.id;
   if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
       let r = (new Date).getTime() - spee[id];
       r = 15*1000 - r;
   message.channel.send(`**اسف انتظر  ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
   return;
   }
   if ( message.content == prefix+'اسرع'){
     
       try{
}catch(e){
 
}
 
   if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
   return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**القيم بدأ...!**').then(msg => {
 
const embed = new Discord.RichEmbed()
.setColor("0054dd")
    .setAuthor(`⏳ |امامك >15<ثانية لكتابة الكلمه`)
         .setImage(`${item.type}`)
.setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
       
msg.channel.send(embed).then(() => {
       message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
       .then((collected) => {
                 const sh = new Discord.RichEmbed()
 .setColor("04791c")
 .setDescription('**✅ | احسنت ربحت نقطة واحده | لمعرفه نقاطي أكتب __-نقاطي__  **')
  .setFooter(`${collected.first().author}`)
 message.channel.sendEmbed(sh);
           let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
           points[won.id].points++;
         })
         .catch(collected => { // في حال لم يقم أحد بالإجابة
           message.channel.send(`🔚 |**انتها الوقت**`);
         })
       })
   })
   spee[id] = (new Date).getTime()
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
   if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
   let userData = points[message.author.id];
   let embed = new Discord.RichEmbed()
   .setAuthor(`${message.author.tag}`, message.author.avatarURL)
   .setColor('#000000')
   .setDescription(`**Your Points**: :small_blue_diamond: __\`${userData.points}\`__ :small_blue_diamond:  `)
   message.channel.sendEmbed(embed)
}

});

client.on('message', message => {

    if (message.content.startsWith(prefix + 'hack')) {

        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('__**تم تهكيرك**__')
           }, 33000)
           });
         }
 
 })

client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix + 'un') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});

client.on('message', message => {

            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'anamabswybc')) {
 if(!message.author.id === '389755149939113987') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت __${message.author.username}__**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }

  });
 
 

 client.on("message", message => {
      if (message.guild) {
      let embed = new Discord.RichEmbed()
      let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'bc2')) {
      if (message.author.bot) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
      if (!args[1]) {
              message.channel.send(`${prefix}bc2 <message>`);
return;
          
  }
const client = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle(':hotsprings: | جاري ارسال رسالتك ') 
             .addBlankField(true)
             .addField(':two_men_holding_hands: | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
             .addField(':incoming_envelope: | الرسالة ', args)
             .setColor('RANDOM')  
              message.channel.sendEmbed(client);  
                 message.channel.send('**لتأكيد إرسال البرودكاست حط : نعم | لا **');

      let user = message.author;
const collector = new Discord.MessageCollector(message.channel, m => user === user, { time: 10000 }) 
     collector.on('collect', message => {
      if (message.content == "نعم") {
              message.guild.members.forEach(m => {
      var bc = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(' الـسيرفر', `${message.guild.name}`,true)
             .addField(' الـمرسل ', `${message.author.username}#${message.author.discriminator}`,true)
             .addField(' الرسالة ', args)
             .setThumbnail(message.guild.iconURL)
             .setColor('RANDOM')
             m.send(`${m}`,{embed: bc});
 })                
  } else if (message.content == "لا") {
return message.reply('**لن يتم ارسال الرسالة** :crying_cat_face: ');
  }                          
});
  }
  } else {
return;
  }    
});

  client.on('message', message => {
if (message.content.startsWith(prefix + 'rooms')) {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`__**${message.guild.channels.size}**__`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
  
});
  
const minecraft = [  'ما معنى تطويرة؛ silk touch ؟',  'من هوة اللذي قد انهى سلسلة سيرفر مايت كرافت؟',  'ماهو الوحش اللذي يرسبن في معبد البحر؟',  'من افضل يوتيوبر ينزل شروحات)ردستونية؛عامة',  'ماذا يفعل لك الهيروبراين؟',  'ماهو الشئ اللذي يمكن مكاثرة الفلجر فيه؟',  'من هو اندر ثاني شئ في ماين كرافت',  'ماهو الامر اللذي يعطينا كوماند بلوك؟',  'كم من الوقت يستغرق اليوم العادي في ماين كرافت؟',  'هل لليردستون اهمية كبيرة في ماين كرافت؟',  'اندر اور',  'مطور ماين كرافت ��لسابق',  'اصغر موب في ماين كرافت',  'كيف تصنع البوق',  'في اي ارتفاع تلقى الدايموند',  'موب مستحيل تضربة بالبو (السهم)',  'كم نحتاج من Glowstone Dust لكي نصنع بلكة كاملة منه',  'كم نحتاج حبة ايرون لصنع سكة الحديد (Track)',  'كم عدد قلوب البقرة',  'ن ماذا يخاف الكريبر',  'يشتهر الاندرمان ب…..?',  'كم عدد قلوب الايرون قولم',  'كم ضربة تضرب الدجاجة و تموت',  'كم بلوكة تحتاج بوابة النذر',  'كم بلوكة تحتاج بوابة الاند',  'كم تحتاج الفرن ايروون عشان تصنعها',  'كيف تصنع كرافتنق تيبل',  'كم ياخذ وقت النبات عشان يكبر',  'كم قلوب ستيفي',  'كم قلوب الاندر مان',  'هل الاندر مان يضرب',  'هل الزومبي غبي ؟ و في اي تحديث ؟',  'ماهو الافضل للتسخين الافا او فحم ؟',  'ماهو شئ الذي اقوى من الاوبسيدين ؟',]
client.on('message', message => {

 
if (message.content.startsWith(prefix + 'micr')) {

  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة ماين كرافت ..")
.setColor('RANDOM')
.setDescription(`${minecraft[Math.floor(Math.random() * minecraft.length)]}`)
.setImage("https://i.imgur.com/RyOXHmZ.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}

});

client.on('message', message => {
    let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);


if (message.content.startsWith(prefix + 'draw')) {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});

client.on('message', message => {
 if (message.content.startsWith(prefix + 'short')) {
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**Usage**: '+ prefix +'short <رابط>')
  if (!args[1]) { 
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:**<${res}>**`); 
    })
  } else { 
    shorten.custom(args[0], args[1], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`); 
      message.channel.send(`اختصار الرابط:**<${res}>**`);
   
 })}}});  
   
const Langs = ['afrikaans', 'albanian', 'amharic', 'ar', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'en', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
if (message.content.startsWith(prefix + 'ts')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription(" :hearts: **للترجمه يرجي كتابه `-->` -ts <Language> <word>** :hearts: ");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send(" :hearts: **للترجمه يرجي كتابه `-->` -ts <Language> <word>** :hearts: ");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});


client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cc')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('**Specify a equation, please** | **قول العمليه من فضلك**');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

  client.on('message', async message =>{

    const args = message.content.split(' ').slice(1).join(' ');
    if(message.content.startsWith(prefix+"el")) {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(' ');
  if(emojiList === "") return;
  message.channel.send("__**إيموجيات السيرفر**__ `-->` " + emojiList);
    }
});

client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('**تـم إنـشاء روم كـتابـي**')

}
});


client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('**تـم إنـشاء روم صـوتي**')
    
}
});

const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "achieve")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});


const figlet = require('figlet');
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});

    client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`** :hearts: ولكم نورت السيرفر :hearts:
  :grinning:  أسم العضو --> __${member}__ :grinning: 
  :bust_in_silhouette:  انت عضو رقم --> __${member.guild.memberCount}__ :bust_in_silhouette:
  :airplane: __${moment().format('HH:mm:ss A')}__ <-- تاريخ دخولك السيرفر ** :airplane: `)
}).catch(console.error)
})

client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
      points: 0,
      };
    if (message.content.startsWith(prefix + 'احسب')) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./fkk/math.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 15 ثانيه لحل المسئله**').then(msg => {
    
          
    msg.channel.send(`${item.type}`).then(() => {
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
        message.channel.send(`${collected.first().author} **✅ | احسنت ربحت نقطة واحده | لمعرفه نقاطي أكتب __نقاطي__ **`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => {
                message.channel.send(`:x: **لم يتمكن احد بحل المسئله بالوقت المناسب**`);
          console.log('[Typing] Error: No one type the word.');
              })
        })
      })
    }
    });
   
    client.on('message', function(message) {
 if (message.author.equals(client.user)) return;
 if (!message.content.startsWith(prefix)) return;
 var args = message.content.substring(prefix.length).split(" ");
 switch (args[0].toLowerCase()) {

 case "roll":
 var roll = Math.floor(Math.random() * args[1]) +1;
 if (!roll) return message.channel.send("** -roll __[NUMBER]__**");

 message.channel.send("**" + roll + "**");
 break;


 
 }});
   
 client.on('message', message => {
if(message.content.startsWith(prefix +'sg')) {
      const A8tra7Room = message.guild.channels.find("name", "suggest")
      if(!message.channel.guild) return message.reply(`**هذا الأمر فقط ل السيرفرات :x: **`);
   let a8tra7 = message.content.split(" ").slice(1);
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","suggest")) return message.channel.send('**لايوجد روم اقتراح \`suggest\` **')
var Eror = new Discord.RichEmbed()
   .setTimestamp()
   .setDescription(`**الرجاء اكتب إقتراحك بعد الأمر **`)
   if(!a8tra7.join(" ")) return message.channel.send(Eror).then(message => {message.delete(50000)});
   var ThxForSug = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`**شكراً على اقتراحك !**`)
.addField(`إقتراحك : `, a8tra7)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
   .setDescription(`**هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء**`)
.addField(`المحتوى : `, a8tra7)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))
 
let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
 
let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });
 
Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   .setTitle(`الاقتراح ⤵`)
   .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=21469585838&scope=bot`)
   .setDescription(`**|~~>~~** ${a8tra7} **~~<~~|**\n    **المقترح : __<@${m8tr7}>__**`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(2000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('**تم الغاء اقتراحك بنجاح :white_check_mark: **').then(message => {message.delete(2000)})
msg.delete();
})
})
}
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم ��حب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوت رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'deletechannels') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'deleteroles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("`**تم حذف جميع الرتب بنجاح**`")
}
});

client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '-color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});

client.on('message', message => {
    if(message.content == ('-id')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
const w = ['./img/ID1.png','./img/ID2.png','./img/ID4.png','./img/ID3.png','./img/ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });

client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});

client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' :smirk: **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' :flushed: **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} :heart_eyes: 
 
 العرض لمدة 15 ثانية  :clock: 
 
 اكتبي __موافقة__ او __لا__**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` :cherry_blossom: **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** :cherry_blossom:  `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(` :worried: **${message.author} تم رفض عرضك** :worried: `);
})
        
  }
});

client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', message => {
	if(message.content.startsWith(prefix + 'قران')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت القرآن | صدقة جارية للجميع", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(` 
     🕋 اوامر بوت القرآن الكريم 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'اعلام')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));////هنا الرساله ذي اذا احد دخل الخاص حق البوت وسوي *لاعب يقوله ما ينفع بس في السيرفرات

const type = require('./3lm/3lm.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتعرف علم اي دولة**').then(msg => { ////هادي الرساله اللي يكتبها يقوله لديك 15 ثانيه تبي تعدلها  علي راحتك

msg.channel.sendFile(`${item.image}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} **✅ | احسنت ربحت نقطة واحده | لمعرفه نقاطي أكتب __-نقاطي__ **`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);////هون بيكتبلك في الكونسل ايدي الشخص اللي كتب الاجابه صحيحه
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: الاجابه هي : __${item.answers}__ **`); ////هنا يقوله تم الانتهاء من الوقت لما ما يجاوب والوقت يخلص تبي تعدلها علي راحتك
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});

        client.on('message', eyad => {
var prefix = "-";
                        let args = eyad.content.split(" ").slice(1).join(" ")
if(eyad.content.startsWith(prefix + 'cr-colors')) {
    if(!args) return eyad.channel.send('`يرجي اختيار كم لون `');
             if (!eyad.member.hasPermission('MANAGE_ROLES')) return eyad.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
             eyad.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            eyad.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "te")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('**You must provide some text to emojify!**');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});

client.on('message' , async (message) => {
    const ms = require("ms");
    if (message.content.startsWith(prefix + 'time')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send(" :timer: **Please enter a period of time, with either `s,m or h` at the end!** :timer: ");
}
if(args[0] <= 0){
  return message.channel.send(" :timer: **Please enter a period of time, with either `s,m or h` at the end!** :timer: ");
}
message.channel.send(":white_check_mark: **Timer has been set for: " + `__${ms(ms(Timer), {long: true})}__** `)

setTimeout(function(){
  message.channel.send(`:clock: **Timer has ended, it lasted :** __**${ms(ms(Timer), {long: true})}**__ :clock: ` + message.author.toString())
}, ms(Timer));
} 
}); 

client.on(`ready`, () => console.log(`Ready!`))
const channels = {};
 
client.on('voiceStateUpdate',async function(oldmember, member) {
if(member.user.bot) return;
if(member.voiceChannel === undefined && channels[member.id]) {
console.log(member.guild.members.filter(m => m.voiceChannelID === channels[member.id].channel).size)
if(member.guild.members.filter(m => m.voiceChannelID === channels[member.id].channel).size < 1) {
member.guild.channels.get(channels[member.id].channel).delete();
channels[member.id].channel = undefined;
}
}
if(oldmember.voiceChannel !== undefined || member.voiceChannel !== undefined) {
if(member.voiceChannelID === '463539849656532993') {
member.guild.createChannel(member.displayName, "voice", [{
id: member.id,
allow: ['CONNECT'],
}, {
id: member.guild.id,
deny: ['CONNECT']
}]).then((channel)=> {
    const parent = member.guild.channels.get('463539849656532993').parentID
    channel.setParent(parent);
    if(!channels[member.id]) channels[member.id] = {
        channel: channel.id,
        }
member.user.send(`**Hey __${member.displayName}__ I've created a channel for you!
------------------------------------------------------------
:unlock: Use** \`\`-unlock [@user | all]\`\` **to unlock for a specify or for all. :unlock: 
:closed_lock_with_key: Use** \`\`-lock [@user | all]\`\` **to lock & kick for a specify or for all in your voice channel. :closed_lock_with_key: 
:arrows_clockwise: Use** \`\`-rename [new name]\`\` **to rename your voice channel name. :arrows_clockwise: 
------------------------------------------------------------**
`)
member.setVoiceChannel(channel.id);
})
} else return undefined;
}
});
 
client.on(`message`, async message => {
let args = message.content.trim().split(" ").slice(1); //substring(prefix.length) before split(" ") if you had a prefix.
let user = message.mentions.users.first();
if(message.content.startsWith("-unlock")) {
if(channels[message.author.id] !== undefined) {
if(user) {
if(message.guild.channels.get(channels[message.author.id].channel).permissionsFor(user.id).has(`CONNECT`)) return message.channel.send(`**The user already can connect to your voice channel**\n to lock & kick user use \`\`-lock\`\` `);
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(user.id, {
CONNECT: true
}).then(message.channel.send(`**${user.username}** can connect to your room now!`))
}
else if(args.includes("all")) {
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(message.guild.id, {
CONNECT: true
}).then(message.channel.send("**Everyone** can connect to your room now!"));
} else return message.channel.send(`**Usage: -unlock [all | @user]**`)
}
}
if(message.content.startsWith("-lock")) {
if(channels[message.author.id] !== undefined) {
if(user) {
if(!message.guild.channels.get(channels[message.author.id].channel).permissionsFor(user.id).has(`CONNECT`)) return message.channel.send(`**The user already cannot connect to your voice channel**`);
try {
if(message.guild.members.get(user.id).voiceChannelID === channels[message.author.id].channel) {
message.guild.members.get(user.id).setVoiceChannel('آيدي الشنل الي يروح له العضو بعد ما يصير له lock'); // المكان الي راح ينحطوله بعد ما يصير لهم lock
}  
} catch (error) {
console.log(error)
}
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(user.id, {
CONNECT: false
}).then(message.channel.send(`:x: **${user.username}** cannot connect to your room now!`))
}
else if(args.includes("all")) {
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(message.guild.id, {
CONNECT: false
}).then(message.channel.send(":x: **Everyone** cannot connect to your room now!"));
} else return message.channel.send(`**Usage: -lock [all | @user]**`)
}  
}
if(message.content.startsWith("-rename")) {
if(channels[message.author.id] !== undefined) {
if(args.length <= 0) return message.channel.send(`:scroll: **Hmmm the name please**`);
if(message.content.length > 7+15) return message.channel.send(`:x: It appears that's the max letters allowed is **15**.`)
const oldName = await message.guild.channels.get(channels[message.author.id].channel).name
message.channel.send(`:pencil2: Renamed **\`\`${oldName}\`\`** to **\`\`${args.join(" ").toString()}\`\`** alright?`)
message.guild.channels.get(channels[message.author.id].channel).setName(args.join(" ").toString());
}
 }
});



const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآف إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					.setFooter("DzGaMing-Music")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع ');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "! !")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'invites');
    if (!channel) {
        console.log("i have Error !!");
        return;
    }
                          var currentTime = new Date(),
          hours = currentTime.getHours() + 4 ,
          hours2 = currentTime.getHours() + 1 ,             
           minutes = currentTime.getMinutes(),             
           seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;    
            }
            if (hours == 0) {
                hours = 12;
            }
         var ee = member.user;
             var guild;
    while (!guild)
        guild = client.guilds.find("name", "! !")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
ee.send(`We Thank ${Invite.inviter}\nFor he has brought you into the server \nYou are logged in from this link https://discord.gg/${Invite.code}`);
 channel.send({embed : new Discord.RichEmbed()
       .setColor('RANDOM')
       .setThumbnail(ee.avatarURL)
       .setTitle(`**New Member !! **`)
       .setDescription(`**${hours2}:${minutes}:${seconds} ${suffix}
❋ - Invited By : ${Invite.inviter} 
❋ - Link Invited : https://discord.gg/${Invite.code}
❋ - Member Name : ${member}
❋ - Member ID : ${member.id}
❋ - Data : ${Day}-${Month}-${Year} 
❋ - Time : ${hours2}:${minutes}:${seconds} ${suffix}**`)
       });
            dat[Inv] = Invite.uses;
 }
         })
    })

    });
    
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return;
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
  if (message.mentions.users.size < 2) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var men = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
  var Reason =  message.content.split(" ").slice(2).join(" ");
if (command == "warn") {
    let say = new Discord.RichEmbed()
    .setDescription(`<@${men.id}> You Have been Warned \n\nBy : <@${message.author.id}> \n\nReason : ${Reason}`)
    .setColor(0x831f18)
    .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(say);
    client.channels.get("462730282857005056").send(` ** ======:blossom: New Warn :blossom:======**

  **❋ - User --> __${men}__ :spy:  @here **

  **❋ - By --> __${message.author}__ :slight_smile: @here **
    
  **❋ - Channel --> __${message.channel}__ :stuck_out_tongue: @here **

  **❋ - Reason --> __${Reason}__ :envelope:  @here **

    
  ** ======:blossom: New Warn :blossom:======**
    `)
    client.channels.get("462730282857005056").send({embed : say})
    const eyad = new Discord.RichEmbed()
  .setAuthor(`Warn!`, men.avatarURL)
   .setThumbnail(men.avatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${men.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${Reason}` + ' ]**')
  .addField("**server:**", '**[ ' + `${message.guild.name}` + ' ]**')
  client.users.get(men.id).send({embed : eyad});
    message.delete();
  }


});

client.on('message', eyad =>{
      let args = eyad.content.split(" ").slice(2).join(" ")
      let men = eyad.mentions.users.first()
      let mas = eyad.author
      if(eyad.content.startsWith(prefix + 'sar7')) {
          if(!args) return eyad.channel.send("`Usage: " + prefix + 'sar7 <@someone> <message>`');
          if(!men) return eyad.channel.send("`Usage: " + prefix + 'sar7 <@someone> <message>`');
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(` :wink: __<@${men.id}>__ : تمت مصارحتك :wink:
          ** :hearts: الصراحه : __${args}__** :hearts: `)
    .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
          
          eyad.author.sendEmbed(embed)
                const Embed11 = new Discord.RichEmbed()
          .setColor("RANDOM")
                  .setAuthor(eyad.guild.name, eyad.guild.iconURL)
                  .setDescription(`لقد تم مصارحه العضو <@${eyad.author.id}>`)
  .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
       eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(1000)})
      }
  });
  
client.on('message', eyad =>{
      let args = eyad.content.split(" ").slice(2).join(" ")
      let men = eyad.mentions.users.first()
      let mas = eyad.author
      if(eyad.content.startsWith(prefix + 'صارح')) {
          if(!args) return eyad.channel.send("`Usage: " + prefix + 'صارح <@someone> <message>`');
          if(!men) return eyad.channel.send("`Usage: " + prefix + 'صارح <@someone> <message>`');
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(` :wink: __<@${men.id}>__ : تمت مصارحتك :wink:
          ** :hearts: الصراحه : __${args}__** :hearts: `)
    .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
          
          eyad.author.sendEmbed(embed)
                const Embed11 = new Discord.RichEmbed()
          .setColor("RANDOM")
                  .setAuthor(eyad.guild.name, eyad.guild.iconURL)
                  .setDescription(`لقد تم مصارحه العضو <@${eyad.author.id}>`)
  .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
       eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(1000)})
      }
  });

var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`** __<@!${banner.id}>__
حآول العبث بالسيرفر @everyone**`);
guild.owner.send(`** __<@!${banner.id}>__
حآول العبث بالسيرفر __${guild.name}__ **`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} Was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
  rebellog.send(`** __<@!${banner.id}>__
حآول العبث بالسيرفر @everyone**`);
guild.owner.send(`** __<@!${banner.id}>__
حآول العبث بالسيرفر __${guild.name}__ *`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} Was Created By ${channelcreate.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
  rebellog.send(`** __<@!${banner.id}>__
حآول العبث بالسيرفر @everyone**`);
guild.owner.send(`** __<@!${banner.id}>__
حآول العبث بالسيرفر __${guild.name}__ *`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
  
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

 








client.login(process.env.BOT_TOKEN);
