import React from "react";
import { AppNavigator } from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

export const AppEntry = () => {
  return (
    <>
      <Provider store={setupStore()}>
        <AppNavigator />
      </Provider>
    </>
  );
};
