import { gql } from '@apollo/client';

export const GET_HOMEWORKS = gql`
  query GetHomeworks {
    homeworks {
      id
      uuid
      description
    }
  }
`;

export const GET_HOMEWORK = gql`
  query GetHomework($uuid: String) {
    homework(uuid: $uuid) {
      id
      uuid
      description
    }
  }
`;

export const GET_HOMEWORK_FILES = gql`
  query GetHomeworkFiles {
    homeworkFiles {
      id
      url
      student {
        id
        phoneNumber
        firstName
        lastName
      }
      homework {
        id
        uuid
        description
      }
    }
  }
`;
