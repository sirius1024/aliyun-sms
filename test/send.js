let sms = require('../lib/send');
sms.send({
    accessKeyId: 'Your accessKeyId',
    secretAccessKey: 'Your secretAccessKey',
    recNum: 'Send SMS to ....',
    signName: 'Sign name',
    templateCode: 'SMS template code (SMS_XXXXXX)',
    param: { "username": "Sirius" }
}).then(res => {
    console.log(res);
})

/*
{   
    Message: 'OK',
    RequestId: '502FC867-40EB-4A9F-8561-3272FBF7C4CB',
    BizId: '109226971936^1112321971296',
    Code: 'OK' 
}
*/