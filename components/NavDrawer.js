import React, { useState } from "react";
import { Modal, View, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../globals";
import Accordian from "./Accordian";

export default function NavDrawer({ drawer, setDrawer, categories }) {
    var menu = [
    {
        id: 101,
      title: "Company Info",
      data: [
          { id: 0, name: "About Us", link: 'https://aahashop.com/about-us' },
          { id: 1, name: "Support Center", link: 'https://aahashop.com/contact' },
          { id: 2, name: "Terms and Conditions", link: 'https://aahashop.com/terms-and-conditions' },
      ]
    },
    {
        id: 102,
      title: "Categories",
    //   data: categories
    data: [
        { id: 8, name: "Help", link: 'https://aahashop.com/about-us' },
          { id: 9, name: "Product Return", link: 'https://aahashop.com/about-us' },
          { id: 10, name: "FAQs", link: 'https://aahashop.com/faq' },
    ]
    },
    {
        id: 103,
      title: "Drinks",
      data: [
        { id: 11, name: "Help", link: 'https://aahashop.com/about-us' },
        { id: 12, name: "Product Return", link: 'https://aahashop.com/about-us' },
        { id: 13, name: "FAQs", link: 'https://aahashop.com/faq' },
      ]
    },
    {
        id: 104,
      title: "Deserts",
      data: [
        { id: 15, name: "5", link: 'https://aahashop.com/about-us' },
        { id: 16, name: "6", link: 'https://aahashop.com/about-us' },
        { id: 17, name: "7", link: 'https://aahashop.com/faq' },
      ]
    },
  ];
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={drawer}
      onRequestClose={() => {
        console.log("OUT");
        setDrawer(false);
      }}
    >
      <TouchableOpacity style={globalStyle.drawer} activeOpacity={1}>
        <View style={{ backgroundColor: "#FFF", padding: 10 }}>
          <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <Ionicons
              name="close-outline"
              style={globalStyle.font100}
              onPress={() => setDrawer(false)}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
        <FlatList
              style={globalStyle.my2}
              keyExtractor={(item) => item.id.toString()}
              data={menu}
              renderItem={({ item }) => (
                  <Accordian data={item.data} title={item.title} />
              )}
            />
          
          
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
