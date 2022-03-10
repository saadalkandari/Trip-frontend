import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { AsyncStorage } from "react-native";
import TripItem from "./TripItem";
import tripStore from "../../store/tripStore";
import { Button } from "native-base";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  return (
    <View>
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
