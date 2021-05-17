import Footer from './Components/Footer/Footer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  gql,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import CharacterCards from './Components/CharacterCard/CharacterCards';
import CharCard from './Components/CharCard/CharCard';
import Filters from './Components/Filters/Filters';
import styles from './app.module.css';
import React, { useState } from 'react';
// Bootstrap Components
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import CardArea from './Components/CardArea/CardArea';

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphq; error ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
// ]);

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [selectedCardState, setSelectedCardState] = useState('Select a Character!');

  const selectCharacterHandler = (selectedCharacter) => {
    if (selectedCharacter) {
      console.log(selectedCharacter);
      setSelectedCardState(selectedCharacter)
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
        {/* <Row>
          <div className={styles.sortAndFilterSection}>
            <p>Filters</p>
            <Filters />
          </div>
        </Row> */}
        {/* original cards */}
        {/* <Row>
          <div className={styles.cardLayout}>
            <CharCard selectCharacterHandler={selectCharacterHandler} />
          </div>
        </Row> */}
        <Row>
        <div className={styles.cardLayout}>
            <CardArea selectCharacterHandler={selectCharacterHandler}/>
          </div>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </ApolloProvider>
  );
}

export default App;
