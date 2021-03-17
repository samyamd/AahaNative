// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import NewPage from './components/NewPage';
// import WebView from 'react-native-webview';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aahashop" component={NewPage} />
      </Stack.Navigator>
    </NavigationContainer>

    // <WebView source={{ uri: "https://aahashop.com/" }} />
  );
}

export default App;