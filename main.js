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



// Login to Discord with your client's token
client.login(token);