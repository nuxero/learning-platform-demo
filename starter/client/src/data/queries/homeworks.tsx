import { gql } from '@apollo/client';

export const GET_HOMEWORKS = gql`
  query GetHomeworks {
    homeworks {
      uuid
      description
    }
  }
`;

export const GET_HOMEWORK = gql`
  query GetHomework($uuid: String) {
    homework(uuid: $uuid) {
      uuid
      description
    }
  }
`;

export const GET_HOMEWORK_FILES = gql`
  query GetHomeworkFiles($uuid: String) {
    homeworkFiles(uuid: $uuid) {
      url
      student {
        phoneNumber
        firstName
        lastName
      }
      homework {
        uuid
        description
      }
    }
  }
`;
