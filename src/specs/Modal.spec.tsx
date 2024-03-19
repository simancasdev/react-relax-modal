import React from "react";
import "@testing-library/jest-dom";
import {RelaxModalProvider} from "../";
import {Basic, Multiple} from "./mock-components";
import {fireEvent, render, screen} from "@testing-library/react";

describe("RelaxModal tests", () => {
  it("Should throw error if RelaxModalProvider is missing", async () => {
    jest.spyOn(console, "error").mockImplementation(() => null);
    expect(() => render(<Basic />)).toThrow(/You have to wrap.../);
  });

  it("Modal should open when openModal is called", () => {
    render(
      <RelaxModalProvider>
        <Basic />
      </RelaxModalProvider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("relax-modal")).toBeInTheDocument();
  });

  it("Multiple Modal should be displayed on screen", () => {
    render(
      <RelaxModalProvider>
        <Multiple />
      </RelaxModalProvider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const modals = screen.getAllByTestId("relax-modal");
    expect(modals).toHaveLength(2);
  });
});
