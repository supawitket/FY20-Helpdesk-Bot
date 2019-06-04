// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            if(context.activity.text.indexOf('ดี') !== -1 ) {
                // await context.sendActivity("สวัสดีค่ะ");
                await stepContext.context.sendActivity({ attachments: [this.createHeroCard()] });
            } else {
                await context.sendActivity("hello");
            }
            // if(context.text.indexOf('ดี') !== -1 ) {
            //     await context.sendActivity(`สวัสดีคับ`);
            // } else {
            //     await context.sendActivity(`ฮาย`);
            // }
            //await context.sendActivity(`You said '${ context.activity.text }'`);

            // By calling next() you ensure that the next BotHandler is run.
            // await next();
        });
        

        // this.onMembersAdded(async (context, next) => {
        //     const membersAdded = context.activity.membersAdded;
        //     for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
        //         if (membersAdded[cnt].id !== context.activity.recipient.id) {
        //             await context.sendActivity('Hello and welcome!');
        //         }
        //     }
        //     // By calling next() you ensure that the next BotHandler is run.
        //     await next();
        // });

        
    }
    createHeroCard() {
        return CardFactory.heroCard(
            'BotFramework Hero Card',
            CardFactory.images(['https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg']),
            CardFactory.actions([
                {
                    type: 'openUrl',
                    title: 'Get started',
                    value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                }
            ])
        );
    }
}

module.exports.EchoBot = EchoBot;
