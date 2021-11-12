import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

//TestData

//Page Objects
const AppPageObject = {
  get title() {
    return screen.getByText(/Spacex Recent Launches/i);
  },
};

describe("Render SPA stand alone", () => {
  test("Check if app renders completely", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(AppPageObject.title).toBeInTheDocument();
  });
});
