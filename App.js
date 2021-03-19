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
  headerStyle: {height: 160},
  headerTitleAlign: "center",
  headerTitle: (
    // <Text>Aaha</Text>
    // <Image
    //   source={require("./assets/logo.png")}
    //   style={{ height: 40, width: 100 }}
    //   resizeMode="cover"
    // />
    <Image
          style={{ height: 70, width:180 }}
          source={{
            uri:
              "https://aahashop.com/wp-content/uploads/2021/03/Aaha-shop-logo.png",
          }}
        />
  ),
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={pos} />
        <Stack.Screen name="Aahashop" component={NewPage} options={{headerTitle: ""}} />
      </Stack.Navigator>
    </NavigationContainer>

    // <WebView source={{ uri: "https://aahashop.com/" }} />
  );
}

export default App;
