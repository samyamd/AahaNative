import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
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
    <View style={{ flex: 1,backgroundColor: "#FFF" }}>
      <Header
        product={product}
        navigation={navigation}
        setDrawer={setDrawer}
      />
      {drawer ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={drawer}
          onRequestClose={() => {
            console.log("OUT");
            setDrawer(false);
          }}
        >
          <TouchableOpacity style={globalStyle.drawer} activeOpacity={1}>
            <View style={{ backgroundColor: "#FFF", padding: 10 }}>
              <TouchableOpacity style={{ alignItems: "flex-end" }}>
                <Ionicons
                  name="close-outline"
                  style={globalStyle.font100}
                  onPress={() => setDrawer(false)}
                />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <Text>Here you put the content of your modal.</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : null
      }
      <FlatList
        style={{ flex: .8 }}
        ListHeaderComponent={
          <View>
            {/* <ImageSlider /> */}

            <Text
              style={[globalStyle.h1, globalStyle.textCenter, globalStyle.m35]}
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
          <ItemCard
            product={item}
            navigation={navigation}
            setDrawer={setDrawer}
          />
        )}
        ListFooterComponent={
          <View>
            <View style={{ backgroundColor: "#ffffff" }}>
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
