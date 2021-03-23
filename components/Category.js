import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { globalStyle } from "../globals";
import { decode } from "html-entities";
import Carousel from "react-native-snap-carousel";
import ItemCard from "./itemCard";

const SLIDER_WIDTH = Dimensions.get("window").width;

export default function Category({ navigation, category, setDrawer, product }) {
  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 1,
      title: "Nature",
      img: "https://source.unsplash.com/1024x768/?nature",
    },
    {
      id: 2,
      title: "Water",
      img: "https://source.unsplash.com/1024x768/?water",
    },
    {
      id: 3,
      title: "Girl",
      img: "https://source.unsplash.com/1024x768/?girl",
    },
    {
      id: 4,
      title: "tree",
      img: "https://source.unsplash.com/1024x768/?tree",
    },
  ];

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <FlatList
        ListEmptyComponent={<ActivityIndicator size="small" color="#131A46" />}
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
      <Carousel
        layout={"tinder"}
        layoutCardOffset={20}
        ref={(c) => {
          _carousel = c;
        }}
        data={product}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <ItemCard
              product={item}
              navigation={navigation}
              setDrawer={setDrawer}
            />
          </View>
          // <Text>{item.title}</Text>
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={400}
        activeSlideOffset={20}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        // scrollInterpolator={scrollInterpolator}
        // slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
