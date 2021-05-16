import Footer from './Components/Footer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  gql
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import CharacterCards from './Components/CharacterCards';
import TextCard from './Components/textCard';
import styles from './app.module.css'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphq; error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
]);

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.header}>
        <h1>Rick and Morty Character Stats</h1>
      </div>
      {/* <div className={styles.cardLayout}>
        <CharacterCards />
      </div> */}
      <div className={styles.cardLayout}>
        <TextCard />
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
