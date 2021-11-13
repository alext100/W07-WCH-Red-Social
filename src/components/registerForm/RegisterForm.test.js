import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/test-utils";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm Component", () => {
  describe("When it rendered", () => {
    test("Then it should show five inputs and one button", () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.getByLabelText(/Username/i);
      const passwordInput = screen.getByLabelText(/Password/i);
      const nameInput = screen.getByLabelText("Name");
      const imagedInput = screen.getByLabelText(/Image/i);
      const ageInput = screen.getByLabelText("Age");
      const createNewUserButton = screen.getByRole("button", {
        name: /Create/i,
      });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(imagedInput).toBeInTheDocument();
      expect(ageInput).toBeInTheDocument();
      expect(createNewUserButton).toBeInTheDocument();
    });
  });

  describe("When the user types in the username, name, password or age input", () => {
    test("Then it should render a username input with the typed text inside", () => {
      renderWithProviders(<RegisterForm />);
      const typedWord = "Some text";
      const typedNumber = 30;

      const usernameInput = screen.getByLabelText(/Username/i);
      userEvent.type(usernameInput, typedWord);
      const passwordInput = screen.getByLabelText(/Password/i);
      userEvent.type(passwordInput, typedWord);
      const nameInput = screen.getByLabelText("Name");
      userEvent.type(nameInput, typedWord);
      const ageInput = screen.getByLabelText("Age");
      userEvent.paste(ageInput, typedNumber);

      expect(usernameInput).toHaveValue(typedWord);
      expect(nameInput).toHaveValue(typedWord);
      expect(passwordInput).toHaveValue(typedWord);
      expect(ageInput).toHaveValue(typedNumber);
    });
  });

  describe("When the user choose the file to upload", () => {
    test("This file should be uploaded", () => {
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      renderWithProviders(<RegisterForm />);
      const imagedInput = screen.getByLabelText(/Image/i);

      userEvent.upload(imagedInput, file);

      expect(imagedInput.files[0]).toStrictEqual(file);
      expect(imagedInput.files).toHaveLength(1);
    });
  });
});
