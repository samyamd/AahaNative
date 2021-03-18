import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { globalStyle } from "../globals";
import {decode} from 'html-entities';

export default function ItemCard({ product, navigation }) {
  const [result, setResult] = useState(true);
  const [loading, setLoading] = useState([]);

  if (product.featured_media != "") {
    useEffect(() => {
      fetch(
        "https://aahashop.com/wp-json/wp/v2/media/" + product.featured_media
      )
        .then((response) => response.json())
        .then((json) => setResult(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  }

  return (
    <View style={{flex: 1}}>
    {/* <View> */}
      <TouchableOpacity
        style={[styles.card, styles.centred]}
        // style={[styles.card, styles.centred, {alignSelf: "center"}]}
        onPress={() => {
          navigation.navigate("Aahashop", { uri: product.link });
        }}
      >
        <View style={[styles.cardHeader]}>
          {loading ? (
            <Text>Loading</Text>
          ) : (
            <Image
              style={{ height: 120, width: 120 }}
              source={{ uri: result.guid.rendered }}
              // source={{
              //   uri:
              //     "https://aahashop.com/wp-content/uploads/2018/04/01-221x221.png",
              // }}
            />
          )}
        </View>
        <View style={styles.cardBody}>
          <Text style={[globalStyle.h2, globalStyle.theme]}>
          {decode(product.title.rendered, {level: 'html5'})}

            </Text>
          <View style={globalStyle.flexRow}>
            <Text style={[globalStyle.h2, globalStyle.light,globalStyle.mr4, {textDecorationLine:"line-through"}]}>Rs. 3300</Text>
            <Text
              style={[
                globalStyle.h2,
                globalStyle.theme,globalStyle.ml4,
              ]}
            >
              Rs. 3000
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    borderBottomRightRadius: 99,
    borderColor: "red",
    margin: 10,
    padding: 15,
    // maxWidth: 400,
    // width: 400
  },
  cardHeader: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
  },
  centred: {
    alignItems: "center"
  }
});
