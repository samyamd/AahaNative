import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import NewPage from "./components/NewPage";
import BottomNav from "./components/BottomNav";

const Stack = createStackNavigator();

const pos = {
  headerStyle: {height: 0},
  headerTitle: "",
  headerLeft: null
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={pos} />
        {/* <Stack.Screen name="Aahashop" component={NewPage} options={{ headerLeft: null }} /> */}
        <Stack.Screen name="Aahashop" component={NewPage} options={pos} />
      </Stack.Navigator>
      {/* <BottomNav style={{flex: .1}}/> */}
    </NavigationContainer>

    // <WebView source={{ uri: "https://aahashop.com/" }} />
  );
}

export default App;
