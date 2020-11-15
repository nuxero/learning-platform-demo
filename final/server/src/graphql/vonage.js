const jwt = require('jsonwebtoken');
const { sendSms, verifyRequest, checkCode } = require('../services/vonage');
const { students } = require('../services/db');
const { accessTokenSecret } = require('../util/envs');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const inviteStudent = async (_, { phoneNumber, url }, __, ___) => {
  try {
    const message = `Hello, the class has just started. Join us at ${url}`;
    const result = await sendSms(phoneNumber, message);

    return {
      result,
      message: 'message was sent',
    };
  } catch (err) {
    console.error(err);
    return {
      result: false,
      message: 'Could not send the message',
    };
  }
};

const verifyRequestResolver = async (_, { number }, __, ___) => {
  try {
    const requestId = await verifyRequest(number);
    return {
      requestId,
    };
  } catch (err) {
    console.error(err);
    throw new Error(INTERNAL_ERROR);
  }
};

const checkCodeResolver = async (_, { requestId, code, number }, __, ___) => {
  try {
    const result = await checkCode(code, requestId);
    if (result) {
      const student = students.filter(
        (student) => student.phoneNumber === number
      );

      const token = jwt.sign(
        {
          id: student.phoneNumber,
        },
        accessTokenSecret,
        {
          expiresIn: '15min',
        }
      );

      return {
        token,
      };
    } else {
      return {
        token: null,
      };
    }
  } catch (err) {
    console.error('An error ocurred when trying to check code', err);
    return {
      token: null,
    };
  }
};

module.exports = {
  inviteStudent,
  verifyRequestResolver,
  checkCodeResolver,
};
