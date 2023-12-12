import {RelaxModalConfig} from "./interfaces";

export const DEFAULT_CONFIG: RelaxModalConfig = {
  closeKey: "Escape",
  alignment: "center",
  autoCloseMS: undefined,
  closeOnBackdrop: true,
  onClosed: undefined,
  onBackdrop: undefined,
  backgroundColor: "rgba(0,0,0, .6)",
  animation: {
    initial: {transform: "translateY(4rem)", opacity: 0},
    animate: {transform: "translateY(0)", opacity: 1},
  },
  closeButton: {
    show: false,
    icon: undefined,
    style: undefined,
    defaultIconColor: "#fff",
  },
};
