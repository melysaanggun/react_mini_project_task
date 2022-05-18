import { gql } from "@apollo/client";

export const GET_ADMIN = gql`
query MyQuery($_eq: String!) {
  admin_user(where: { email: { _eq: $_eq } }) {
    id
    email
    password
  }
}
`;