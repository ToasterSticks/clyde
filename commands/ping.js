const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping'] 
        });
    }

    exec(message,args) {
        console.log(args)
        return message.reply('Pong!');
    }
}

module.exports = PingCommand;