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
                            type: 'openUrl',
                            title: 'Hardware Issues',
                            value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                        },
                        {
                            type: 'openUrl',
                            title: 'Software Issues',
                            value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                        },
                        {
                            type: 'openUrl',
                            title: 'Software Issues',
                            value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                        }
                    ])
                )] });
            } else if(context.activity.text.indexOf('เปลี่ยน') !== -1 && context.activity.text.indexOf('พาส') !== -1) {
                await context.sendActivity("สามารถทำการเปลี่ยนรหัสผ่านได้โดยการ Login เข้าไปที่ https://portal.office.com > Settings > Change Password ค่ะ");
            } else if(context.activity.text.indexOf('โหลด') !== -1 && context.activity.text.indexOf('Office') !== -1) {
                await context.sendActivity("สามารถดาวน์โหลด Office 365 ProPlus โดยการ Loging เข้าไปที่ https://portal.office.com แล้วคลิก Download โปรแกรมสำหรับ Mac และ PC");
                await context.sendActivity("สำหรับ iOS และ Android สามารถ Download ได้ผ่าน App Store และ Play Store แล้วทำการ Login ด้วย Coporate Account เพื่อ Enable features ต่างๆในการใช้งานค่ะ");
            } else if(context.activity.text.indexOf('ลง') !== -1 && context.activity.text.indexOf('เครื่อง') !== -1) {
                await context.sendActivity("ผู้ใช้งาน Office 365 สามารถลงได้ทั้งหมด 15 เครื่อง แบ่งเป็น 5 เครื่องสำหรับ PC/Mac 5 เครื่องสำหรับ Phone และ 5 เครื่องสำหรับ Tablet/iPad");
            } else if(context.activity.text.indexOf('activate') !== -1) {
                await context.sendActivity("เพียง Download แอพลิเคชั่นมาลงที่เครื่องแล้วกด Sign in ด้วย Copoerate email ค่ะ");
            } else if(context.activity.text.indexOf('ปัญหา') !== -1) {
                await context.sendActivity("อาการเป็นอย่างไรบ้างคะ");
            } else if(context.activity.text.indexOf('ไม่ติด') !== -1) {
                await context.sendActivity("ขอบคุณมากค่ะ เก็บข้อมูลเรียบร้อย เดี๋ยวจะมีเจ้าหน้าที่จากแผนก IT ติดต่อเข้าไปเพื่อช่วยเหลือนะคะ");
                await context.sendActivity("หากมีข้อสงสัยตรงไหน สามารถสอบถามเพิ่มเติมได้เลยนะคะ");
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
