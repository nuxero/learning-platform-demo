const { students } = require('../services/db');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const saveStudent = async (_, student, __, ___) => {
  try {
    students.push(student);

    return student;
  } catch (err) {
    console.error('Error while trying to create student', err);
    throw new Error(INTERNAL_ERROR);
  }
};

const getStudents = (_, __, ___, ____) => {
  return students;
};

module.exports = {
  saveStudent,
  getStudents
};
