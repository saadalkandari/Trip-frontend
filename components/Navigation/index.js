import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Home";
import TripList from "../Trips/TripList";
import TripCreate from "../Trips/TripCreate";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Trip">
      <Screen name="Home" component={Home} />
      <Screen name="Trip" component={TripList} />
      <Screen name="CreateTrip" component={TripCreate} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
