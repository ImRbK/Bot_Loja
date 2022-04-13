const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTYxMzg3MDMzNzA2NzgyODMw.Yk4Pcg.JdMpUXQ7kcITK1j-uf8QlEpNMv8")


client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "!youtube") {
        message.channel.send("Iscriviti al mio secondo canale: https://www.youtube.com/channel/UCvIafNR8ZvZyE5jVGVqgVfA")
    }

    if (message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .setDescription(`${message.author.username} Precisa do nosso suporte?
            Selecione uma categoria abaixo para abrir um ticket!
            Ghost Store 👻 © Todos os direitos reservados.`)
            .setThumbnail("")
            

        message.channel.send({ embeds: [embed] })
    }
})