import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("<App/>", () => {
  it("first", () => {
    const utils = render(<App />);
    // const text = utils.getByText(/Starter/);
    // expect(text).toHaveTextContent("Starter");
  });
});
