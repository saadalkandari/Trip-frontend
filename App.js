import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
