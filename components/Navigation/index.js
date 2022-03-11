import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Home";
import TripList from "../Trips/TripList";
import Signup from "../authentication/Signup";
import Signin from "../authentication/Signin";
import TripDetail from "../Trips/TripDetail";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="trips">
      <Screen name="Home" component={Home} />
      <Screen name="trips" component={TripList} />
      <Screen
        name="tripDetail"
        component={TripDetail}
        options={({ route }) => ({ title: route.params.trip.title })}
      />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
