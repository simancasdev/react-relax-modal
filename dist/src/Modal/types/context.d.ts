/// <reference types="react" />
import { Modal, RelaxModalConfig } from ".";
export type RelaxModalContext = {
    stack: Modal[];
    closeModal: () => void;
    activeModal: Modal | undefined;
    openModal: (element: JSX.Element, config?: Partial<RelaxModalConfig>) => void;
};
