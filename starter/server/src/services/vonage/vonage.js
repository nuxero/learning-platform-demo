const Vonage = require('@vonage/server-sdk');
const { vonageApiKey : apiKey, vonageApiSecret : apiSecret } = require('../../util/envs');

let instance = null;

const getVonageClient = () => {
  if (!instance) {
    instance = new Vonage({
      apiKey,
      apiSecret
    });
  }

  return instance
}

module.exports = {
  getVonageClient
}