import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { globalStyle } from "../globals";
import Header from "./header";
import ItemCard from "./itemCard";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import NavigationDrawer from "./NavigationDrawer";



export default function Home({ navigation }) {
  var width = Dimensions.get("window").width;
  // const entities = Html5Entities();
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(
    () => {
      fetch("https://aahashop.com/wp-json/wp/v2/product")
        .then((response) => response.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    },[]
  );

  return (
      <View style={{paddingBottom: 130}}>
        <Header product={product} navigation={navigation} />
        {/* <ScrollView style={[styles.itemcontainer, {overflow: "scroll"}]} horizontal={true}>
          {isLoading ? (
            <Text style={globalStyle.h1}>Loading...</Text>
          ) : (
            product.map((item) => <ItemCard product={item} handlePressButtonAsync={handlePressButtonAsync}/>)
          )}
        </ScrollView> */}
        <FlatList
                ListHeaderComponent={
                  <View style={{ backgroundColor: "#ffffff" }}>
                    <ImageSlider />
                    
                    <Text style={[globalStyle.h1, globalStyle.textCenter, globalStyle.my5]}>Recent Products</Text>
                  </View>
                }
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={(width > 600) ? 2 : 1}
          data={product}
          renderItem={({ item }) =>
            isLoading ? (
              <Text style={globalStyle.h1}>Loading...</Text>
            ) : (
              <ItemCard product={item} navigation={navigation} />
            )
          }

          ListFooterComponent={
            <Footer navigation={navigation} />
          }
        />

        <NavigationDrawer />

        

        {/* <Team
          team={team}
          submitHandler={submitHandler}
          pressHandler={pressHandler}
        /> */}
        {/* <Category /> */}

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
