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

export default function ItemCard({ product }) {
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
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {loading ? <Text>Loading</Text> :
        <Image
          style={{ height: 300, width: 300 }}
          source={{ uri: result.guid.rendered }}
          // source={{
          //   uri:
          //     "https://aahashop.com/wp-content/uploads/2018/04/01-221x221.png",
          // }}
        />
      }
      </View>
      <TouchableOpacity
        style={styles.cardBody}
        onPress={() => {
          navigation.navigate("Aahashop", { uri: product.link });
        }}
      >
        <Text style={globalStyle.h4}>{product.title.rendered}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eee",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
  },
  cardHeader: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
