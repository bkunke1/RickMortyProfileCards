import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../GraphQL/Queries';
import styles from './CharCard.module.css';

export default function TextCard(props) {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return data.characters.results.map(
    ({ id, name, status, species, type, gender, origin, image, episode }) => (
      <div key={id}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <header className={styles.articleHeader}>
              <h2 className={styles.articleTitle}>{name}</h2>
            </header>

            <div className={styles.imageLayout}>
              <div className={styles.image}>
                <img src={image} alt={name} width="150" height="150" />
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.name}>Gender: {gender}</div>
              <div className={styles.name}>Status: {status}</div>
              <div className={styles.name}>Species: {species}</div>
              {type ? (
                <div className={styles.name}>Type: {type}</div>
              ) : (
                <div className={styles.name}>Type: N/A</div>
              )}
            </div>
            <div className={styles.name}>Origin: {origin.name}</div>

            <div className={styles.tags}>
              <div>
                <h3>Episodes: {episode.length}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
