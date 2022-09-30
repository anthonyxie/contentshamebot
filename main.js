const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

//command handling
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) {
        return;
    }

	const { commandName } = interaction;

	if (commandName === 'ping') {
        console.log(interaction)
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.on('messageCreate', async message => {
    const channel = client.channels.cache.get('1023364903026839624');
    let everyone = message.guild.defaultRole;
    if (!message.author.bot) {
        if (message.author.id == '105420528939978752') {
            channel.send(`@here, carro has spoken`);
            channel.send(`you're so poggers babe, thanks for saying ${message.content}`);
        }
    }
    console.log(message);
    console.log(message.author);
});

client.on('presenceUpdate', async (oldMember, newMember) => {
    const channel = client.channels.cache.get('1023380798222630932');
    console.log(newMember.activities);
    if (newMember.activities && newMember.user.id == '131892100529651712' && newMember.activities[0].details) {
        if (newMember.activities[0].name === 'League of Legends' && newMember.activities[0].state == 'In Lobby' && newMember.activities[0].details.includes('Summoner\'s Rift')) {
            channel.send(`@here, THIS FILTHY DEGENERATE IS TRYING TO PLAY LEAGUE OF LEGENDS PLEASE PUNISH HIM FOR HIS CRIMES`);
        }
        if (newMember.activities[0].name === 'League of Legends' && newMember.activities[0].state == 'In Game'  && newMember.activities[0].details.includes('Summoner\'s Rift')) {
            channel.send(`@here, THIS FILTHY DEGENERATE IS LITERALLY PLAYING LEAGUE OF LEGENDS PLEASE PUNISH HIM FOR HIS CRIMES`);
        }
        if (newMember.activities[0].name === 'League of Legends' && newMember.activities[0].state == 'In Lobby' && newMember.activities[0].details.includes('Teamfight')) {
            channel.send(`@here, THIS FILTHY DEGENERATE IS TRYING TO PLAY TFT PLEASE PUNISH HIM FOR HIS CRIMES`);
        }
        if (newMember.activities[0].name === 'League of Legends' && newMember.activities[0].state == 'In Game'  && newMember.activities[0].details.includes('Teamfight')) {
            channel.send(`@here, THIS FILTHY DEGENERATE IS LITERALLY PLAYING TFT PLEASE PUNISH HIM FOR HIS CRIMES`);
        }
    }
});


// Login to Discord with your client's token
client.login(token);