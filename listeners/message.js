const { Listener } = require('discord-akairo');

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
            await message.channel.send('Buy SUPER nitro to use custom emojis here.').then(m=>m.delete({ timeout: 5000 }))
            message.delete()
            
        }
    }
}

module.exports = MessageListener;