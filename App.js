import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Logowanie' }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: 'Lista Produktów' }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreen}
          options={{ title: 'Szczegóły Produktu' }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Twój Koszyk' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
