const jwt = require('jsonwebtoken');
const { s3 } = require('../services/aws');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED, NOT_AUTHENTICATED },
} = require('../util/constants');
const { accessTokenSecret } = require('../util/envs');

const presignDocument = async (_, { fileName, isPublic, token }, __, ___) => {
  if (!token) {
    throw new Error(NOT_AUTHENTICATED);
  }

  try {
    const data = jwt.verify(token, accessTokenSecret);
    console.info(
      `Student with id ${data.id} is presigning filename ${fileName}`
    );
    const uploadData = await s3.presignedPostDocument(fileName, isPublic);

    return JSON.stringify(uploadData);
  } catch (err) {
    console.log('An error ocurred when presigning document:', err);
    throw new Error(INTERNAL_ERROR);
  }
};

module.exports = {
  presignDocument,
};
