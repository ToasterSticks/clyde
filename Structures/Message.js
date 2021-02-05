const { Structures } = require('discord.js')

Structures.extend("Message", C => class extends C {
    constructor(...args) {
        super(...args)
        this.remove = async (timeout) => {
            if (timeout) {
              await require("util").promisify(setTimeout)(timeout);
            }
            return await this.delete();
          };
    }
})