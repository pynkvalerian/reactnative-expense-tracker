import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, AddNewScreen, ProfileScreen } from '../screens';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Add"
          component={AddNewScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              <FontAwesome5 name={'plus'} solid style={styles.icon} />
          }} />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              <FontAwesome5 name={'home'} solid style={styles.icon} />
          }} />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              <FontAwesome5 name={'user'} solid style={styles.icon} />
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  icon: {
    fontSize: 18
  }
})
