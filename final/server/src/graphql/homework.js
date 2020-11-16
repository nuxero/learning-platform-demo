const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { students, homeworks, homeworkFiles } = require('../services/db');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const { accessTokenSecret } = require('../util/envs');

const saveHomework = async (_, { description }, __, ___) => {
  const uuid = uuidv4();

  try {
    const homework = {
      uuid,
      description
    }
    homeworks.push(homework);

    return homework;
  } catch (err) {
    console.error('Error while trying to create homework', err);
    throw new Error(INTERNAL_ERROR);
  }
};

const getHomeworks = (_, __, ___, ____) => {
  return homeworks;
};

const getHomework = (_, { uuid }, __, ___) => {
  const [homework] = homeworks.filter((homework) => homework.uuid === uuid);
  return homework;
};

const addHomeworkFile = async (_, { url, uuid, token }, __, ___) => {
  if (!token) {
    throw new Error(NOT_AUTHENTICATED);
  }

  try {
    const decodedToken = jwt.verify(token, accessTokenSecret);
    const [student] = students.filter((student) => student.phoneNumber === decodedToken.phoneNumber)
    const [homework] = homeworks.filter((homework) => homework.uuid === uuid);
    const homeworkFile = {
      url,
      student,
      homework,
    };
    homeworkFiles.push(homeworkFile);

    return homeworkFile;
  } catch (err) {
    console.log('An error ocurred when trying to save homework file', err);
    throw new Error(INTERNAL_ERROR);
  }
};

const getHomeworkFiles = (_, { uuid }, __, ___) => {
  return homeworkFiles.filter(homeworkFile => homeworkFile.homework.uuid === uuid);
};

module.exports = {
  saveHomework,
  getHomework,
  getHomeworks,
  addHomeworkFile,
  getHomeworkFiles
};
