import React from "react";
import { useState } from "react";
import { globalStyle } from "../globals";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Teams({ team , submitHandler, pressHandler }) {
    const [name, SetName] = useState('')
    const [age, SetAge] = useState('')

    const changeName = (val) => {
        SetName(val)
    }
    const changeAge = (val) => {
        SetAge(val)
    }
  return (
    <View style={globalStyle.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Member Name"
          onChangeText={changeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Member Age"
          onChangeText={changeAge}
        />
        <Button
          title="Add team Member"
          onPress={() => {
            submitHandler(name, age);
          }}
          title="Add Team"
          color="blue"
        />
      </View>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        key={(item) => item.id}
        data={team}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              width: "31.3333%",
              marginHorizontal: "1%",
              backgroundColor: "#eee",
            }}
            onTouchStart={pressHandler}
          >
            <Text style={globalStyle.h1}>{item.name}</Text>
            <Text style={globalStyle.p}>{item.age}</Text>
          </View>
        )}
      />
      {/* <ScrollView>
          {team.map((item) => (
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                backgroundColor: "#eee",
              }}
              key={item.id}
            >
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          ))}
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
  },
});
