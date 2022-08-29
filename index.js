const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const { keep_alive } = require("./keep_alive");

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})


client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("Hi"))
  {
    message.channel.send(`sup`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hru"))
  {
    message.channel.send(`im fine, you?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("good"))
  {
    message.channel.send(`Mkay`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lmao"))
  {
    message.channel.send(`Huh? whats funny?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(`BIG BRUH MOMENTO`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("im sad"))
  {
    message.channel.send(`WHY?! UR SUCH AN AMAZING PERSON!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("tag"))
  {
    message.channel.send(`! "𝗜𝘁𝘇 {username}ᴼᶠᶠᶦᶜᶦᵃˡ`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nothing"))
  {
    message.channel.send(`Ur sus!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hi"))
  {
    message.channel.send(`hey!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("whats your name?"))
  {
    message.channel.send(`whats my name? i am mod :D`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(`wanna invite me ? here's the link https://discord.com/api/oauth2/authorize?client_id=968498262157975574&permissions=8&scope=bot`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(`Lol!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("0000"))
  {
    message.channel.send(`**Very Important rules**

1) **Nickname rules**
No unusual , sexual , unreadable , racist or blank nicknames.

2) **Profile Picture Rules**
No Inappropriate , blank racist , sexual etc. pfp

3) **No Bad words , slur , or inappropriate language**
We wont allow any bad words in This server . If any staff does this you may send a ss and dm mod.

4) **No Toxicity**
We wont allow any type of toxic behaviour.

5) **Saying we are scam without any proof**
We have given accounts to alot of people. If you are say that we scammed you which means you have proof. show us and we will delete this server. or GET BANNED.

**If you see any staff breaking the rules here dm us with proof. fake proof= ban** `)
  }
});

  
client.on("message", async message =>{
  if (message.content.startsWith("everyone ||1814||"))
  {
    message.channel.send(` ||@everyone|| `)
  }
});


client.on("message", async message =>{
  if (message.content.startsWith("Who is your boss"))
  {
    message.channel.send(`<@!791285229590806588> is my boss`)
  }
});

client.on("message", async message =>{
  if (message.content.startsWith("inv"))
  {
    message.channel.send(`:invite::line~2::line~2::line~2::line~2:INVITE GEN ACCESS :line~2::line~2::line~2::line~2::invite:


:invite: 10 Invites - 5 day Basic gen access :invite:
:invite: 20 Invites - 1 Week premium gen access :invite: 

DON'T INVITE HERE INVITE IN THE MAIN SERVER**
discord.gg/zenrewards`)
  }
});

const receivedEmbed = message.embeds[0];
const exampleEmbed = new MessageEmbed(receivedEmbed).setTitle('New title');

channel.send({ embeds: [exampleEmbed] });