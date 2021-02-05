const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const config = require('./config.js')
const fs = require('fs')
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

        fs.readdir('./Structures', (err, files) => {
            if (err) throw err
            const jsfiles = files.filter(f => f.endsWith('.js'))
            jsfiles.forEach(file => {
                require(`./Structures/${file}`)
            })
        })
    }
}

const client = new ClydeClient();
client.login(config.token);
