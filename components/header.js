import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../globals";
import Search from "./Search";

export default function Header({ navigation, product, setDrawer }) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(false);
  const [searchData, setSearchData] = useState("");
  // const [drawer, setDrawer] = useState(false);

  const searchShow = () => {
    setVisible(!visible);
  };
  var filterproducts = product.filter((products) => {
    return products.title.rendered
      .toUpperCase()
      .includes(searchData.toUpperCase());
  });
  // const Drawer = createDrawerNavigator();
  return (
    <View style={{marginTop: 30}}>
      {/* Navigation drawer */}

      {/* Drawer end */}
      <View
        style={[globalStyle.flexRow, globalStyle.flexBetween, styles.header]}
      >
        <Ionicons
          name="menu-outline"
          style={globalStyle.font100}
          onPress={()=>setDrawer(true)}
        ></Ionicons>
        <Image
          style={{ height: 40, width: 100 }}
          source={{
            uri:
              "https://aahashop.com/wp-content/uploads/2021/03/Aaha-shop-logo.png",
          }}
        />

        <View style={styles.flex}>
          <Ionicons
            name="search-outline"
            style={[globalStyle.font100, globalStyle.mr3]}
            onPress={searchShow}
          ></Ionicons>
          <Ionicons name="cart-outline" style={globalStyle.font100}></Ionicons>
        </View>
        {/* <Text style={styles.whiteText}>Hello World</Text> */}
      </View>
      {visible ? (
        <View>
          <View style={[globalStyle.flexRow, globalStyle.p10]}>
            <TextInput
              onChangeText={(text)=> setSearchData(text)}
              onKeyPress={()=>setValue(true)}
              value={searchData}
              placeholder="Find your product"
              style={
                (globalStyle.py10, globalStyle.border, { height: 40, flex: 5 })
              }
            />
            <TouchableHighlight onPress={() => console.log("ASD")}>
              <View
                style={[
                  globalStyle.themebg,
                  globalStyle.py10,
                  globalStyle.px20,
                  { flex: 1, alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Ionicons
                  name="search-outline"
                  style={[globalStyle.font100, globalStyle.gray]}
                ></Ionicons>
              </View>
            </TouchableHighlight>
          </View>
          {value ? <Search products={filterproducts} navigation={navigation} /> : <Text></Text>}
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
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


// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity, FlatList
// } from "react-native";
// import { globalStyle } from "../globals";
// import {decode} from 'html-entities';

// export default function Header({ navigation, product }) {

//   const [visible, setVisible] = useState(false);
//   const [value, setValue] = useState(false);
//   const [searchData, setSearchData] = useState("");
//   const searchShow = () => {
//     if (searchData != "") {
//       // console.log(searchData);
//       setValue(true)
//     } else {
//       setValue(false)
//     }
//   };

//   var filterproducts = product.filter((products) => {
//     return products.title.rendered
//       .toUpperCase()
//       .includes(searchData.toUpperCase());
//   });

//   return (

//     <View>
//       <View style={[globalStyle.flexRow, globalStyle.p10]}>
//         <TextInput
//           onChangeText={(text) => setSearchData(text)}
//           onKeyPress={searchShow}
//           value={searchData}
//           placeholder="Find your product"
//           style={
//             (globalStyle.py10, globalStyle.border, { height: 40, flex: 5 })
//           }
//         />
//       </View>
//       {value ? <FlatList
//             style={globalStyle.my2}
//             keyExtractor={(item) => item.id.toString()}
//             data={filterproducts}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//               style={globalStyle.box}
//                 onPress={() => {
//                   setSearchData("");
//                   setValue(false);
//                   navigation.navigate("Aahashop", { uri: item.link });
//                 }}
//               >
//                 <Text style={[globalStyle.p, globalStyle.py1]}>
//                   {decode(item.title.rendered, {level: 'html5'})}
//                 </Text>
//               </TouchableOpacity>
//             )}
//           /> : <Text></Text>}
//     </View>
//   )
// }

// const styles = StyleSheet.create({

//   header: {
//     paddingHorizontal: 16,
//     paddingVertical: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
//   whiteText: {
//     color: "#FFF",
//   },
//   flex: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
// });

