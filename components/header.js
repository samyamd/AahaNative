import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";  
import { globalStyle } from "../globals";

export default function Header({ navigation }) {
  const [name, setName] = useState("Samyam");
  const clickMenu = () => {
    setName("Dabadi");
  };
  // const Drawer = createDrawerNavigator();
  return (
    <View style={[globalStyle.flexRow, globalStyle.flexBetween,styles.header]}>
          {/* <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Ionicons
        name="menu-outline"
        style={styles.font100}
        onPress={() => navigation.navigate(NavigationDrawer)}
      ></Ionicons>

        <Drawer.Screen name="Notifications" component={NavigationDrawer} />
      </Drawer.Navigator>
    </NavigationContainer> */}
      <Ionicons
        name="menu-outline"
        style={styles.font100}
        onPress={() => console.log("menu")}
      ></Ionicons>
      <Image
        style={{ height: 40, width: 100, color: "#00215c" }}
        source={{
          uri:
            "https://aahashop.com/wp-content/uploads/2021/03/Aaha-shop-logo.png",
        }}
      />

      <View style={styles.flex}>
        <Ionicons name="search-outline" style={[styles.font100, styles.mr3]}></Ionicons>
        <Ionicons name="cart-outline" style={styles.font100}></Ionicons>
      </View>
      {/* <Text style={styles.whiteText}>Hello World</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  whiteText: {
    color: "#FFF",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  font100: {
    fontSize: 30,
  },
  mr3: {
    marginRight: 3
  }
});
