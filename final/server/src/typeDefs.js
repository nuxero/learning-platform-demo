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
    id: ID!
    phoneNumber: String!
    firstName: String!
    lastName: String!
  }

  type Homework {
    id: ID!
    uuid: String!
    description: String!
  }

  type HomeworkFile {
    id: ID!
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

  type AddHomeworkFileResponse {
    url: String
    homework: Homework
    student: Student
  }

  type Query {
    homeworks: [Homework]
    homework(uuid: String): Homework
    homeworkFiles(uuid: String): [HomeworkFile]
    homeworkFile(id: Int): HomeworkFile 
    sessionDetails(uuid: String) : SessionResponse
    students: [Student]
    student(phoneNumber: String): Student
  }

  type Mutation {
    addHomeworkFile(url: String!, uuid: String!, token: String!): AddHomeworkFileResponse
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