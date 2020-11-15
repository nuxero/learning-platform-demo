const OpenTok = require('opentok');
const { vonageVideoApiKey : apiKey, vonageVideoApiSecret : apiSecret } = require('../../util/envs');

let opentok = null;
const opentokSessionArgs = {
  mediaMode: 'routed',
};

const initializeOpentok = () => {
  opentok = opentok ? opentok : new OpenTok(apiKey, apiSecret);
}

const createSession = () => {
  return new Promise((resolve, reject) => {
    opentok.createSession(opentokSessionArgs, (err, session) => {
      if (err) {
        reject(err);
      } else {
        resolve(session);
      }
    });
  });
};

const generateToken = (sessionId) => {
  return opentok.generateToken(sessionId);
}

module.exports = {
  initializeOpentok,
  createSession,
  generateToken
};
