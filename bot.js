const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const token = fs.readFileSync('key.txt').toString();
const axios = require('axios');
const cheerio = require('cheerio');


const players = [{url: 'https://rocketleague.tracker.network/profile/steam/76561198014985413/', name: 'Sean'},
  {url: 'https://rocketleague.tracker.network/profile/steam/krebble/', name: 'Caleb'}];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '?mmr') {
    for(i = 0; i < players.length; i++){
        let name = players[i].name;
        axios.get(players[i].url).then(response => {
          const $ = cheerio.load(response.data);
          let x1 = $('tr:nth-child(3) td:nth-child(4)', '#season-12');
          let x2 = $('tr:nth-child(5) td:nth-child(4)', '#season-12');
          let message = `${name}:\n2v2 Rating: ${x1.text()}\n3v3 Rating: ${x2.text()}\n`;
          console.log(message);
          msg.reply(message);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});

client.login(token);