import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_CHARACTERS } from '../GraphQL/Queries';
import styles from './CharacterCard.module.css'

export default function GetCharacters() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

//   useEffect(() => {
//     console.log('chars', data)
//   }, [data]);

  return data.characters.results.map(({ name, species, gender, image, type }) => (
    <div key={name} className={styles.card}>
        <img src={image} alt="" width="200" height="200"/>
        <h1>
            Name: {name}
        </h1>
      <p>
        species: {species}
      </p>
      <p>
        gender: {gender}
      </p>
      <p>
        type: {type}
      </p>
    </div>
  ));
}
