const express = require('express');
const app = express();
const port = 3000 || 8080;

app.all('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<html><head> <link href="https://fonts.googleapis.com/css?famiy=Roboto Condensed" rel="stylesheet"> <style>body{font-family: "Roboto Condensed"; font-size: 21px; color: white; background-color: #23272A; margin-left: 5%; margin-top: 2%;}a{color: #5865F2}a:hover{color: #818bff}h1{font-size: 48px;}</style></head><body> <h1>Hosting Active</h1> </p></a><i>Make sure to add the repl.co URL to <a href="https://uptimerobot.com/">UPTIME ROBOT</a> to make Bot 24/7 Online!</i></p> <h1>Sylanio Development</h1> <b><a href=https://dsc.gg/maxgaming-yt>Discord Server</a> 😎 |  <a href="https://www.sylanio.tk">Website</a></b><br/><br/💖 ahref="https://dsc.gg/maxgaming-yt"> <img src="https://discord.com/api/guilds/825260113509351454/widget.png?style=banner2"> </a><br/><br/>SUPPORT ME AND Sylanio DEVELOPMENT</a></p></a>You can always Support me by inviting one of my own Discord Bots</p></a><a href="https://dsc.gg/maxgaming-yt">Sylanio</a> | <a href="https://sylanio.tk">Sylanio Bot</a>`);
  res.end();
});

function k() {
  app.listen(port, () => {
  });
}
module.exports = k;

// Made By MAXGAMER DEVELOPMENT
