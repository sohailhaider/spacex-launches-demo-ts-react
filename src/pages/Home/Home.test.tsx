import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

//TestData

//Page Objects
const HomePageObject = {
  get title() {
    return screen.getByText(/Spacex Recent Launches/i);
  },
};

describe("Testing Home Page stand-alone", () => {
  test("should render the home page without store", () => {
    render(
      <Home />
    );

    expect(HomePageObject.title).toBeInTheDocument();
  });
});
