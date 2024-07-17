import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface MyButtonProps {
  title: string;
  onPress?: () => void;
}

export const MyButton = ({ onPress, title }: MyButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
