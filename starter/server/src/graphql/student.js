const { students } = require('../services/db');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const saveStudent = async (_, student, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

const getStudents = (_, __, ___, ____) => {
  throw new Error(NOT_IMPLEMENTED);
};

module.exports = {
  saveStudent,
  getStudents
};
