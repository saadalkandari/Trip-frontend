import { Button, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { AsyncStorage } from "react-native";
import TripItem from "./TripItem";
import tripStore from "../../store/tripStore";

import TripCreate from "./TripCreate";
import { useNavigation } from "@react-navigation/native";

import { Button } from "native-base";


const TripList = () => {
  const navigation = useNavigation();
  const tripList = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("CreateTrip")}
        title="ADD A TRIP"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>TripList</Text>
      <Text>{tripList}</Text>
      <Button
        onPress={() => {
          AsyncStorage.clear();
          navigation.replace("Signin");
        }}
      >
        Logout!
      </Button>
    </View>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({});
