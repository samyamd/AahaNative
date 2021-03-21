import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { globalStyle } from "../globals";
import { decode } from "html-entities";

export default function Search({ navigation, products, setSearchData, setValue }) {
  return (
    <FlatList
      style={globalStyle.my2}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={globalStyle.box}
          onPress={() => {
            setSearchData("");
            setValue(false);
            navigation.navigate("Aahashop", { uri: item.link });
          }}
        >
          <Text style={[globalStyle.p, globalStyle.py1]}>
            {decode(item.title.rendered, { level: "html5" })}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
