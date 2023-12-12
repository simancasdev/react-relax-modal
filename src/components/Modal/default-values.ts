import {RelaxModalConfig} from "./interfaces";

export const DEFAULT_CONFIG: RelaxModalConfig = {
  alignment: "center",
  autoCloseMS: undefined,
  backgroundColor: "rgba(0,0,0, .6)",
  closeButton: {
    show: false,
    icon: undefined,
    style: undefined,
    defaultIconColor: "#fff",
    onClosed: () => undefined,
  },
};
