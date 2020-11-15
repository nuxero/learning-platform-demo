import { createHttpLink } from '@apollo/client';

export const link = createHttpLink({
  uri: process.env.REACT_APP_API,
  credentials: 'same-origin',
});