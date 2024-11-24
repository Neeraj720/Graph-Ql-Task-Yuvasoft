import { gql } from "@apollo/client";

export const userLogin = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

// get user list

export const getUser = gql`
query Users($page: String!, $size: String!) {
  users(page: $page, size: $size) {
    data {
      email
      id
      name
    }
    totalRecords
  }
}
`;

export const getSingleUser = gql`
query User($userId: String!) {
  user(id: $userId) {
    email
    id
    name
  }
}
`
