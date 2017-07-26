const sign = require('./utils/signature');
const uuid = require('uuid/v1');
const request = require('request');
const host = 'http://dysmsapi.aliyuncs.com';

module.exports = {
  send: function (conf, callback) {
    const params = {
      AccessKeyId: conf.accessKeyId,
      Timestamp: new Date().toISOString(),
      Format: conf.format || 'JSON',
      SignatureMethod: 'HMAC-SHA1',
      SignatureVersion: '1.0',
      SignatureNonce: uuid(),
      OutId: uuid(),
      RegionId: 'cn-hangzhou',
      Version: '2017-05-25',
      Action: 'SendSms',

      PhoneNumbers: conf.recNum.join(','),
      SignName: conf.signName,
      TemplateCode: conf.templateCode,
      TemplateParam: JSON.stringify(conf.param)
    };
    const signature = sign.signature(params, conf.accessKeySecret);
    // console.log(`signature is ${signature}`);
    // console.log(`params is ${JSON.stringify(params)}`);

    let reqQuery = [`Signature=${signature}`];
    for (let i in params) {
      reqQuery.push(`${i}=${encodeURIComponent(params[i])}`);
    }
    reqQuery = reqQuery.join('&');
    const reqUrl = `${host}/?${reqQuery}`;

    request({
      uri: reqUrl,
      method: 'GET'
    }, (error, response, body) => {
      callback(error, body);
    })
  }
}