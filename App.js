import RootNavigator from "./components/Navigation/index";
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
