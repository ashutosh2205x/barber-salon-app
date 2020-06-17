import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { CardList } from "./cards";
import { BARBER_CONTEXT } from "../APIContext";
import { CWD_API } from "../API/api";

export const BodComponent = () => {
  const [BARBER_LIST, SET_BARBER_LIST] = useState({});
  const value = { BARBER_LIST };

  function handleClick() {
    CWD_API().then((data) => {
      SET_BARBER_LIST(data.barber);
    });
  }

  return (
    <View style={styles.body}>
      {Object.keys(BARBER_LIST).length === 0 ? (
        <View style={styles.button}>
          <Button title="Click" onPress={handleClick} />
        </View>
      ) : (
        <View>
          <BARBER_CONTEXT.Provider value={value}>
            <CardList />
          </BARBER_CONTEXT.Provider>
        </View>
      )}
    </View>
  );
};

BodComponent.navigationOptions = {
  headerTitle: "Home",
  headerStyle: {
    backgroundColor: "#4a148c",
  },
  headerTintColor: "white",
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#ecf0f1",
    width: "100%",
  },
  button: {
    width: "100%",
  },
});
