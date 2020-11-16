const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { students, homeworks, homeworkFiles } = require('../services/db');
const {
  error_codes: { INTERNAL_ERROR, NOT_IMPLEMENTED },
} = require('../util/constants');

const { accessTokenSecret } = require('../util/envs');

const saveHomework = async (_, { description }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

const getHomeworks = (_, __, ___, ____) => {
  throw new Error(NOT_IMPLEMENTED);
};

const getHomework = (_, { uuid }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

const addHomeworkFile = async (_, { url, uuid, token }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

const getHomeworkFiles = (_, { uuid }, __, ___) => {
  throw new Error(NOT_IMPLEMENTED);
};

module.exports = {
  saveHomework,
  getHomework,
  getHomeworks,
  addHomeworkFile,
  getHomeworkFiles
};
