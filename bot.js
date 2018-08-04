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


 








client.login(process.env.BOT_TOKEN);
