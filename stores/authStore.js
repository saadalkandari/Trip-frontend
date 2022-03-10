import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import decode from "jwt-decode";
// import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
}

signin = async (userData, navigation) => {
  try {
    const res = await instance.post("/signin");
  } catch (error) {}
};
signup = async (userData, navigation) => {
  try {
    const res = await instance.post("/signup");
  } catch (error) {}
};

const authStore = new AuthStore();
export default authStore;
