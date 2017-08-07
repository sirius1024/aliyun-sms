const SMSClient = require('./sdk');
const send = (conf) => {
    let smsClient = new SMSClient({
        accessKeyId: conf.accessKeyId,
        secretAccessKey: conf.secretAccessKey
    });
    return smsClient.sendSMS({
        PhoneNumbers: conf.recNum,
        SignName: conf.signName,
        TemplateCode: conf.templateCode,
        TemplateParam: conf.param ? JSON.stringify(conf.param) : undefined
    })
}

exports.send = send;