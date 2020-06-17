import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { CardList } from "../component/cards";
import { BARBER_CONTEXT } from "../APIContext";
import { CWD_API } from "../API/api";

export default function HomeScreen(props) {
  const [BARBER_LIST, SET_BARBER_LIST] = useState({});
  const value = { BARBER_LIST };

  function handleClick() {
    console.log("hello");
    CWD_API().then((data) => {
      SET_BARBER_LIST(data.barber);
    });
  }

  return (
    <View style={styles.body}>
      {Object.keys(BARBER_LIST).length === 0 ? (
        <View style={styles.button}>
          <View style={{width:'70%' ,borderRadius: 20,}}>
          <Button title="Click me" onPress={handleClick} />
          </View>
          <View style={styles.banner}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              Barber App
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <BARBER_CONTEXT.Provider value={value}>
            <CardList props={props} />
          </BARBER_CONTEXT.Provider>
        </View>
      )}
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: "Welcome",
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
    alignContent:'center',
    alignItems:'center',
  },
  banner: {
    width: window.innerWidth,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#4a148c",
    textAlign: "center",
    color: "white",
    justifyContent: "center",
  },
});
