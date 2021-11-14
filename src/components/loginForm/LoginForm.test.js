import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/test-utils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm Component", () => {
  describe("When it rendered", () => {
    test("Then it should show two inputs and two buttons", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.getByLabelText(/Username/i);
      const passwordInput = screen.getByLabelText(/Password/i);
      const loginButton = screen.getByRole("button", { name: /Login/i });
      const createNewUserButton = screen.getByRole("button", {
        name: /Create/i,
      });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
      expect(createNewUserButton).toBeInTheDocument();
    });
  });

  describe("When the user types in the username input", () => {
    test("Then it should render a username input with the typed text inside", () => {
      renderWithProviders(<LoginForm />);
      const typedWord = "SomeUsername";

      const usernameInput = screen.getByLabelText(/Username/i);
      userEvent.type(usernameInput, typedWord);

      expect(usernameInput).toHaveValue(typedWord);
    });
  });
});
