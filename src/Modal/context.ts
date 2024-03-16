import {createContext, useContext} from "react";
import {RelaxModalContext as IContext} from "./types";

export const RelaxModalContext = createContext<IContext>({
  stack: [],
  activeModal: undefined,
  openModal: () => undefined,
  closeModal: () => undefined,
});

export const useRelaxContext = (): IContext => useContext(RelaxModalContext);
