const { getVonageClient } = require('./vonage');
const { vonageSenderNumber } = require('../../util/envs');

const sendSms = (to, text) => {
  return new Promise((resolve, reject) => {
    const vonageClient = getVonageClient();
    const from = vonageSenderNumber;

    vonageClient.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        reject(false);
      } else {
        if (responseData.messages[0]['status'] === '0') {
          console.log('Message sent successfully.');
          resolve(true)
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]['error-text']}`
          );
          reject(false);
        }
      }
    });
  });
};

module.exports = {
  sendSms
}
