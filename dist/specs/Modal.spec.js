import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { Basic } from "./mock-components";
describe("RelaxModal tests", () => {
    it("Modal should throw error if RelaxModalProvider is not found", () => {
        try {
            render(_jsx(Basic, {}));
            const button = screen.getByRole("button");
            fireEvent.click(button);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    it("Modal should open when openModal is called", () => { });
    it("Multiple Modal should be displayed on screen", () => { });
});
