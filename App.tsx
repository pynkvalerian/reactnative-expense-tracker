import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomTab from './src/navigations/BottomTab';
import store from './src/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <BottomTab />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
