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
        .finally(()=>setLoading(false))
    }, []);
  }

  return (
    <View style={[styles.card,styles.centred]}>
      <View style={[styles.cardHeader]}>
        {loading ? <Text>Loading</Text> :
        <Image
          style={{ height: 260, width: 260 }}
          source={{ uri: result.guid.rendered }}
          // source={{
          //   uri:
          //     "https://aahashop.com/wp-content/uploads/2018/04/01-221x221.png",
          // }}
        />
      }
      </View>
      <View style={styles.cardBody}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Aahashop", { uri: product.link });
        }}
      >
        <Text style={[globalStyle.h2]}>{product.title.rendered}</Text>
        <Text style={[globalStyle.h2, globalStyle.theme, {color: "blue",textAlign: "center"}]}>Rs. 3000</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eee",
    marginTop: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: 'center'
  },
  cardHeader: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
  },
  
});
