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

```

## 补充说明

阿里云暂时没有提供短信服务MNS部分的API，作者尝试使用ali-mns npm package去实现，奈何文档太少，又没有足够的时间去查看已有SDK的源码。所以只实现了发送短信的功能，接收用户上行短信的部分还是使用官方python的SDK。