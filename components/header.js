import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, FlatList
} from "react-native";
import { globalStyle } from "../globals";
import {decode} from 'html-entities';

export default function Header({ navigation, product }) {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(false);
  const [searchData, setSearchData] = useState("");
  const searchShow = () => {
    if (searchData != "") {
      // console.log(searchData);
      setValue(true)
    } else {
      setValue(false)
    }
  };

  var filterproducts = product.filter((products) => {
    return products.title.rendered
      .toUpperCase()
      .includes(searchData.toUpperCase());
  });

  return (

    <View>
      <View style={[globalStyle.flexRow, globalStyle.p10]}>
        <TextInput
          onChangeText={(text) => setSearchData(text)}
          onKeyPress={searchShow}
          value={searchData}
          placeholder="Find your product"
          style={
            (globalStyle.py10, globalStyle.border, { height: 40, flex: 5 })
          }
        />
      </View>
      {value ? <FlatList
            style={globalStyle.my2}
            keyExtractor={(item) => item.id.toString()}
            data={filterproducts}
            renderItem={({ item }) => (
              <TouchableOpacity
              style={globalStyle.box}
                onPress={() => {
                  setSearchData("");
                  setValue(false);
                  navigation.navigate("Aahashop", { uri: item.link });
                }}
              >
                <Text style={[globalStyle.p, globalStyle.py1]}>
                  {decode(item.title.rendered, {level: 'html5'})}
                </Text>
              </TouchableOpacity>
            )}
          /> : <Text></Text>}
    </View>
  )
}

const styles = StyleSheet.create({

  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  whiteText: {
    color: "#FFF",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

