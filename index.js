const Discord = require ("discord.js")

const TOKEN = "NzE4NTkxMTI5MTY3MDY5MjU3.XtrGIw.lQtvEMdfM_c_rxOiMSq2jTfql7c"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

 client.on("ready", () => {
     console.log(`Logged in as ${client.user.tag}`)
 })
 
 client.on("messageCreate", (message) => {
     if (message.content == "hi"){
         message.reply("Hellow")
     }
 })
 client.login(TOKEN)