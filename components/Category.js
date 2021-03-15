import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globalStyle } from "../globals";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

      <View>
          <Text style={globalStyle.h1}>Top Categories</Text>
          {loading ? <Text>Loading</Text> : (
            <Image />
            ) }
        
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