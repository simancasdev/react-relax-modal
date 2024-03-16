import { CSSProperties } from "react";
import { Alignment, CloseButton } from ".";
import { Target, TargetAndTransition } from "framer-motion";
export type RelaxModalConfig = {
    alignment: Alignment;
    backgroundColor: string;
    closeOnBackdrop: boolean;
    autoCloseMS: number | undefined;
    style: CSSProperties | undefined;
    closeButton: Partial<CloseButton>;
    closeKey: "Escape" | (string & {});
    onClosed: (() => void) | undefined;
    onBackdrop: (() => void) | undefined;
    animation: {
        initial: Target | undefined;
        animate: TargetAndTransition | undefined;
    };
};
