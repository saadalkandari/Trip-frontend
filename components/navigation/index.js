import { StyleSheet } from "react-native";
import React from "react";
import Signin from "../authentication/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../authentication/Signup";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
