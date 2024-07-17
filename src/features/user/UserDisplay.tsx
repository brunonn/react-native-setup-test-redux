import React from "react";
import { fetchUser, selectUserName, selectUserFetchStatus } from "./user.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button, Text, View } from "react-native";

export default function UserDisplay() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const userFetchStatus = useAppSelector(selectUserFetchStatus);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Display the current user name */}
      <Text>{userName}</Text>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <Button title="Fetch user" onPress={() => dispatch(fetchUser())} />
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === "loading" && <Text>Fetching user...</Text>}
    </View>
  );
}
