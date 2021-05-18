import Footer from './Components/Footer/Footer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import styles from './app.module.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import CardArea from './Components/CardArea/CardArea';

// setting up client to use graphql with Apollo
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [selectedCardState, setSelectedCardState] = useState('Select a Character!');
  const [paginationState, setPaginationState] = useState(1);

  

  // state management fn passed as props down to class based card components to lift state of selected character card
  const selectCharacterHandler = (selectedCharacter) => {
    if (selectedCharacter) {
      console.log(selectedCharacter);
      setSelectedCardState(selectedCharacter);
    }
  };

  return (
    <ApolloProvider client={client}>
      <Container>
        <Row>
          <div className={styles.header}>
            <h1 id="top">Rick and Morty Profiles</h1>
            <h3>{selectedCardState}</h3>
          </div>
        </Row>
        <Row>
          <div className={styles.cardLayout}>
            <CardArea selectCharacterHandler={selectCharacterHandler} paginationState={paginationState}/>
          </div>
        </Row>
        <Row>
          <Footer setPaginationState={setPaginationState} paginationState={paginationState}/>
        </Row>
      </Container>
    </ApolloProvider>
  );
}

export default App;
