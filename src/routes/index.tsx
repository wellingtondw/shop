import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="ProductDetails" component={ProductDetails} />
  </App.Navigator>
);

export default AppRoutes;
