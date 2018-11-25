const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`Universe server.`,'https://www.twitch.tv/f9u9l1i')
    
});

client.on('message', message => {
  var prefix = "5"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("5play",' لـتشفيل البوت ')
        .addField("5skip",' لـخطي الاغنيه ')
        .addField("5vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});


client.login(process.env.BOT_TOKEN);
