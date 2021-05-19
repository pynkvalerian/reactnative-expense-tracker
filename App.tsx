import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomTab from './src/navigations/BottomTab';
import store from './src/store';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

const App = () => {
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme(platform)}>
        <SafeAreaView style={{flex: 1}}>
          <BottomTab />
        </SafeAreaView>
      </StyleProvider>
    </Provider>
  );
};

export default App;
