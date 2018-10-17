import Discord from 'discord.js';
import fs from 'fs';

const client = new Discord.Client();
const config = JSON.parse(fs.readFileSync('config.json'));
const commandPrefix = '~';
const commands = {
    ping: 'ping',
};

function getCommand(command) {
    return `${commandPrefix}${commands[command]}`;
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    console.log(message);

    if (message.content === getCommand('ping')) {
        message.channel.send('Pong.');
    }
});

client.login(config.token);