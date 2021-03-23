import React, { useState } from "react";
import { FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../globals";

export default function Accordian({data, title}) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.easeInEaseOut);
        setExpanded(!expanded)
      }

    return (
        <View>
            <TouchableOpacity
            //   ref={this.accordian}
              style={styles.row}
              onPress={toggleExpand}
            >
              <Text style={[styles.title, styles.font]}>
                {title}
              </Text>
              <Ionicons
                name={
                  expanded ? "chevron-down" : "chevron-forward"
                }
                size={30}
              />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {expanded && (
              <FlatList
              style={globalStyle.my2}
              keyExtractor={(item) => item.id.toString()}
              data={data}
              renderItem={({ item }) => (
                  console.log(item)
                // <Text style={[globalStyle.p, globalStyle.py1]} onPress={()=>{navigation.navigate("Aahashop", {uri: item.link})}}>{item.name}</Text>
                // <Text style={[globalStyle.p, globalStyle.py1]}>{item.name}</Text>
              )}
            />
            )}
          </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    child:{
        backgroundColor: Colors.LIGHTGRAY,
        padding:16,
    }
    
  });
  