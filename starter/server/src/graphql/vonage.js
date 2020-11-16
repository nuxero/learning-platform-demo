const jwt = require('jsonwebtoken');
const { sendSms, verifyRequest, checkCode } = require('../services/vonage');
const { students } = require('../services/db');
const { accessTokenSecret } = require('../util/envs');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const inviteStudent = async (_, { phoneNumber, url }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

const verifyRequestResolver = async (_, { number }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

const checkCodeResolver = async (_, { requestId, code, number }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

module.exports = {
  inviteStudent,
  verifyRequestResolver,
  checkCodeResolver,
};
