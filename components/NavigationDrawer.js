import React from 'react'
import { Button } from 'react-native'
import { StyleSheet, View } from 'react-native'

const NavigationDrawer = () => {

  return (
    <View style={styles.mainView}>
      <View style={{ flex: 2 }}>
        <Button title="a" />
      </View>
      <View style={{ flex: 2 }}>
        <Button title="b" />
      </View>
      <View style={{ flex: 2 }}>
        <Button title="c" />
      </View>
      <View style={{ flex: 2 }}>
        <Button title="d" />
      </View>

    </View>
  )
}

export default NavigationDrawer

const styles = StyleSheet.create({
  mainView: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
})
