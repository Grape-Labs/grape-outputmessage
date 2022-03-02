/* eslint-disable no-restricted-syntax */
const addReactions = (message, reactions) => {
    message.react(reactions[0]);
    reactions.shift();
    if (reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 750);
    }
};

export default async (client, id, text,text2, reactions = [],button) => {
    const channel = await client.channels.fetch(id);

    channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {
            // Send a new message
            channel.send({content: text,components: [button] });
	            channel.send(text2).then((message) => {
	           addReactions(message, reactions);
	           

            });
        }
        else {
            // Edit the existing message
            for (const message of messages) {
                message[1].delete();
                
              
            }
            
             channel.send({content: text,components: [button] });
	          channel.send(text2).then((message) => {
	           addReactions(message, reactions);
	           

            });

        }
    });
};
