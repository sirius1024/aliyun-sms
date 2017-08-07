let sms = require('../lib/receive');
sms.receive({
    accessKeyId: 'Your accessKeyId',
    secretAccessKey: 'Your secretAccessKey',
    queueName: 'Alicom-Queue-xxxxxxxxxxxxx-'
}).then(console.log, console.error);


/*
{
    receiveMsg: {
        "code": 200,
        "headers": {},
        "body": {
            "MessageId": "DD48C8069525249D-2-15DAC6DF8B7-300000001",
            "MessageBodyMD5": "B94416522AF45DA65D66A07BEEB396ED",
            "MessageBody": "
                {
                    "content": "123456789",
                    "send_time": "20170804164754",
                    "sp_id": null,
                    "phone_number": "13800138000",
                    "dest_code": "1243335",
                    "sequence_id": 481806640
                }
            ",
            "ReceiptHandle": "1-MTI4ODQ5MDE4ODktMTUwMjA4NzUwMi0yLTg=",
            "EnqueueTime": "1501836474551",
            "FirstDequeueTime": "1501836581811",
            "NextVisibleTime": "1502087502000",
            "DequeueCount": "3",
            "Priority": "8"
        }
    },
    deleteMsg: {
        code: 204,
        headers: {
            
        },
        body: undefined
    }
}
*/