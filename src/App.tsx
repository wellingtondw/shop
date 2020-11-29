import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';
import client from './services/api';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
