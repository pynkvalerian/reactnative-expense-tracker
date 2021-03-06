import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddNewScreen, ProfileScreen } from '../screens';
import HomeNavigator from './HomeNavigator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#1FB9BA',
          inactiveTintColor: 'gray',
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) =>
              <FontAwesome5
                name={'home'}
                solid
                style={styles.icon}
                color={focused ? '#1FB9BA' : 'gray'} />
          }} />
        <Tab.Screen
          name="Add"
          component={AddNewScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              <FontAwesome5
                name={'plus'}
                solid
                style={styles.icon}
                color={focused ? '#1FB9BA' : 'gray'} />
          }} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              <FontAwesome5
                name={'user'}
                solid
                style={styles.icon}
                color={focused ? '#1FB9BA' : 'gray'} />
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
  },
  active: {
    color: '#1FB9BA'
  }
})
