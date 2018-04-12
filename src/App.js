import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import project files
import reducers from './reducers';
import { LoadingIndicator } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1, paddingTop: 15, backgroundColor: '#0e5516' }}>
        <StatusBar barStyle={'light-content'} />
        <LoadingIndicator size={'full-size'} />
      </View>
    </Provider>
  );
};

export default App;