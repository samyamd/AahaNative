import React, { useState } from 'react'
import { Button, Text, TouchableOpacity } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { globalStyle } from '../globals'
import { Ionicons } from "@expo/vector-icons";

const BottomNav = () => {
const [drawer, setDrawer] = useState(false)
  return (
    <View style={[globalStyle.flexRow, globalStyle.borderT]}>
      <TouchableOpacity style={[globalStyle.flexCenter, globalStyle.borderH,globalStyle.py1, {flex: 1}]}
      onPress={()=>setDrawer(true)}>
        <Ionicons name="home-outline" style={{fontSize: 22}}/>
        <Text style={globalStyle.p}>Home</Text>
      </TouchableOpacity>
      <View style={[globalStyle.flexCenter, globalStyle.borderH,globalStyle.py1, {flex: 1}]}>
        <Ionicons name="home-outline" style={{fontSize: 22}}/>
        <Text style={globalStyle.p}>Home</Text>
      </View>
      <View style={[globalStyle.flexCenter, globalStyle.borderH,globalStyle.py1, {flex: 1}]}>
        <Ionicons name="home-outline" style={{fontSize: 22}} />
        <Text style={globalStyle.p}>Home</Text>
      </View>
      <View style={[globalStyle.flexCenter, globalStyle.borderH,globalStyle.py1, {flex: 1}]}>
        <Ionicons name="home-outline" style={{fontSize: 22}} />
        <Text style={globalStyle.p}>Home</Text>
      </View>
      {/* <View style={{ flex: 2 }}>
        <Button title="d" />
      </View> */}

    </View>
  )
}

export default BottomNav