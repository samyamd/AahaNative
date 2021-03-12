import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyle } from "../globals";
import Header from "./header";
import Team from "./Teams";
import ItemCard from "./itemCard";

export default function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/product")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

      <View>
          <Text style={{backgroundColor: "#eee", textAlign: "center", paddingVertical: 20}}>Top Categories</Text>
          
        <Team team={team} submitHandler={submitHandler} pressHandler={pressHandler}/>
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