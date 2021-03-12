import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as WebBrowser from 'expo-web-browser';

export default function ItemCard({ product }) {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(product.link);
    setResult(result);
  };

  return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            style={{ height: 300, width: 300 }}
            // source={{
            //   uri: product.title.rendered,
            // }}
            source={{
              uri: "https://aahashop.com/wp-content/uploads/2018/04/01-221x221.png",
            }}
          />
        </View>

        <View style={styles.cardBody}>
          <Text onPress={_handlePressButtonAsync}>{product.title.rendered}</Text>
          <Text>{product.price}</Text>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    marginHorizontal: 10,
    padding: 10
  },
  cardHeader: {
    marginBottom: 10,
    textAlign: "center",
    marginHorizontal: "auto",
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
