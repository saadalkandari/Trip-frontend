import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./components/Navigation";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

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
