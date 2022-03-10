import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import authStore from "../../stores/authStore";
import { useState } from "react";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
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
