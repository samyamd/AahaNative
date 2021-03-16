import React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { globalStyle } from "../globals";

const runFirst = `let selector = document.querySelector(".xs-footer-section");
  var txt = '<div class="alert alert-success h1 alert-dismissible fade show" role="alert">Footer changed to alert hai allah<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
  selector.innerHTML = txt;
  true;
`

export default function NewPage({ navigation, route }) {
  return (
    <WebView source={{ uri: route.params.uri }} injectedJavaScript={runFirst} />
  );
  // return <View style={[globalStyle.container, globalStyle.p10]}>
  // <Text>New Page {route.params.slug}</Text>
  // </View>
}
