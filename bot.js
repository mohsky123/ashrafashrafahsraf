const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '.'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | -inv`,"http://twitch.tv/S-F")
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







client.login(process.env.BOT_TOKEN);

