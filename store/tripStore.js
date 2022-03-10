import { AsyncStorage } from "AsyncStorage";
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
    } catch (error) {
      console.log("TripStore -> fetchTrips -> error", error);
    }
  };

  // deleteTrip = async (tripId) => {
  //   this.trips = this.trips.filter((trip) => trip._id !== tripId);
  //   try {
  //     const jsonValue = JSON.stringify(this.trips);
  //     await AsyncStorage.setItem("Trip", jsonValue);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip._id !== tripId);
    } catch (error) {
      console.log("TripStore -> deleteTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
