import {CSSProperties} from "react";

export type CloseButton = {
  show: boolean;
  onClosed: () => void;
  icon: JSX.Element | undefined;
  style: CSSProperties | undefined;
  defaultIconColor: string | undefined;
};
