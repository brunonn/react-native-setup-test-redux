import * as React from "react";
import { render, userEvent } from "@testing-library/react-native";
import { MyButton } from "./MyButton";

jest.useFakeTimers();

describe("MyButton", () => {
  it("should render title", () => {
    const screen = render(<MyButton title="hello" />);
    expect(screen.getByText("hello")).toBeOnTheScreen();
  });
  it("should handle onPress", async () => {
    const user = userEvent.setup();
    const onPress = jest.fn();
    const screen = render(<MyButton title="hello" onPress={onPress} />);
    await user.press(screen.getByText("hello"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
