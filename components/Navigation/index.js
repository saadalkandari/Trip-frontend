import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Home";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
     <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
