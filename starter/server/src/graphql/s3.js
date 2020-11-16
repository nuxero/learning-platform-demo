const jwt = require('jsonwebtoken');
const { s3 } = require('../services/aws');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED, NOT_AUTHENTICATED },
} = require('../util/constants');
const { accessTokenSecret } = require('../util/envs');

const presignDocument = async (_, { fileName, isPublic, token }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

module.exports = {
  presignDocument,
};
