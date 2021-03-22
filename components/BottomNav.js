import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { globalStyle } from "../globals";
import { Ionicons } from "@expo/vector-icons";
import * as RootNavigation from '../RootNavigation.js';

export default function  BottomNav () {
  const [drawer, setDrawer] = useState(false);
  return (
    <View style={[globalStyle.flexRow, globalStyle.borderT]}>
      <TouchableOpacity
        style={[
          globalStyle.flexCenter,
          globalStyle.borderH,
          globalStyle.py1,
          { flex: 1 },
        ]}
        onPress={() => {
          RootNavigation.navigate("Home", {});
        }}
      >
        <Ionicons name="home" style={{ fontSize: 22 }} />
        <Text style={globalStyle.p}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          globalStyle.flexCenter,
          globalStyle.borderH,
          globalStyle.py1,
          { flex: 1 },
        ]}
        onPress={() => {
          // navigation.navigate("Aahashop", {
          //   uri: "https://aahashop.com/",
          // });
          console.log("clicked");
          RootNavigation.navigate("Aahashop", {uri: "https://aahashop.com/",});
        }}
      >
        <Ionicons name="grid" style={{ fontSize: 22 }} />
        <Text style={globalStyle.p}>Categories</Text>
      </TouchableOpacity>
      <View
        style={[
          globalStyle.flexCenter,
          globalStyle.borderH,
          globalStyle.py1,
          { flex: 1 },
        ]}
      >
        <Ionicons name="bookmark" style={{ fontSize: 22 }} />
        <Text style={globalStyle.p}>About Us</Text>
      </View>
      <View
        style={[
          globalStyle.flexCenter,
          globalStyle.borderH,
          globalStyle.py1,
          { flex: 1 },
        ]}
      >
        <Ionicons name="heart" style={{ fontSize: 22 }} />
        <Text style={globalStyle.p}>WishList</Text>
      </View>
      {/* <View style={{ flex: 2 }}>
        <Button title="d" />
      </View> */}
    </View>
  );
};
