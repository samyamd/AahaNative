import React from "react";
import { Text, View } from "react-native";
import { WebView } from 'react-native-webview';
import { globalStyle } from "../globals";

export default function NewPage ({ navigation, route }) {
    return <WebView source={{ uri: route.params.uri }} />
    // return <View style={[globalStyle.container, globalStyle.p10]}>
    // <Text>New Page {route.params.slug}</Text>
    // </View>
}