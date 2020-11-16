const { v4: uuidv4 } = require('uuid');
const {
  createSession,
  initializeOpentok,
  generateToken,
} = require('../services/vonage');
const { videocalls } = require('../services/db');
const { vonageVideoApiKey: apiKey } = require('../util/envs');

const startSession = async (_, __, { req, prisma }, ___) => {
  try {
    initializeOpentok();

    const session = await createSession();
    const uuid = uuidv4();

    videocalls.push({
      uuid,
      sessionId: session.sessionId,
    });

    const token = session.generateToken({
      role: 'moderator',
      data: `role=moderator`,
    });

    return {
      uuid,
      token,
      session: session.sessionId,
      apiKey,
    };
  } catch (e) {
    console.error('An error ocurred when creating opentok session', e);
  }
};

const joinSession = async (_, { uuid }, __, ___) => {
  if (!uuid) {
    throw new Error(INTERNAL_ERROR);
  }

  const [videocall] = videocalls.filter(videocall => videocall.uuid === uuid);

  initializeOpentok();

  const token = generateToken(videocall.sessionId);

  return {
    uuid,
    token,
    session: videocall.sessionId,
    apiKey
  };
};

module.exports = {
  startSession,
  joinSession,
};
