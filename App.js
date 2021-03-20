// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import NewPage from "./components/NewPage";
import { Image, Text } from "react-native";
// import WebView from 'react-native-webview';

const Stack = createStackNavigator();

const pos = {
  headerTitleAlign: "center",
  headerTitle: (props) => ( // App Logo
    <Image
      style={{ width: 100, height: 50 }}
      source={require('./assets/logo.png')}
      resizeMode='contain'
    />)

}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={pos} />
        <Stack.Screen name="Aahashop" component={NewPage} options={{ headerLeft: null }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <WebView source={{ uri: "https://aahashop.com/" }} />
  );
}

export default App;
