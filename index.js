const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const config = require('./config.json')
class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: config.ownerID
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: config.prefix // or ['?', '!']
        });
        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
        this.commandHandler.loadAll();
    }
}

const client = new MyClient();
client.login(config.token);