import { createContext, useContext } from "react";
export const RelaxModalContext = createContext({
    stack: [],
    activeModal: undefined,
    openModal: () => undefined,
    closeModal: () => undefined,
});
export const useRelaxContext = () => useContext(RelaxModalContext);
