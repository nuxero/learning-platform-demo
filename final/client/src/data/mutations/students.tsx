import { gql } from '@apollo/client';

export const ADD_STUDENT = gql`
  mutation SaveStudent(
    $id: Int
    $phoneNumber: String!
    $firstName: String!
    $lastName: String!
  ) {
    saveStudent(
      id: $id
      phoneNumber: $phoneNumber
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      phoneNumber
      firstName
      lastName
    }
  }
`;
