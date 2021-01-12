const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
  if(message.author.id != "794611591986675724") return message.channel.send('Sadece Bot Sahibi Bu Komutu Kullanabilir!')


  
  try {
    if (args.join(" ").toLowerCase().includes("token")) {
        return 
        }
    
    let toEval = args.join(" ");
    const evalutade = eval(toEval);
    let kontrol = typeof(evalutade)
let buyutulmus = kontrol[0].toLocaleUpperCase("TR") + kontrol.slice(1).toLocaleLowerCase("TR")
    const embed = new MessageEmbed()
    .setColor('GREEN')
    .setFooter('Silmek İçin (✅) | Gizlemek İçin (❌) | Geri Gelmek İçin (↩️)')
    .addField(`Sonuç:`,`\`\`\`js\n${evalutade}\n\`\`\``)
    .addField(`Tür:`,`\`\`${buyutulmus}\`\``, true)
    message.channel.send(embed).then(async mesaj => {
    await mesaj.react('✅') 
    await mesaj.react('❌')
    await mesaj.react('↩️')

    const tikemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const çarpıemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    const gerigelmeemoji = (reaction, user) => reaction.emoji.name === '↩️' && user.id === message.author.id;

    const tik = mesaj.createReactionCollector(tikemoji);
    const çarpı = mesaj.createReactionCollector(çarpıemoji);
    const geri = mesaj.createReactionCollector(gerigelmeemoji);
tik.on('collect', async ramo => {
mesaj.delete() 
})
      
çarpı.on('collect', async ramo => {
mesaj.edit(new MessageEmbed()
.setColor('RED')
.addField(`GIZLENDI:`,`\`\`\`diff
-❌ BU EVAL \`⁹¹¹ 𝕍𝕖𝕟𝕠𝕞#9999 TARAFINDAN GIZLENDI
\`\`\``)
.addField(`Sonuç:`,`\`\`GİZLENDİ\`\``,true)
.addField(`Tür:`,`\`\`GİZLENDİ\`\``, true)       
)})  
  geri.on('collect', async ramo => {
mesaj.edit(new MessageEmbed()
.setColor('GREEN')
.setFooter('Silmek İçin (✅) | Gizlemek İçin (❌) | Geri Gelmek İçin (↩️)')
.addField(`Sonuç:`,`\`\`\`js\n${evalutade}\n\`\`\``)
.addField(`Tür:`,`\`\`${buyutulmus}\`\``, true)
)})     
    })
  }
   catch (e) {
    message.channel.send(`Error`+ e)
  }
  
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['eval'],
  permLevel: 0 
};

exports.help = {
  name: 'eval'
};