const fetch = require("node-fetch").default;

module.exports.run = async (client, message, args) => {
    
    let [query, branch] = args;

    if (!query) return message.channel.send("Lütfen bir **arama** sorgusu ekleyin!");
    if (!branch) branch = "master";

    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(json => {
            if (!json) return message.channel.send("Döküman **Bulunamadı**!");

            message.channel.send({ embed: json });
        })
        .catch(() => {
            message.channel.send("Dokümanlar getirilemedi!");
        })

}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['docs'],
  permLevel: 0 
};

exports.help = {
  name: 'djs'
};