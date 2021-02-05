const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const config = require('./config.js')
class ClydeClient extends AkairoClient {
    constructor() {
        super({
            ownerID: config.ownerID
        }, {
            allowedMentions: {
                parse: ['roles', 'users']
            },
            ws: {
                properties: {
                    $browser: 'Discord Android'
                }
            }
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

const client = new ClydeClient();
client.login(config.token);
