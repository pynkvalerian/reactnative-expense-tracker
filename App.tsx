import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import BottomTab from './src/navigations/BottomTab';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomTab />
    </SafeAreaView>
  );
};

export default App;
