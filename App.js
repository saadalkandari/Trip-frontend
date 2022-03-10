import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./components/navigation";
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
