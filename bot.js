// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, AttachmentLayoutTypes, CardFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            if(context.activity.text.indexOf('ดี') !== -1 ) {
                await context.sendActivity("สวัสดีค่ะ ยินดีต้อนรับเข้าสู่ Intelligent Helpdesk Bot");
                await context.sendActivity("คุณสามารถคลิกเมนูด้านล่างเพื่อเข้าสู่หมวดหมู่ต่างๆ หรือถามคำถามโดยการพิมได้เลยค่ะ");
                await context.sendActivity({ attachments: [CardFactory.heroCard(
                    'Helpdesk Onboarding',
                    CardFactory.images(['https://zdnet3.cbsistatic.com/hub/i/2019/02/12/745b7ed1-f19c-4718-ad0b-ae7cb7a14fe9/fac8658d4aa5c4bcbda293ab3e1a3d3b/microsoft.png']),
                    CardFactory.actions([
                        {
                            type: '',
                            title: 'Hardware Issues',
                            value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                        },
                        {
                            type: '',
                            title: 'Software Issues',
                            value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                        },
                        {
                            type: '',
                            title: 'Software Issues',
                            value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                        }
                    ])
                )] });
            } else {
                await context.sendActivity("สวัสดีค่ะ วันนี้เป็นยังไงบ้างคะ");
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
}

module.exports.EchoBot = EchoBot;
