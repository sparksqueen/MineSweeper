import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/Onboarding';
import Minesweeper from '../screens/MineSweeper';

const Stack = createStackNavigator();

const AppNavigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Minesweeper" component={Minesweeper} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
export default AppNavigation;
