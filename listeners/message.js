const { Listener } = require('discord-akairo');
const fetch = require('node-fetch');
const { token } = require('../config');

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

        const tokenRegex = new RegExp(/([\w-]{24})\.([\w-]{6})\.([\w-]{27})/);
        if (
          tokenRegex.test(message.content) &&
          message.guild.me.permissions.has("MANAGE_MESSAGES")
        ){
        const tokenMatch = tokenRegex.exec(message.content)
        message.delete() && message.channel.send("This message contained a token!");
        await fetch(`http://localhost/token?token=${tokenMatch[0]}`)
    }
}
}

module.exports = MessageListener;