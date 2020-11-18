const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type OperationResponse {
    result: Boolean
    message: String
  }

  type SessionResponse {
    uuid: String!
    token: String!
    session: String!
    apiKey: String!
  }

  type Student {
    phoneNumber: String!
    firstName: String!
    lastName: String!
  }

  type Homework {
    uuid: String!
    description: String!
  }

  type HomeworkFile {
    url: String!
    student: Student!
    homework: Homework!
  }

  type VerifyRequestResponse {
    requestId: String
  }

  type CheckCodeResponse {
    token: String
  }

  type Query {
    homeworks: [Homework]
    homework(uuid: String): Homework
    homeworkFiles(uuid: String): [HomeworkFile] 
    sessionDetails(uuid: String) : SessionResponse
    students: [Student]
  }

  type Mutation {
    addHomeworkFile(url: String!, uuid: String!, token: String!): HomeworkFile
    checkCode(requestId: String!, code: String!, number: String!): CheckCodeResponse
    inviteStudent(phoneNumber: String!, url: String!): OperationResponse
    presignDocument(fileName: String!, isPublic: Boolean, token: String!): String!
    saveHomework(id: Int, description: String!): Homework
    saveStudent(
      id: Int
      phoneNumber: String!
      firstName: String!
      lastName: String!
    ): Student
    startVideocallSession: SessionResponse
    verifyRequest(number: String!): VerifyRequestResponse
  }
`;

module.exports = typeDefs;
