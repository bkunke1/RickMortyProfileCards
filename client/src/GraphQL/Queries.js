import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        episode {
          id
          name
          air_date
          episode
        }
      }
    }
  }
`;
