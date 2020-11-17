const { v4: uuidv4 } = require('uuid');
const {
  createSession,
  initializeOpentok,
  generateToken,
} = require('../services/vonage');
const { videocalls } = require('../services/db');
const { vonageVideoApiKey: apiKey } = require('../util/envs');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const startSession = async (_, __, ___, ____) => {
  throw new Error(NOT_IMPLEMENTED);
};

const joinSession = async (_, { uuid }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

module.exports = {
  startSession,
  joinSession,
};
