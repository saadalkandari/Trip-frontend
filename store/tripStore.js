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
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
