import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/test-utils";
import UserCard from "./UserCard";

describe("Given a UserCard component", () => {
  describe("When it rendered", () => {
    test("Then it should show image and two buttons", () => {
      renderWithProviders(<UserCard />);

      const addToFriendsButton = screen.getByRole("button", {
        name: "Add to friends",
      });
      const addToEnemiesButton = screen.getByRole("button", {
        name: "Add to enemies",
      });
      const userImage = screen.getByRole("img", { name: "User image" });

      expect(addToFriendsButton).toBeInTheDocument();
      expect(addToEnemiesButton).toBeInTheDocument();
      expect(userImage).toBeInTheDocument();
    });
  });
});
