import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,  
  ActivityIndicator
} from "react-native";
import { globalStyle } from "../globals";
import Header from "./header";
import ItemCard from "./itemCard";
import Footer from "./Footer";
import Category from "./Category";
import NavDrawer from "./NavDrawer";
import ImageSlider from "./ImageSlider";

export default function Home({ navigation }) {
  var width = Dimensions.get("window").width;
  // const entities = Html5Entities();
  const [product, setProduct] = useState([]);
  const [drawer, setDrawer] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/product")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((json) => setCategory(json))
      .catch((error) => console.error(error));
  }, []);  

  // const renderAccordians = () => {
  //   const items = [];
  //   for (item of menu) {
  //       items.push(
  //           <Accordian 
  //               title = {item.title}
  //               data = {item.data}
  //           />
  //       );
  //   }
  //   return items;
  // };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header product={product} navigation={navigation} setDrawer={setDrawer} />
      {drawer ? (<NavDrawer drawer={drawer} setDrawer={setDrawer} category={category} />) : null}
      <FlatList
        style={{ flex: 0.8 }}
        ListHeaderComponent={
          <View>
            <ImageSlider />

            <Text
              style={[globalStyle.h1, globalStyle.textCenter, globalStyle.m35]}
            >
              Recent Products
            </Text>
          </View>
        }
        ListEmptyComponent={<ActivityIndicator size="small" color="#131A46" />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={width > 600 ? 2 : 1}
        data={product}
        renderItem={({ item }) => (
          <ItemCard
            product={item}
            navigation={navigation}
            setDrawer={setDrawer}
          />
        )}
        ListFooterComponent={
          <View>
            <View style={{ backgroundColor: "#ffffff"}}>
              <Text
                style={[
                  globalStyle.h1,
                  globalStyle.textCenter,
                  globalStyle.my5,
                ]}
              >
                Offered Categories
              </Text>
            </View>
            <Category product={product} navigation={navigation} category={category} setDrawer={setDrawer} />
            <Footer navigation={navigation} />
          </View>
        }
      />

      {/* <BottomNav style={{flex: .1}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  itemcontainer: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
  },
});
