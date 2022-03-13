import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../../store/instance";
import { VStack } from "native-base";
import tripStore from "../../store/tripStore";
import React from "react";
import TripList from "./TripList";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <VStack>
      <Image style={styles.image} source={{ uri: baseURL + trip.image }} />
      <Text>{trip.title}</Text>
      <Text>{trip.description}</Text>
      <View>{/* <TripList trips={trip.trips} /> */}</View>
    </VStack>
  );
};

export default TripDetail;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 60,
  },
});
