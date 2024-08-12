import gql from 'graphql-tag';

export const createUserMutation = gql`
  mutation {
    createUser(
      createUserData: {
        username: "bigbr41n"
        displayName: "hollo"
        email: "bigbr41n@gmail.com"
      }
    ) {
      id
      username
      email
    }
  }
`;

export const getUsersQuery = gql`
  {
    getAllUsers {
      id
      username
    }
  }
`;
