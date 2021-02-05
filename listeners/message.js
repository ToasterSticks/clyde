const { Listener } = require('discord-akairo');
const { TextChannel } = require('discord.js');

class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message'
        });
    }

    async exec(message,args) {
        const emj = /<?(a)?:?(\w{2,32}):(\d{17,19})>?/g.exec(message.content)
        if(emj) {
            if(message.member.roles.cache.has('806555833437388802')) return;
            message.remove()
            message.channel.send('Buy SUPER nitro to use custom emojis here.').then(m => m.remove(5000))
            
        }
    }
}

module.exports = MessageListener;