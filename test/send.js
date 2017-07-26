const sendSms = require('../lib/smsSend');

let conf = {
  accessKeyId: '<Your accessKeyId>',
  accessKeySecret: '<Your accessKeySecret>',
  format: 'json',
  recNum: ['<your phone number>'],
  signName: '<your sign string>',
  templateCode: '<your sms template code>',
  param: { user: 'Sirius' },
}

sendSms.send(conf, (err, body) => {
  console.log(err, body);
})