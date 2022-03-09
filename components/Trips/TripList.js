import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import tripStore from "../../store/tripStore";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  return (
    <View>
      <Text>TripList</Text>
      <Text>{tripList}</Text>
    </View>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({});
