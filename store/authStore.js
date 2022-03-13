import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/signin", userData);
      const { token } = res.data;
      this.user = decode(token);
      navigation.navigate("trips");
    } catch (error) {
      console.log(error);
    }
  };
  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/signup", userData);
      const { token } = res.data;
      this.user = decode(token);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
