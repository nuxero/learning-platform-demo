const {
  student: { saveStudent, getStudents, getStudent },
  vonage: { inviteStudent, verifyRequestResolver, checkCodeResolver },
  homework: {
    getHomework,
    getHomeworks,
    saveHomework,
    addHomeworkFile,
    getHomeworkFiles
  },
  s3: { presignDocument },
  videoApi: { joinSession, startSession },
} = require('./graphql');

const resolvers = {
  Query: {
    sessionDetails: joinSession,
    student: getStudent,
    students: getStudents,
    homework: getHomework,
    homeworks: getHomeworks,
    homeworkFiles: getHomeworkFiles
  },
  Mutation: {
    inviteStudent,
    saveHomework,
    saveStudent,
    presignDocument,
    startVideocallSession: startSession,
    verifyRequest: verifyRequestResolver,
    checkCode: checkCodeResolver,
    addHomeworkFile,
  },
};

module.exports = resolvers;
