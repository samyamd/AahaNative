import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList
 } from "react-native";
import { globalStyle } from "../globals";

export default function Search({ navigation, products }) {
  return (
    <View>
      <FlatList
            style={globalStyle.my2}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={({ item }) => (
              <TouchableOpacity
              style={globalStyle.box}
                onPress={() => {
                  navigation.navigate("Aahashop", { uri: item.link });
                }}
              >
                <Text style={[globalStyle.p, globalStyle.py1]}>
                  {item.title.rendered}
                </Text>
              </TouchableOpacity>
            )}
          />
    </View>
  );
}
