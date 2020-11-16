import { gql } from '@apollo/client';

export const GET_START_CALL_SETTINGS = gql`
  query getCallSettings($uuid: String!) {
    sessionDetails(uuid: $uuid) { 
      uuid
      session  
      token  
      apiKey
    }
  }
`;