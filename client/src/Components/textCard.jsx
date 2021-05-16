import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../GraphQL/Queries';
import styles from './textCard.module.css';

export default function TextCard() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  //   useEffect(() => {
  //     console.log('chars', data)
  //   }, [data]);

  return data.characters.results.map(({ name, species, gender, image, type }) => (
    <div key={name}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <header className={styles.articleHeader}>
            <div>
              <div className={styles.categoryTitle}>
                Article
                <span className={styles.date}>Jan 19, 2020</span>
              </div>
            </div>
            <h2 className={styles.articleTitle}>Name: {name}</h2>
          </header>
          <div className={styles.author}>
            <div className={styles.profile}></div>
            <div className={styles.info}>
              <div className={styles.caption}>
                <img src={image} alt="" width="200" height="200" />
              </div>
              <div className={styles.name}>gender: {gender}</div>
            </div>
          </div>
          <div className={styles.tags}>
            <div>JavaScript</div>
            <div>HTML</div>
          </div>
        </div>
      </div>
    </div>
  ));
}

