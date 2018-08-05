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



















client.login(process.env.BOT_TOKEN);

