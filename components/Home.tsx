import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MyButton } from "../src/ui/MyButton";

type Props = {
  user: string;
};

export function Home({ user }: Props) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Welcome {user}!
      </Text>
      <MyButton
        title="Hello from my button!"
        onPress={() => {
          alert("Hello");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    marginTop: 8,
    marginBottom: 40,
  },
});
