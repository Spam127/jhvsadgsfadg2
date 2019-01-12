const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    var prefix = "*";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**اكتب شي بعد الكوماند**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
    message.channel.sendMessage('جار ارسال الرسالة ✅')
    message.channel.sendMessage('تم الارسال الي 10')
    message.channel.sendMessage('تم الارسال الس 100')
    message.channel.sendMessage('تم الرسال الي كل اعضاء السيرفر')
            });
        }
        } else {https://pastebin.com/night_mode
            return;
        }
    });
client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$bc-bot')){ // البريفكس والامر
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة ✅')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Vomlem `,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);
