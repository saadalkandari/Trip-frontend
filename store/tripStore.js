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

  createTrip = async (trip) => {
    try {
      const formData = new FormData();
      for (const key in trip) {
        console.log({ key, value: trip[key] });

        formData.append(key, trip[key]);
      }
      const response = await instance.post("/trips", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
      this.trips.push(response.data);
    } catch (error) {
      console.log("Store -> tripCreate -> error", error);
    }

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
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
