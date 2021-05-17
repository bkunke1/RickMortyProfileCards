import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../GraphQL/Queries';
import CharacterCard from '../CharacterCard/CharacterCards';

export default function CardArea(props) {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

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
