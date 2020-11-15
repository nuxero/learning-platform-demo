import { gql } from '@apollo/client';

export const START_VIDEOCALL_SESSION = gql`
  mutation StartVideocallSession {
    startVideocallSession {
      uuid
      token
      session
      apiKey
    }
  }
`;

export const INVITE_STUDENT = gql`
  mutation InviteStudent($phoneNumber: String!, $url: String!) {
    inviteStudent(phoneNumber: $phoneNumber, url: $url) {
      result
      message
    }
  }
`;
