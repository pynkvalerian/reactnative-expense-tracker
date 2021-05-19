import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, EditScreen } from '../screens';

export type HomeNavigatorType = {
  Home: undefined;
  Edit: { id: string };
};

const Stack = createStackNavigator<HomeNavigatorType>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;
