import {createContext, useContext} from "react";
import {RelaxModalContext as IContext} from "./types";

export const RelaxModalContext = createContext<IContext>(
  undefined as unknown as IContext
);

export const useRelaxModal = (): IContext => {
  const context = useContext(RelaxModalContext);
  if (typeof context === "undefined")
    throw new Error(`
      You have to wrap the components which you want 
      to get access with a <RelaxModalProvider>...</RelaxModalProvider> 
    `);

  return context;
};
