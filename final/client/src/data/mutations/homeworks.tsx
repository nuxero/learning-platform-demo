import { gql } from '@apollo/client';

export const ADD_HOMEWORK = gql`
  mutation SaveHomework($description: String!) {
    saveHomework(description: $description) {
      id
      uuid
      description
    }
  }
`;

export const VERIFY_REQUEST = gql`
  mutation VerifyRequest($number: String!) {
    verifyRequest(number: $number) {
      requestId
    }
  }
`;

export const CHECK_CODE = gql`
  mutation CheckCode($requestId: String!, $code: String!, $number: String!) {
    checkCode(requestId: $requestId, code: $code, number: $number) {
      token
    }
  }
`;

export const PRESIGN_HOMEWORK_FILE_UPLOAD = gql`
  mutation PresignDocument(
    $fileName: String!
    $isPublic: Boolean
    $token: String!
  ) {
    presignDocument(fileName: $fileName, isPublic: $isPublic, token: $token)
  }
`;

export const ADD_HOMEWORK_FILE = gql`
  mutation AddHomeworkFile($url: String!, $uuid: String!, $token: String!) {
    addHomeworkFile(url: $url, uuid: $uuid, token: $token) {
      url
      homework {
        id
        uuid
        description
      }
      student {
        id
        phoneNumber
        firstName
        lastName
      }
    }
  }
`;
