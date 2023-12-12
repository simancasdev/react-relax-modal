import {createContext, useContext} from "react";
import {RelaxModalContext as IContext} from "../interfaces";
import {DEFAULT_CONFIG} from "../default-values";

export const RelaxModalContext = createContext<IContext>({
  element: undefined,
  config: DEFAULT_CONFIG,
  openModal: () => undefined,
  closeModal: () => undefined,
});

export const useRelaxContext = (): IContext => useContext(RelaxModalContext);
