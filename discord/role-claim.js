import firstMessage from './first-message';
import { MessageActionRow, MessageButton } from 'discord.js';



	
export default (client) => {
	// Read from Channel
    const channelId = process.env.DISCORD_CHANNEL_ID;

   const getEmoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName);

	// Uploaded server Emojis
    const emojis = {
        grapes:`${process.env.DISCORD_ROLE_1}`
    };

    const reactions = [];
    
    // Message can be outputted once

    let emojiText = "**Welcome to Your Project!** \n\n**We are excited to have you join us!** \n\n This server is powered and protected by **Grape**. Certain channels will only be visible if you meet the necessary criteria and after you complete the verification-react process to receive your role. \n\nTo start the *verification process* check that the wallet you are linking is holding the correct token(s) or NFT(s). \n\n> **To Link a Phantom, SolFlare, Sollet or Sollet Extension Wallet**: Please connect your wallet and link your Discord via the **Grape  Dashboard**: \n\n";
    
    let emojiText2 ="n**To Link your Ledger Wallet**: Please send a DM to the <@849358659897262080> verification bot with a single command: **!verify** \n\n**After Linking your Wallet**: **Please click on the emoji below** after you link your wallet above, need help or using a ledger, read the <#849221857650671646> and <#849227650686124053> for assistance. ";
    for (const key in emojis) {
        const emoji = getEmoji(key);
        reactions.push(emoji);

        const role = emojis[key];
    }

const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('https://verify.grapes.network/start')
					.setStyle('LINK')
					.setURL('https://discord.com/oauth2/authorize?client_id=849358659897262080&redirect_uri=https%3A%2F%2Fverify.grapes.network%2Fapi%2Fdiscord%2Fcallback&state=%7B%22register%22%3A%22true%22%2C%22serverId%22%3A%226ea624a5-97b8-45a2-b141-9812d36c0cd7%22%7D&response_type=code&scope=identify'),

			);
			
	
  
    firstMessage(client, channelId, emojiText,emojiText2, reactions,row);

    const handleReaction = async (reaction, user, add) => {
        if (user.id === process.env.DISCORD_BOT_ID) {
            return;
        }

        const emoji = reaction._emoji.name;

        const { guild } = reaction.message;

        const roleName = emojis[emoji];
        if (!roleName) {
            return;
        }



    };

   
};
