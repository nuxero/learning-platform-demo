const { students } = require('../services/db');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const saveStudent = async (_, student, __, ___) => {
  try {
    const _student = students.push({
      phoneNumber: student.phoneNumber,
      firstName: student.firstName,
      lastName: student.lastName,
    });

    return _student;
  } catch (err) {
    console.error('Error while trying to create student', err);
    throw new Error(INTERNAL_ERROR);
  }
};

const getStudents = (_, __, ___, ____) => {
  return students;
};

const getStudent = (_, { phoneNumber }, __, ___) => {
  return students.filter(student => student.phoneNumber === phoneNumber);
};

module.exports = {
  saveStudent,
  getStudent,
  getStudents
};
