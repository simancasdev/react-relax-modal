import { jsx as _jsx } from "react/jsx-runtime";
import { useRelaxModal } from "index";
export const Basic = () => {
    const { openModal } = useRelaxModal();
    return (_jsx("div", { children: _jsx("button", { onClick: () => openModal(_jsx("div", {})) }) }));
};
