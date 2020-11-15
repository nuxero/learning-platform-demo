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
    const _homework = homeworks.push({
      uuid,
      description,
    });

    return _homework;
  } catch (err) {
    console.error('Error while trying to create homework', err);
    throw new Error(INTERNAL_ERROR);
  }
};

const getHomeworks = (_, __, ___, ____) => {
  return homeworks;
};

const getHomework = (_, { uuid }, __, ___) => {
  return homeworks.filter((homework) => homework.uuid === uuid);
};

const addHomeworkFile = async (_, { url, uuid, token }, __, ___) => {
  if (!token) {
    throw new Error(NOT_AUTHENTICATED);
  }

  try {
    const student = jwt.verify(token, accessTokenSecret);
    const homework = homworks.filter((homework) => homework.uuid === uuid);
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
