import React from "react";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { screen, userEvent } from "@testing-library/react-native";
// We're using our own custom render function and not RTL's render.
import UserDisplay from "./UserDisplay";
import { renderWithProviders } from "../../test/test-utils";

jest.useFakeTimers();
// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get("https://test.com/api/user", async () => {
    await delay(150);
    return HttpResponse.json({ name: "John Smith" });
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  const user = userEvent.setup();
  renderWithProviders(<UserDisplay />);

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/No user/i)).toBeOnTheScreen();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeOnTheScreen();

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  await user.press(screen.getByRole("button", { name: /Fetch user/i }));
  expect(screen.getByText(/No user/i)).toBeOnTheScreen();

  // after some time, the user should be received
  expect(await screen.findByText(/John Smith/i)).toBeOnTheScreen();
  expect(screen.queryByText(/No user/i)).not.toBeOnTheScreen();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeOnTheScreen();
});
