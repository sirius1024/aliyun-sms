# aliyun-sms-sdk

阿里云短信服务Node.js的实现

## 安装
```sh
$ npm install aliyun-sms-sdk --save
```
阿里云官方文档：[短信服务文档][]

[短信服务文档]: https://help.aliyun.com/document_detail/56189.html?spm=5176.doc55288.6.562.CP9Iuj

## 使用方法

在项目中安装aliyun-sms-sdk package后，需要根据官方文档做一些配置


## send()
```js
const aliSms = require('aliyun-sms-sdk');
const confSend = {
    accessKeyId: 'Your accessKeyId',
    secretAccessKey: 'Your secretAccessKey',
    recNum: 'Send SMS to ....',
    signName: 'Sign name',
    templateCode: 'SMS template code (SMS_XXXXXX)',
    param: { "username": "Sirius" }
};

aliSms.send(confSend);  //发送短信
```


返回值：

```js
{   
    Message: 'OK',
    RequestId: '502FC867-40EB-4A9F-8561-3272FBF7C4CB',
    BizId: '109226971936^1112321971296',
    Code: 'OK' 
}
```

## receive()
```js

const aliSms = require('aliyun-sms-sdk');
const confReceive = {
    accessKeyId: 'Your accessKeyId',
    secretAccessKey: 'Your secretAccessKey',
    queueName: 'Alicom-Queue-xxxxxxxxxxxxx-'
};

aliSms.receive(confReceive);   //接收用户发来的短信（短信上行）
```



返回值：

```js
{
    receiveMsg: {
        "code": 200,
        "headers": {},
        "body": {
            "MessageId": "DD48C8069525249D-2-15DAC6DF8B7-300000001",
            "MessageBodyMD5": "B94416522AF45DA65D66A07BEEB396ED",
            "MessageBody": 'eyJjb250ZW50Ijoi5ZOI5ZOI5ZOI5ZOI5ZOIIiwic2VuZF90aW1lIjoiMjAxNzA4MDcxNTQ4MTIiLCJzcF9pZCI6bnVsbCwicGhvbmVfbnVtYmVyIjoiMTg1MTQyNDMwODgiLCJkZXN0X2NvZGUiOiIxMjQzMzM1Iiwic2VxdWVuY2VfaWQiOjQ4MjExODA5NX0=', //需要进行Base64解码Ï
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
```

作者修改了官方的SDK，因为官方SDK中并没有对已经消费的消息进行删除操作。

receiveMsg是消费一条消息，其中body.MessageBody需要进行Base64解码：

```js
const msgBody = new Buffer(result.body.MessageBody, 'base64').toString();
console.log(msgBody);
```

结果样例：
```js
{
    "content": "123456789",
    "send_time": "20170804164754",
    "sp_id": null,
    "phone_number": "13800138000",
    "dest_code": "1243335",
    "sequence_id": 481806640
}
```

## Test

```bash
#send short message
node test/send

#receive short message upload
node test/receive
```

## 补充说明

阿里云提供了Node.js版本的短信服务SDK，但是比较简陋。作者因公司业务需要，没有对本项目进行优化和架构（实在也是简单），如有意见、建议或bug，请直接提issue给我。

官方的SDK中已经实现了查询短信发送记录和短信发送状态回执的方法，我司项目暂时不需要这两个方法，项目完成后，我会把这两个方法补上，一定，一定。
