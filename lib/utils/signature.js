const crypto = require('crypto');

module.exports = {
  signature: function (params, aliKeySecret) {
    const sortedKey = Object.keys(params).sort();
    let kv = [];
    sortedKey.forEach(k => { kv.push(`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`); });
    let query = kv.join('&');
    query = 'GET&%2F&' + encodeURIComponent(query.replace(/\+/g, '%20').replace(/\*/g, '%2A').replace(/%7E/g, '~'));
    const sign = crypto.createHmac('sha1', `${aliKeySecret}&`).update(query).digest('base64');
    return encodeURIComponent(sign);
  }
}