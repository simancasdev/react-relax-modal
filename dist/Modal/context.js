import { createContext, useContext } from "react";
export const RelaxModalContext = createContext({
    stack: [],
    activeModal: undefined,
    openModal: () => undefined,
    closeModal: () => undefined,
});
export const useRelaxContext = () => {
    const context = useContext(RelaxModalContext);
    if (!context)
        throw Error(`
    You have to wrap the components where you want 
    to get access with a <RelaxModalProvider>...</RelaxModalProvider> 
  `);
    return context;
};
