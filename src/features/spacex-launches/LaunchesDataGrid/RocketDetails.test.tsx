import React from "react";
import { act, render, screen } from "@testing-library/react";
import RocketDetails from "./RocketDetails";

//Test Data
const rocketData = {
  rocket_id: 1,
  rocket_name: "some rocket",
  rocket_type: "a1",
};

//Page Objects
const RocketDetailsPageObject = {
  get title() {
    //as we dont have any e2e locators
    return screen.getByTestId("rocket-title");
  },
  get viewRocketDetailsBtn() {
    return screen.getByTestId("view-rocket-details-btn");
  },

  clickViewDetailsBtn: () => {
    RocketDetailsPageObject.viewRocketDetailsBtn.click();
  },
};

describe("Individually test if Rocket Details render", () => {
  test("Check if view rocket details button available", () => {
    render(<RocketDetails {...rocketData} />);
    expect(RocketDetailsPageObject.viewRocketDetailsBtn).toBeInTheDocument();
  });
  test("testing view details btn click popup", () => {
    render(<RocketDetails {...rocketData} />);
    act(() => {
      RocketDetailsPageObject.clickViewDetailsBtn();
    });
    expect(RocketDetailsPageObject.title).toHaveTextContent(
      rocketData.rocket_name
    );
  });
});
