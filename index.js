const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login(process.env.token)

client.on("ready", () =>{
    console.log("BOT ONLINE")
})

client.on("messageCreate", (message) =>{

   if(message.content == "!stock"){
    message.channel.send("Ecco a te il link dove puoi trovare lo stock della pagina, ricordati di aggiornarlo ogni sera: https://www.decathlon.de/p/mikrofaser-badetuch-ultra-kompakt-xl-110-%C3%97-175-cm/_/R-p-158653?mc=8361644&c=ROSA")
   }

   if(message.content == "!io"){
    message.channel.send("Ciao, bravo che hai aggiornato il file!")
   }
   
   if (message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("dhl green")
            .setDescription(`${message.author.username}ha scritto il messaggio`)
            .setThumbnail("https://www.giardinaggio.it/giardino/alberi/alberi-vendita_NG1.jpg")

        message.channel.send({ embeds: [embed] })

    if (message.content == "!comando"){
        message.author.send("ehi ciao!");
    }
   }
});



