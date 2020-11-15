const { getVonageClient } = require('./vonage');

const verifyRequest = (number) => {
  return new Promise((resolve, reject) => {
    const vonageClient = getVonageClient();
    const brand = 'Vonage APIs';

    vonageClient.verify.request({number, brand}, (err, result) => {
      if (err) {
        reject(false);
      } else {
        resolve(result.request_id);
      }
    });
  });
};

const checkCode = (code, request_id) => {
  return new Promise((resolve, reject) => {
    const vonageClient = getVonageClient();
    
    vonageClient.verify.check({
      request_id,
      code
    }, (err, result) => {
      if (err) {
        reject(false);
      } else {
        if (result.status === '0') {
          resolve(true);
        } else {
          reject(false);
        }
      }
    });
  })
}

module.exports = {
  verifyRequest,
  checkCode
}
