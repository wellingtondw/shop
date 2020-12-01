import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import client from './services/api';
import theme from './styles/theme';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
