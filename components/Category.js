import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../globals";
import {decode} from 'html-entities';

export default function Category({navigation}) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((json) => setCategory(json))
      .catch((error) => console.error(error))
  }, []);

  return (
    <FlatList
      ListEmptyComponent={<Text>Loading</Text>}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      data={category}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[globalStyle.p10]}
          // style={[styles.card, styles.centred, {alignSelf: "center"}]}
          onPress={() => {
            navigation.navigate("Aahashop", {
              uri: "https://aahashop.com/product-category/" + item.slug,
            });
          }}
        >
            <Text style={[globalStyle.h2, globalStyle.theme]}>
              {decode(item.name, { level: "html5" })}
            </Text>
          {/* <View>
            <View style={globalStyle.flexRow}>
              <Text
                style={[
                  globalStyle.h2,
                  globalStyle.light,
                  globalStyle.mr4,
                  { textDecorationLine: "line-through" },
                ]}
              >
                Rs. 3300
              </Text>
              <Text
                style={[globalStyle.h2, globalStyle.theme, globalStyle.ml4]}
              >
                Rs. 3000
              </Text>
            </View>
          </View> */}
        </TouchableOpacity>
      )}
    />
  );
}
