import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, EditScreen } from '../screens';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;
