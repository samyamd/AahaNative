import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, TextInput, View, BackHandler, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { globalStyle } from "../globals";

// let ham = document.querySelector(".nav-toggle");
// ham.classList.remove(".nav-toggle");
const runFirst = `
let search = document.querySelector(".xs-category-select-wraper");
search.style.display = "none";
let inputw = document.getElementById("header_forms");
var formw = '<form class="xs-navbar-search xs-navbar-search-wrapper navsearch-form" action="https://aahashop.com/" method="get" id="header_forms" style="display: block;"><div class="input-group"><input type="search" name="s" class="form-control" style="height: 32px;border: 1px solid;" placeholder="Find your product"></div></form>';
inputw.innerHTML = formw;

let header = document.querySelector("#nav-home-tab");
header.style.display = "none";
let account = document.querySelector("#nav-profile-tab");
account.style.display = "none";
let footer = document.querySelector(".xs-footer-section");
footer.style.display = "none";
true; // note: this is required, or you'll sometimes get silent failures
`;
// var txt = '<div class="w-100 py-3 bg-light text-center mx-auto" style="position: fixed; bottom: 0; z-index: 1000000"><div class="row"><div class="col-3"><a class="d-flex flex-column" href="./index.html"><i class="fa fa-home"></i><span>Home</span></a></div><div class="col-3"><a class="d-flex flex-column" href="./login.html"><i class="fa fa-search"></i><span>Search</span></a></div><div class="col-3"><a class="d-flex flex-column" href="./register.html"><i class="fa fa-calculator"></i><span>Login</span></a></div><div class="col-3"><a class="d-flex flex-column" href="https://aahashop.com/?v=8bc2afe7028c"><i class="fa fa-user"></i><span>Account</span></a></div></div></div>'
  // footer.innerHTML = txt;
  
export default function NewPage({ navigation, route }) {
  const [canGoBack, setCanGoBack] = useState(false)
  const [currentUrl, setCurrentUrl] = useState(route.params.uri)
  const webviewRef = useRef(null)

  const backButtonHandler = () => {

    if (canGoBack) {
      webviewRef.current.goBack()
    } else {
      navigation.goBack()
    }
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler)
  }, [canGoBack])

  return (<WebView style={{marginTop: StatusBar.currentHeight }}
    ref={webviewRef}
    source={{ uri: currentUrl }}
    injectedJavaScript={runFirst}
    renderLoading={() => (
      <ActivityIndicator
        color='black'
        size='large'
      />
    )}
    onNavigationStateChange={navState => {
      setCanGoBack(navState.canGoBack);
      setCurrentUrl(navState.url);
    }}
  />
  );
  // return <View style={[globalStyle.container, globalStyle.p10]}>
  // <Text>New Page {route.params.slug}</Text>
  // </View>
}
