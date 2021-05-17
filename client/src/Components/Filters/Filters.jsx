import React from 'react';
import styles from './Filters.module.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Filters() {
  const [statusState, setStatusState] = useState('All');
  const [genderState, setGenderState] = useState('All');
  const [speciesState, setSpeciesState] = useState('All');
  const [typeState, setTypeState] = useState('All');

  const statusStateHandler = (event) => {
    const btn = event.target.firstChild.data;
    if (btn === 'All') {
      setStatusState('All');
    } else if (btn === 'Alive') {
      setStatusState('Alive');
    } else if (btn === 'Dead') {
      setStatusState('Dead');
    }
  };

  const genderStateHandler = (event) => {
    const btn = event.target.firstChild.data;
    if (btn === 'All') {
      setGenderState('All');
    } else if (btn === 'Male') {
      setGenderState('Male');
    } else if (btn === 'Female') {
      setGenderState('Female');
    }
  };

  const speciesStateHandler = (event) => {
    const btn = event.target.firstChild.data;
    if (btn === 'All') {
      setSpeciesState('All');
    } else if (btn === 'Human') {
      setSpeciesState('Human');
    } else {
      setSpeciesState('Alien');
    }
  };

  const typeStateHandler = (event) => {
    const btn = event.target.firstChild.data;
    if (btn === 'All') {
      setTypeState('All');
    } else if (btn === 'N/A') {
      setTypeState('N/A');
    } else {
      setTypeState('Other');
    }
  };

  const statusSelectionAll =
    statusState === 'All' ? styles.invalid : styles.formControl;

  return (
    <div>
      <ul>
        <li>
          Status
          <button className={styles.active} onClick={statusStateHandler}>
            All
          </button>
          <button onClick={statusStateHandler}>Alive</button>
          <button onClick={statusStateHandler}>Dead</button> {statusState}
        </li>
        <li>
          Gender{' '}
          <button className={styles.active} onClick={genderStateHandler}>
            All
          </button>
          <button onClick={genderStateHandler}>Male</button>
          <button onClick={genderStateHandler}>Female</button> {genderState}
        </li>
        <li>
          Species{' '}
          <button className={styles.active} onClick={speciesStateHandler}>
            All
          </button>
          <button onClick={speciesStateHandler}>Human</button>
          <button onClick={speciesStateHandler}>Alien</button> {speciesState}
        </li>
        <li>
          Type{' '}
          <button className={styles.active} onClick={typeStateHandler}>
            All
          </button>
          <button onClick={typeStateHandler}>N/A</button>
          <button onClick={typeStateHandler}>Other</button> {typeState}
        </li>
        <li>
          Status: {statusState}, Gender: {genderState}, Species: {speciesState},
          Type: {typeState}
        </li>
      </ul>
    </div>
  );
}
