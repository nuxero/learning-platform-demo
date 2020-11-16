const OpenTok = require('opentok');
const { vonageVideoApiKey : apiKey, vonageVideoApiSecret : apiSecret } = require('../../util/envs');

let opentok = null;
const opentokSessionArgs = {
  mediaMode: 'routed',
};

const initializeOpentok = () => {
  
}

const createSession = () => {
  
};

const generateToken = (sessionId) => {
  
}

module.exports = {
  initializeOpentok,
  createSession,
  generateToken
};
