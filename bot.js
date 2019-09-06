const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const token = fs.readFileSync('key.txt').toString();
const axios = require('axios');
const cheerio = require('cheerio');


const holyURL = 'https://rocketleague.tracker.network/profile/steam/76561198014985413/';
const krebURL = 'https://rocketleague.tracker.network/profile/steam/krebble/';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '?mmr') {
    let result = "blank result";
    //put the calls down here
    axios.get(holyURL).then(response => {
      console.log(response.data);
      msg.reply(response.data.substring(0,20));
    })
    .catch(error => {
      console.log(error);
    });

    axios.get(krebURL).then(response => {
      console.log(response.data);
      msg.reply(response.data.substring(0,20));
    })
    .catch(error => {
      console.log(error);
    });
    msg.reply(result); //reply go here
    console.log(result);
  }
});

client.login(token);