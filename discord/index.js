import Discord from 'discord.js';
import 'dotenv/config.js';

import roleClaim from './role-claim';

const initHandler = async () => {
	    const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MEMBERS"] });

  //  const client = new Discord.Client();
   // await CommandUtil.initCommands(client);

    client.once('ready', () => {
        console.log('Ready!');
        roleClaim(client);
    });



    try {
        await client.login(process.env.DISCORD_BOT_TOKEN);
    }
    catch (e) {
        console.error('Bot has failed to connect to discord.');
        process.exit(1);
    }
};

export default {
    initHandler,
};
	