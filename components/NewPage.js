import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, TextInput, View, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import { globalStyle } from "../globals";

const runFirst = `let selector = document.querySelector(".xs-footer-section");
  let header = document.querySelector(".nav-toggle");
  header.innerHTML = '<div></div>';
  var txt = '<div class="w-100 py-3 bg-light text-center mx-auto" style="position: fixed; bottom: 0; z-index: 1000000"><div class="row"><div class="col-3"><a class="d-flex flex-column" href="./index.html"><i class="fa fa-home"></i><span>Home</span></a></div><div class="col-3"><a class="d-flex flex-column" href="./login.html"><i class="fa fa-search"></i><span>Search</span></a></div><div class="col-3"><a class="d-flex flex-column" href="./register.html"><i class="fa fa-calculator"></i><span>Login</span></a></div><div class="col-3"><a class="d-flex flex-column" href="https://aahashop.com/?v=8bc2afe7028c"><i class="fa fa-user"></i><span>Account</span></a></div></div></div>'
  selector.innerHTML = txt;
  true; // note: this is required, or you'll sometimes get silent failures
`;

export default function NewPage({ navigation, route }) {
  const [canGoBack, setCanGoBack] = useState(false)
  const [currentUrl, setCurrentUrl] = useState(route.params.uri)
  const webviewRef = useRef(null)

  const backButtonHandler = () => {

    if (canGoBack) {
      console.log(canGoBack);
      webviewRef.current.goBack()
    } else {
      navigation.goBack()
    }
    return true;
  }
  console.log(currentUrl);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler)
  }, [canGoBack])

  return (<WebView
    ref={webviewRef}
    source={{ uri: currentUrl }}
    injectedJavaScript={runFirst}
    renderLoading={() => (
      <ActivityIndicator
        color='black'
        size='large'
        style={{ flex: 1 }}
      />
    )}
    onNavigationStateChange={navState => {
      setCanGoBack(navState.canGoBack);
      setCurrentUrl(navState.url);
      console.log(canGoBack);

    }}
  />
  );
  // return <View style={[globalStyle.container, globalStyle.p10]}>
  // <Text>New Page {route.params.slug}</Text>
  // </View>
}
