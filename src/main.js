import Discord from 'discord.js';
import fs from 'fs';

const client = new Discord.Client();
const config = JSON.parse(fs.readFileSync('config.json'));
const commandPrefix = '~';
const commands = {
    status: {
        name: 'status',
        fn: (message) => {
            message.channel.send('Up and running.');
        },
    },
};

function getCommandName(command) {
    return `${commandPrefix}${commands[command].name}`;
}

function getCommandFn(command) {
    return commands[command].fn;
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content === getCommandName('status')) {
        getCommandFn('status')(message);
    }
});

client.login(config.token);