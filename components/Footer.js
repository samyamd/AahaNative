import React, { useState } from "react";
import { View, Image, Text, FlatList } from "react-native";
import { globalStyle, ImageSize } from "../globals";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from 'expo-web-browser';

export default function Footer() {
  const [quicks, setQuicks] = useState([
    { id: 1, name: "Support Center", link: 24 },
    { id: 2, name: "Terms and Conditions", link: 22 },
    { id: 3, name: "Shipping", link: 25 },
    { id: 4, name: "Privacy Policy", link: 29 },
    { id: 5, name: "Help", link: 34 },
    { id: 6, name: "Product Return", link: 14 },
    { id: 7, name: "FAQs", link: 44 },
  ]);

  const _handleFb = async () => {
    await WebBrowser.openBrowserAsync('https://www.facebook.com/aahashop');
  }
  const _handleIg = async () => {
    await WebBrowser.openBrowserAsync('https://www.instagram.com/aaha_shop');
  }
  return (
    <View>
      <View style={globalStyle.footer}>
        <View style={[globalStyle.flexRow, globalStyle.flexBetween]}>

        <Image
          // onLoad={ImageSize(40, 100)}
          style={{
            height: 70,
            width: 170,
            marginBottom: 10,
          }}
          source={{
            uri:
            "https://aahashop.com/wp-content/uploads/2021/03/Aaha-shop-logo.png",
          }}
          />
          </View>

        <Text style={[globalStyle.h2, globalStyle.light]}>
          Got Questions? Call Us at:
        </Text>
        <Text style={[globalStyle.h1, globalStyle.theme]}>+97714117025</Text>
        <Text style={[globalStyle.styledp, { fontStyle: "italic" }]}>
          Second floor, United world trade center, Tripureshowr Kathmandu
        </Text>
        <Text style={{ fontSize: 22, color: "#777", marginTop: 10 }}>
          We Using
        </Text>
        <Text style={globalStyle.h2}>Safe Payments</Text>
        <View style={[globalStyle.flexRow, { marginVertical: 10 }]}>
          <Image
            style={{ height: 27, width: 100, marginRight: 20 }}
            source={{
              uri: "https://aahashop.com/wp-content/uploads/2021/03/esewa.png",
            }}
          ></Image>
          <Image
            style={{ height: 35, width: 85, marginRight: 20 }}
            source={{
              uri: "https://aahashop.com/wp-content/uploads/2021/03/Khalti.png",
            }}
          ></Image>
          <Image
            style={{ height: 63, width: 63 }}
            source={{
              uri:
                "https://cdn1.iconfinder.com/data/icons/marketplace-and-shipping/64/COD_cash_on_delivery_shipping_payment_delivery-512.png",
            }}
          ></Image>
        </View>

        <Text style={globalStyle.h5}>Secured by:</Text>
        <View style={[globalStyle.flexRow, { marginVertical: 10 }]}>
          <Image
            style={{ height: 32, width: 83, marginRight: 20 }}
            source={{
              uri:
                "https://aahashop.com/wp-content/uploads/2018/06/norton_av_logo1.png",
            }}
          ></Image>
          <Image
            style={{ height: 33, width: 106 }}
            source={{
              uri:
                "https://aahashop.com/wp-content/uploads/2018/06/mcAfee_logo1.png",
            }}
          ></Image>
        </View>

        <View>
          <Text style={globalStyle.h5}>Quick Links</Text>
          <FlatList
            style={globalStyle.my2}
            keyExtractor={(item) => item.id}
            data={quicks}
            renderItem={({ item }) => (
              <Text style={[globalStyle.p, globalStyle.py1]}>{item.name}</Text>
            )}
          />
        </View>
      </View>
      <View
        style={[globalStyle.p10, globalStyle.themebg, { textAlign: "center" }]}
      >
        <Text style={[globalStyle.h5, globalStyle.gray, { textAlign: "center" }]}>
          &copy; {new Date().getFullYear()} Aahashop. All Rights Reserved
        </Text>
        <View style={[globalStyle.flexRow, { justifyContent: "center" }]}>
          <View style={[globalStyle.flexRow,globalStyle.mr15, globalStyle.py1]} >
            <Ionicons name="logo-facebook" style={[globalStyle.mr5, {fontSize: 18}, globalStyle.gray]} onPress={_handleFb}/>
            <Text style={[globalStyle.h5, globalStyle.gray]} onPress={_handleFb}>
              Facebook
            </Text>
          </View>
          <View style={[globalStyle.flexRow, globalStyle.ml15, globalStyle.py1]}>
            <Ionicons name="logo-instagram" style={[globalStyle.mr5, {fontSize: 18}, globalStyle.gray]} onPress={_handleIg}/>
            <Text style={[globalStyle.h5, globalStyle.gray]} onPress={_handleIg}>Instagram</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
