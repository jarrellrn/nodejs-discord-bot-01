require("dotenv").config();

const { Client, Message, DiscordAPIError } = require("discord.js");
const client = new Client();
const PREFIX = "$";

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  console.log(`[${message.author.tag}]: "${message.content}"`); // logs message content

  if (message.content === "test") {
    //tags user vvvv
    message.reply("test received");
    //doesn't tag user vvvv
    message.channel.send("test received");
  }

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === "kick") {
      // setup command
    }
  }
});
