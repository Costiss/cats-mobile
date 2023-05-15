import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/theme";
import { Home } from "./src/views/Home";
import { Breed, BreedNavProps } from "./src/views/Breed";



export type RootStackParamList = {
  Home: undefined;
  Breed: BreedNavProps
};
const Stack = createStackNavigator<RootStackParamList>()

type MyThemeType = typeof theme;
declare module "native-base" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends MyThemeType { }
}
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Breed' component={Breed}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


