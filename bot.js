const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const token = fs.readFileSync('key.txt').toString();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '?mmr') {
    let result = "blank result";
    msg.reply('Here\'s the result!: ' + result);
    console.log(result);
  }
});

client.login(token);