import {createContext, useContext} from "react";
import {RelaxModalContext as IContext} from "./types";

export const RelaxModalContext = createContext<IContext>({
  stack: [],
  activeModal: undefined,
  openModal: () => undefined,
  closeModal: () => undefined,
});

export const useRelaxContext = (): IContext => {
  const context = useContext(RelaxModalContext);
  if (!context)
    throw Error(`
    You have to wrap the components where you want 
    to get access with a <RelaxModalProvider>...</RelaxModalProvider> 
  `);
  return context;
};
