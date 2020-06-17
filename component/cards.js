import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  Dimensions,
  ScrollView,
} from "react-native";
import { BARBER_CONTEXT } from "../APIContext";
import { Card, ListItem, Li } from "react-native-elements";
const { height, width } = Dimensions.get("window");
import { DETAILS_CONTEXT } from "../APIContext";
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    width: window.innerWidth,
  },
});

export const CardList = (props) => {
  let img_uri = "http://www.crazywebdesigners.com/salon/images/";

  function CardDetails(bname, avatar, aboutus, lat, long, Averagerate, props) {
    let detail_obj = {
      name: bname,
      avatar: img_uri + avatar,
      about: aboutus,
      coords: { lat, long },
      rating: Averagerate,
    };
    props.props.navigation.navigate({
      routeName: "Details",
      params: { b_details: detail_obj },
    });
  }

  return (
    <BARBER_CONTEXT.Consumer>
      {(data) => {
        let res = data.BARBER_LIST;
        if (Object.keys(res).length === 0)
          return (
            <View style={styles.container}>
              <Card title={"item.bname"}>
                <Text style={styles.paragraph}>Loading...</Text>
              </Card>
            </View>
          );
        else
          return (
            <View style={styles.container}>
              <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                {res.map(
                  ({ bname, avatar, aboutus, lat, long, Averagerate }) => (
                    <Card
                      image={
                        `http://www.crazywebdesigners.com/salon/images/` +
                        avatar
                      }
                      imageStyle={{ width: window.innerWidth , paddingBottom: 10 }}
                      key={Math.random().toFixed(3)}
                    >
                      <Text style={styles.paragraph}>{bname}.</Text>
                      <Button
                        buttonStyle={{ backgroundColor: "black" }}
                        title="Go to details"
                        onPress={() =>
                          CardDetails(
                            bname,
                            avatar,
                            aboutus,
                            lat,
                            long,
                            Averagerate,
                            props
                          )
                        }
                      />
                    </Card>
                  )
                )}
              </ScrollView>
            </View>
          );
      }}
    </BARBER_CONTEXT.Consumer>
  );
};
