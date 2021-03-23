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
const WIDTH = Math.round(SLIDER_WIDTH / 2.6);
const ITEM_HORIZONTAL_MARGIN = 15;
let ITEM_WIDTH;
if (SLIDER_WIDTH > 600) {
  ITEM_WIDTH = WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
}
else {
  ITEM_WIDTH = SLIDER_WIDTH - ITEM_HORIZONTAL_MARGIN;
}
console.log(ITEM_WIDTH);


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
        // ref={(c) => {
        //   _carousel = c;
        // }}
        data={product}
        renderItem={({ item, index }) => (
            <ItemCard
              product={item}
              navigation={navigation}
              setDrawer={setDrawer}
            />
          
          // <Text>{item.title}</Text>
        )}
        // sliderWidth={SLIDER_WIDTH}
        // itemWidth={400}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}      
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
