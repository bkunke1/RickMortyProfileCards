import React from 'react';
import styles from './Footer.module.css';

export default function Footer(props) {

  const prevPageHandler = () => {
    if (props.paginationState >= 2) {
      props.setPaginationState(props.paginationState - 1)
    }
  }

  const nextPageHandler = () => {
    if (props.paginationState <= 44) {
      props.setPaginationState(props.paginationState + 1);
    }
    
  }

  return (
    <div className={styles.footer}>
      <div className={styles.paginationBtns}>
        <button onClick={prevPageHandler}>Previous</button>
        <button onClick={nextPageHandler}>Next</button>
      </div>
      <h2 className={styles.paginationTxt}>Page {props.paginationState}</h2>

      <a href="#top">Back to top ^</a>
    </div>
  );
}
