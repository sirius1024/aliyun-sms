const SMSClient = require('./sdk');
const smsUpload = 1;


// 查询mns用户发来的短信
const receive = (conf) => {
    let smsClient = new SMSClient({
        accessKeyId: conf.accessKeyId,
        secretAccessKey: conf.secretAccessKey
    });
    return smsClient.receiveMsg(smsUpload, conf.queueName);
}

exports.receive = receive;
