import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthStack } from "../features/auth/AuthStack";
import UserDisplay from "../features/user/UserDisplay";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
