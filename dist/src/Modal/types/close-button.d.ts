import { CSSProperties } from "react";
export type CloseButton = {
    show: boolean;
    icon: JSX.Element | undefined;
    onClose: () => void | undefined;
    style: CSSProperties | undefined;
    defaultIconColor: string | undefined;
};
