import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { X } from "react-feather";
import { motion } from "framer-motion";
import { CSSAlignment } from "./helpers";
import { useRelaxContext } from "./context";
import { useKeydown } from "./hooks/useKeydown";
import { CloseButton, Backdrop, Modal, motionStyle } from "./styled";
export const RelaxModal = ({ element, config }) => {
    useKeydown();
    const { closeModal } = useRelaxContext();
    const { style, alignment, animation, onBackdrop, closeButton, closeOnBackdrop, backgroundColor, } = config;
    const { initial, animate } = animation;
    const { justifyContent, alignItems } = CSSAlignment[alignment];
    const { icon, show, onClose, defaultIconColor, style: closeButtonStyle, } = closeButton;
    return (_jsxs(Fragment, { children: [_jsxs(Modal, { style: {
                    ...style,
                    alignItems,
                    justifyContent,
                    backgroundColor,
                }, children: [_jsx(Backdrop, { onClick: () => {
                            if (closeOnBackdrop)
                                closeModal();
                            if (typeof onBackdrop === "function")
                                onBackdrop();
                        } }), _jsx(motion.div, { animate: animate, initial: initial, style: motionStyle, children: element })] }), show && (_jsx(CloseButton, { style: closeButtonStyle, children: icon ?? _jsx(X, { strokeWidth: 2.5, color: defaultIconColor }), onClick: () => {
                    closeModal();
                    if (typeof onClose === "function")
                        onClose();
                } }))] }));
};
