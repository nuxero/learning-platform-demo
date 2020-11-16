import { gql } from '@apollo/client';

export const ADD_STUDENT = gql`
  mutation SaveStudent(
    $phoneNumber: String!
    $firstName: String!
    $lastName: String!
  ) {
    saveStudent(
      phoneNumber: $phoneNumber
      firstName: $firstName
      lastName: $lastName
    ) {
      phoneNumber
      firstName
      lastName
    }
  }
`;
