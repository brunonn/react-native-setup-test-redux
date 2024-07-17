import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./login/LoginScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
}
