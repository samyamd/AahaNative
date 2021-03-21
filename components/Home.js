import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { globalStyle } from "../globals";
import Header from "./header";
import ItemCard from "./itemCard";
import Footer from "./Footer";
// import ImageSlider from "./ImageSlider";
// import BottomNav from "./BottomNav";
import { Ionicons } from "@expo/vector-icons";
import Category from "./Category";

export default function Home({ navigation }) {
  var width = Dimensions.get("window").width;
  // const entities = Html5Entities();
  const [product, setProduct] = useState([]);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/product")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header product={product} navigation={navigation} style={{flex: .1}} setDrawer={setDrawer} />
      {drawer ? (<View style={globalStyle.drawer}>
      <Text style={globalStyle.h1}>Samyam</Text>
      <View style={globalStyle.flexRow, globalStyle.my5}>
        <Ionicons name="menu-outline"
          style={[globalStyle.font100, globalStyle.p10, {flex:2}]}
          onPress={() => console.log("account")} />
        <Ionicons name="menu-outline"
          style={[globalStyle.font100, {flex:2}]}
          onPress={() => console.log("account")} />
        <Ionicons name="menu-outline"
          style={[globalStyle.font100, {flex:1}]}
          onPress={() => console.log("close")} />
      </View>
    </View>) : <View></View>
    }
      <FlatList
      style={{flex: .8}}
        ListHeaderComponent={
          <View style={{ backgroundColor: "#ffffff" }}>
            {/* <ImageSlider /> */}

            <Text
              style={[globalStyle.h1, globalStyle.textCenter, globalStyle.my5]}
            >
              Recent Products
            </Text>
          </View>
        }
        
        ListEmptyComponent={<Text>Loading</Text>}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={width > 600 ? 2 : 1}
        data={product}
        renderItem={({ item }) => (
          <ItemCard product={item} navigation={navigation} />
        )}
        ListFooterComponent={
          <View>
            <View style={{ backgroundColor: "#ffffff" }}>
          <Text style={[globalStyle.h1, globalStyle.textCenter, globalStyle.my5]}>Offered Categories</Text>
        </View>
            <Category navigation={navigation} />
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
