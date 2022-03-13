import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Text>HELLO WORLD :)</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    margin: 150,
  },
});
