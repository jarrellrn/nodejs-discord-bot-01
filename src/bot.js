require("dotenv").config();

const { Client, Message, DiscordAPIError } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on("message", (message) => {
  console.log(`[${message.author.tag}]: "${message.content}"`);
  if (message.content === "test") {
    //tags user
    message.reply("test received");

    //doesn't tag user
    message.channel.send("test received");
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
