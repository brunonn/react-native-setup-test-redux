import { render, userEvent } from "@testing-library/react-native";
import { LoginForm } from "./LoginForm";

jest.useFakeTimers();

describe("LoginForm", () => {
  it("should allow to type name", async () => {
    const user = userEvent.setup();
    const screen = render(<LoginForm onSubmit={jest.fn()} />);
    await user.type(screen.getByTestId("login-form-name-input"), "test");
  });

  it("should allow to type password", async () => {
    const user = userEvent.setup();
    const screen = render(<LoginForm onSubmit={jest.fn()} />);
    await user.type(screen.getByTestId("login-form-password-input"), "test");
  });

  it("should show validation alert if form is empty", async () => {
    const user = userEvent.setup();
    const screen = render(<LoginForm onSubmit={jest.fn()} />);
    await user.press(screen.getByRole("button"));
    expect(screen.getByRole("alert")).toBeOnTheScreen();
  });

  it("should submit form if fields are typed", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    const screen = render(<LoginForm onSubmit={onSubmit} />);
    await user.type(screen.getByTestId("login-form-name-input"), "test");
    await user.type(screen.getByTestId("login-form-password-input"), "test");
    await user.press(screen.getByRole("button"));
    expect(onSubmit).toHaveBeenCalledWith({ name: "test", password: "test" });
  });
});
