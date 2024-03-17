import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RelaxModal } from "./RelaxModal";
import { RelaxModalContext } from "./context";
import { DEFAULT_CONFIG } from "./default-values";
import { useCallback, useEffect, useMemo, useState } from "react";
export const RelaxModalProvider = ({ children, rootConfig, debug = false, }) => {
    const [stack, setStack] = useState([]);
    const [activeModal, setActiveModal] = useState();
    const openModal = useCallback((element, userConfig) => {
        const newModal = {
            element,
            config: Object.assign({}, DEFAULT_CONFIG, rootConfig, userConfig),
        };
        setStack((prevModals) => [...prevModals, newModal]);
        setActiveModal(newModal);
    }, []);
    const closeModal = useCallback(() => {
        const removed = stack.slice(-1)[0];
        if (removed) {
            const { onBackdrop, onClosed } = removed["config"];
            if (onClosed)
                onClosed();
            if (onBackdrop)
                onBackdrop();
        }
        if (stack.length > 1) {
            const temp = [...stack];
            setActiveModal(temp[stack.length - 2]);
            temp.pop();
            setStack(temp);
        }
        else {
            setStack([]);
            setActiveModal(undefined);
        }
    }, [stack]);
    useEffect(() => {
        const currentModal = stack[stack.length - 1];
        if (currentModal) {
            const { autoCloseMS } = currentModal["config"];
            if (typeof autoCloseMS === "number") {
                setTimeout(() => {
                    closeModal();
                }, autoCloseMS);
            }
        }
    }, [stack]);
    const values = useMemo(() => ({
        stack,
        openModal,
        closeModal,
        activeModal,
    }), [stack]);
    useEffect(() => {
        if (debug) {
            console.log("Active Modal: ", activeModal);
            console.log("Stack: ", stack);
        }
    }, [debug, activeModal, stack]);
    return (_jsxs(RelaxModalContext.Provider, { value: values, children: [children, stack.map(({ element, config }, key) => (_jsx(RelaxModal, { element: element, config: config }, key)))] }));
};
