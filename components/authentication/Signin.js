import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import authStore from "../../store/authStore";
import Home from "../Home";
import { useState } from "react";
import { Button } from "native-base";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    authStore.signin(user, navigation);
  };

  return (
    <View>
      <Text>Signin</Text>
      <TextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
      />
      <TextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <Button onPress={handleSubmit}>
        <Button>Sign in</Button>
      </Button>
      <Button onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </Button>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
