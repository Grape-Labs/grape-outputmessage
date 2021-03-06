# Grape Labs - Discord Verification Channel Output Message Bot (1/3)
Discord.js simple script to output custom verification message on any channel the bot has permissions to.
## Table of contents
* [Discord](#discord)
* [Setup](#setup)
* [Customize](#customize)

## Discord
- Go to [Discord Application Developer Portal](https://discord.com/developers/applications) and create a new application.
- Copy the bot ID found in **General Information** under **Application ID** (that's the bot ID).
- Once application is created, click on the **Bot** section and select **Add Bot**.
- Click **Copy** on Token section (you will need this token in the .env file which you will rename in the steps below), otherwise click on re-generate button if Copy button doesn't show up.
- To enable developer mode, go to User *Settings* --> *Advanced* --> Toggle *Developer Mode* button.
- On your discord server, create a new channel for verification.
- Right click the newly created channel and select '__Copy ID__'.
- Invite the bot to the server using the following link: https://discord.com/oauth2/authorize?client_id="YOURBOTIDHERE"scope=bot&permissions=88382860368
### Discord Channel Permissions
- In your chosen channel, add your bots (or GRAPE#0192 if invited) user and add the following permissions:
  * View Channel, Manage Channel, Send Messages, Add Reactions, Use External Emoji, Manage Messages and Read Message History.

<img src="https://github.com/Grape-Labs/grape-outputmessage/blob/6d9213bfd955764106f55b6d29285ae6d4297392/Images/verification-channel.gif" width="50%" />

## Setup
- ```npm install``` --> To install necessary packages.
- In root folder, rename the **env_example** to **.env** (or copy).
- Edit .env file and set YOUR Discord bot Token (DISCORD_BOT_TOKEN) along with verification channel ID (DISCORD_CHANNEL_ID).
- To run bot enter ```npm run outputmessage```

## Customize
- To edit output message to go /discord/role-claim.js
- If you'd like to edit the emoji, change 'grapes' with the name of your CUSTOM emoji.

<img src="https://github.com/Grape-Labs/grape-outputmessage/blob/4f841f2d46c5ca57cd6296f119bd65a680d824ba/Images/emoji-select.png" width="50%" />

- Similarly, you can edit emojiText & emojiText2 to choose what message the bot outputs. 

<img src="https://github.com/Grape-Labs/grape-outputmessage/blob/e575fc924f5706d19d815a58b7edca21163c3963/Images/emoji-text.png" width="90%" />

- If you've deployed your OWN dashboard, edit the reference below:

<img src="https://github.com/Grape-Labs/grape-outputmessage/blob/3a60b5679bd968973e58f1f265c9e44b36298c25/Images/link-redirect.png" width="80%" />

 
