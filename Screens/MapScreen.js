import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MapView } from "expo";
import { getPreciseDistance } from "geolib";

export default function MapScreen(props) {
  const [DIST, SET_DIST] =useState('')
  let dist;
  let item_coords = {
    coords: {
      latitude: 75.891151,
      longitude: 22.764351,
    },
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let distance = getPreciseDistance(
          { latitude: pos.coords.latitude, longitude: pos.coords.longitude },
          { latitude: 75.891151, longitude: 22.764351 }
        );
         (dist = (distance / 1000).toFixed(2) + " KM");
        console.log("distance", dist);
        SET_DIST(dist)
      },
      (error) => console.log("error message=>", error.message),
      { enableHighAccuracy: true }
    );
  }, []);

  let item_details = props.navigation.getParam("b_details");

  console.log(item_details);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: item_details.avatar,
          }}
          style={{ height: 200, width: window.innerWidth, paddingBottom: 30 , paddingTop: 30  }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, textTransform: "capitalize" }}>
            {item_details.name}
          </Text>
          {item_details.rating !== null ? (
            <>
              <Text style={{ fontSize: 25 }}>
                {parseInt(item_details.rating).toFixed(2)}
              </Text>
            </>
          ) : (
            <Text ></Text>
          )}
        </View>
        <View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          />
          <Text style={{ fontSize: 20 }}>{item_details.about}.</Text>
          <Text style={{ fontSize: 20, fontWeight:'700', marginTop: 20 }}>{DIST} away.</Text>

        </View>
      </View>
    </View>
  );
}

MapScreen.navigationOptions = {
  headerTitle: "Details",
  headerStyle: {
    backgroundColor: "#4a148c",
  },
  headerTintColor: "white",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
});
