import { createContext, useContext } from "react";
export const RelaxModalContext = createContext(undefined);
export const useRelaxModal = () => {
    const context = useContext(RelaxModalContext);
    if (typeof context === "undefined")
        throw Error(`
      You have to wrap the components which you want 
      to get access with a <RelaxModalProvider>...</RelaxModalProvider> 
    `);
    return context;
};
