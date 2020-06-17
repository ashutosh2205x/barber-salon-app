import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderText } from "./component/header";
import { BodComponent } from "./component/body";

import ScreenNavigator  from "./Navigation/StackNavigator";

export default function App() {
  return <ScreenNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "#ecf0f1",
  },
});
