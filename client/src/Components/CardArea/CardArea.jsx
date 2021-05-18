import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CharacterCard from '../CharacterCard/CharacterCards';

export default function CardArea(props) {
    const page = props.paginationState;

  const { error, loading, data } = useQuery(
    gql`
    query {  
      characters(page: ${page}) {
        info {
            count
            pages
            next
            prev
          }
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
    `
  );

  // loading message prior to loading api data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // wrapper component for class bassed card component
  return data.characters.results.map((data) => (
    <div key={data.id}>
      <CharacterCard
        props={data}
        selectCharacterHandler={props.selectCharacterHandler}
      />
    </div>
  ));
}
