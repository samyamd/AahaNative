import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";
import { globalStyle } from "../globals";
import Header from "./header";
import Category from "./Category";
import ItemCard from "./itemCard";
import Footer from "./Footer";

export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  // const [team, setTeam] = useState([
  //   { id: 1, name: "Samyam", age: 24 },
  //   { id: 2, name: "Gaurav", age: 22 },
  //   { id: 3, name: "Raja", age: 25 },
  //   { id: 4, name: "Ram", age: 29 },
  //   { id: 5, name: "Om", age: 34 },
  //   { id: 6, name: "Hari", age: 14 },
  //   { id: 7, name: "Sanjib", age: 44 },
  // ]);
  const [product, setProduct] = useState([]);
  // const [image, setImage] = useState([]);

  // const pressHandler = (key) => {
  //   setTeam((oldTeam) => {
  //     return oldTeam.filter((todo) => todo.key != key);
  //   });
  // };

  // const submitHandler = (name, age) => {
  //   setTeam((oldTeam) => {
  //     return [...oldTeam, { id: Math.random.toString(), name: name, age: age }];
  //   });
  // };
  // const handlePressButtonAsync = (media) => {
    
  //   console.log(media);
  // };
  useEffect(() => {
    fetch("https://aahashop.com/wp-json/wp/v2/product")
      .then((response) => response.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View>
        <Header />
        {/* <ScrollView style={[styles.itemcontainer, {overflow: "scroll"}]} horizontal={true}>
          {isLoading ? (
            <Text style={globalStyle.h1}>Loading...</Text>
          ) : (
            product.map((item) => <ItemCard product={item} handlePressButtonAsync={handlePressButtonAsync}/>)
          )}
        </ScrollView> */}

        <Text style={globalStyle.h1}>Recent Products</Text>

        <FlatList
          keyExtractor={(item) => item.id.toString()}
        
          data={product}
          renderItem={({ item }) =>
            isLoading ? (
              <Text style={globalStyle.h1}>Loading...</Text>
            ) : (
              <ItemCard
                product={item}
              />
            )
          }
        />

        {/* <Team
          team={team}
          submitHandler={submitHandler}
          pressHandler={pressHandler}
        /> */}
        <Category />

        <Footer navigation={navigation} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemcontainer: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
  },
  card: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    marginHorizontal: 10,
    padding: 10,
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

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
