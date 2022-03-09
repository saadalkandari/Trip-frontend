import { StyleSheet, Text, View, Image } from "react-native";
import { HStack } from "native-base";
import React from "react";
import tripStore from "../../store/tripStore";
import { baseURL } from "../../store/instance";

const TripItem = ({ trip }) => {
  return (
    <HStack>
      <Image style={styles.image} source={{ uri: baseURL + trip.image }} />
      <Text>{trip.title}</Text>
      <Text>{trip.description}</Text>
    </HStack>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 60,
  },
});
