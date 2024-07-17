import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

interface LoginFormProps {
  onSubmit: (data: { name: string; password: string }) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit() {
    if (name === "" || password === "") {
      setErrorMessage("Invalid form");
      return;
    }
    onSubmit({
      name,
      password,
    });
  }

  return (
    <View>
      <View style={{ gap: 20 }}>
        <TextInput
          testID="login-form-name-input"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          testID="login-form-password-input"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>

      {errorMessage ? (
        <Text accessibilityRole="alert">{errorMessage}</Text>
      ) : null}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 16,
    borderColor: "#dadada",
  },
});
