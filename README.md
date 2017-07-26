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


```js
const aliSms = require('aliyun-sms-sdk');

let conf = {
  accessKeyId: '<Your accessKeyId>', //阿里云后台获取
  accessKeySecret: '<Your accessKeySecret>', // 阿里云后台获取
  recNum: ['接收号码1', '接收号码2', ...],
  signName: '短信签名，需要在阿里云后台申请，e.g. 【健康提醒】',
  templateCode: '短信模板代码，需要在阿里云后台申请， e.g. SMS_XXXXXX',
  param: { user: 'Sirius' }, //根据短信模板编写object替换模板参数
}

aliSms.send(conf, (err, body) => {
  console.error(err);
  console.log(body);
});
```

## 补充说明

阿里云暂时没有提供短信服务MNS部分的API，作者尝试使用ali-mns npm package去实现，奈何文档太少，又没有足够的时间去查看已有SDK的源码。所以只实现了发送短信的功能，接收用户上行短信的部分还是使用官方python的SDK。